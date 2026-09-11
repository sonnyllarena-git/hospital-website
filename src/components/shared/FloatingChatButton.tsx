'use client';

import { useEffect, useRef, useState } from 'react';
import ChatWidget from './ChatWidget';

const CANVAS_SIZE = 160; // keeps the per-frame flood-fill cheap
const KEY_LUMINANCE = 55; // "dark" threshold used only to find background touching the edge

// The source video has a solid dark background baked in (no real alpha channel). A flat
// luminance key would also erase dark subject pixels (e.g. black hair) — instead, flood-fill
// from the frame's border and only clear dark pixels connected to it, same approach as the
// border-touching cutout technique already used for photos on this project (see LESSONS.md).
function keyOutBackground(data: Uint8ClampedArray, size: number) {
  const luminance = (idx: number) => (data[idx * 4] + data[idx * 4 + 1] + data[idx * 4 + 2]) / 3;
  const visited = new Uint8Array(size * size);
  const stack: number[] = [];
  const seed = (x: number, y: number) => {
    const idx = y * size + x;
    if (!visited[idx] && luminance(idx) < KEY_LUMINANCE) {
      visited[idx] = 1;
      stack.push(idx);
    }
  };
  for (let x = 0; x < size; x++) {
    seed(x, 0);
    seed(x, size - 1);
  }
  for (let y = 0; y < size; y++) {
    seed(0, y);
    seed(size - 1, y);
  }
  while (stack.length > 0) {
    const idx = stack.pop() as number;
    data[idx * 4 + 3] = 0;
    const x = idx % size;
    const y = (idx / size) | 0;
    if (x > 0) seed(x - 1, y);
    if (x < size - 1) seed(x + 1, y);
    if (y > 0) seed(x, y - 1);
    if (y < size - 1) seed(x, y + 1);
  }
}

// The launcher icon stays in place whether the chat is open or closed — the chat box (with its
// own close button) opens above it, rather than the icon itself flipping to an X.
export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  const drawFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { willReadFrequently: true });
    if (!video || !canvas || !ctx || video.videoWidth === 0) return;
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    ctx.drawImage(video, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
    const frame = ctx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    keyOutBackground(frame.data, CANVAS_SIZE);
    ctx.putImageData(frame, 0, 0);
  };

  const loop = () => {
    drawFrame();
    frameRef.current = requestAnimationFrame(loop);
  };

  const handleHoverStart = () => {
    videoRef.current?.play().catch(() => {});
    frameRef.current = requestAnimationFrame(loop);
  };

  const handleHoverEnd = () => {
    cancelAnimationFrame(frameRef.current);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0; // rewind so the next hover always replays from the start
  };

  const handleClick = () => {
    setIsOpen((open) => !open);
    // Touch devices have no real hover state, but a tap/click is a genuine user gesture every
    // browser honors for unmuted autoplay — use it as the mobile equivalent of hover-to-play.
    if (isOpen) handleHoverEnd();
    else handleHoverStart();
  };

  useEffect(() => {
    // A cached/fast-loading video can fire "loadeddata" before this effect attaches its
    // listener via the JSX prop below — catch that race by drawing immediately if data is
    // already available.
    if ((videoRef.current?.readyState ?? 0) >= 2) drawFrame();
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && <ChatWidget onClose={() => setIsOpen(false)} />}
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="group flex flex-col items-center gap-1"
      >
        <span className="flex h-28 w-28 items-center justify-center transition-transform duration-200 group-hover:scale-105">
          <video
            ref={videoRef}
            src="/images/ai chat.mp4"
            loop
            playsInline
            preload="auto"
            onLoadedData={drawFrame}
            onSeeked={drawFrame}
            className="hidden"
          />
          <canvas
            ref={canvasRef}
            aria-label="Chat with Tanauan Medical Center"
            className="h-full w-full"
          />
        </span>
        <span className="rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white shadow">
          Chat with us
        </span>
      </button>
    </div>
  );
}
