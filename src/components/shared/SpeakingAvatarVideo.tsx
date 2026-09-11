'use client';

import { useCallback, useEffect, useRef } from 'react';
import { keyOutBackground } from '@/lib/videoKeying';

const CANVAS_SIZE = 160; // matches the floating launcher's own resolution/quality

// A muted, background-keyed avatar clip that plays while `speaking` is true and rewinds to its
// first frame (idle) as soon as it goes false — used to "act out" a text-to-speech reply without
// needing the video's own audio track, which isn't synced to whatever text is actually spoken.
export default function SpeakingAvatarVideo({
  src,
  speaking,
  className,
  ariaLabel,
}: {
  src: string;
  speaking: boolean;
  className?: string;
  ariaLabel: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  const drawFrame = useCallback(() => {
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
  }, []);

  const loop = useCallback(() => {
    drawFrame();
    frameRef.current = requestAnimationFrame(loop);
  }, [drawFrame]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (speaking) {
      video.play().catch(() => {});
      frameRef.current = requestAnimationFrame(loop);
    } else {
      cancelAnimationFrame(frameRef.current);
      video.pause();
      video.currentTime = 0; // idle frame until the next reply starts
    }
    return () => cancelAnimationFrame(frameRef.current);
  }, [speaking, loop]);

  useEffect(() => {
    // A cached/fast-loading video can fire "loadeddata" before this effect attaches its
    // listener via the JSX prop below — catch that race by drawing immediately if data is
    // already available.
    if ((videoRef.current?.readyState ?? 0) >= 2) drawFrame();
  }, [drawFrame]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={drawFrame}
        onSeeked={drawFrame}
        className="hidden"
      />
      <canvas ref={canvasRef} aria-label={ariaLabel} className={className} />
    </>
  );
}
