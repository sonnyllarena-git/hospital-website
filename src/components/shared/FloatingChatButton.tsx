'use client';

import { useEffect, useRef, useState } from 'react';
import { keyOutBackground } from '@/lib/videoKeying';
import ChatWidget from './ChatWidget';

const CANVAS_SIZE = 160; // keeps the per-frame flood-fill cheap

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
    // Plays unmuted whenever the browser allows it. Before the page has seen a real click
    // anywhere, browsers silently block unmuted autoplay on a hover — accepted as expected
    // behavior rather than forcing a muted fallback; sound works normally on every hover once
    // the page has had that first click (this button's own click included).
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
            className="h-full w-full drop-shadow-md"
          />
        </span>
        <span className="rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white shadow">
          Chat with us
        </span>
      </button>
    </div>
  );
}
