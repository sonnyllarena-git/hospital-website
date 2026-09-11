'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@/components/shared/Button';

const HERO_VIDEO_SRC = '/images/POV_walk_into_hospital_lobby_20260910172235.mp4';

const HERO_TEXT_STYLE =
  'text-brand-yellow [-webkit-text-stroke:0.75px_black] [text-shadow:0_2px_10px_rgb(0_0_0_/_90%)]';

// Fixed to the source video's native 1918x845 resolution so the hero reads as a full banner
// (fills the viewport width, cropped to that height) rather than resizing with the text content
// like the old rotating-photo version — visitors scroll past it to reach the rest of the page.
// No `loop`: the video plays once and holds on its last frame, per Sonny's direction.
//
// The video has real audio, so it can't use the `autoplay` attribute — browsers block audible
// autoplay outright, with no JS workaround. Instead it sits paused on its first frame (loaded
// normally, since only *playback* is gated, not loading) behind a "Click to Start" prompt; the
// header/footer stay visible immediately so navigation and contact info are never hidden behind
// it. Clicking is a real user gesture, so it's the one guaranteed place sound is allowed to play.
export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handleStart = useCallback(() => {
    videoRef.current?.play().catch(() => {});
    setStarted(true);
  }, []);

  useEffect(() => {
    // A hard refresh always resets the browser's own "has this document been interacted with"
    // flag — no way around that, a fresh click is unavoidable there. But arriving here via
    // client-side navigation (e.g. clicking "Home" from another page) never reloads the
    // document, so that flag is still true from the click that got them here. Skip the gate and
    // play immediately in that case rather than needlessly asking for a second click.
    if (navigator.userActivation?.hasBeenActive) handleStart();
  }, [handleStart]);

  return (
    <section className="relative flex h-[845px] w-full items-center justify-center overflow-hidden bg-black text-center">
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <button
        type="button"
        onClick={handleStart}
        aria-hidden={started}
        tabIndex={started ? -1 : 0}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          started ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <span
          className={`${HERO_TEXT_STYLE} text-4xl font-bold transition-transform hover:scale-105 sm:text-5xl`}
        >
          Click to Start
        </span>
      </button>

      <div
        aria-hidden={!started}
        className={`relative mx-4 px-4 transition-opacity duration-700 ${HERO_TEXT_STYLE} ${
          started ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="mx-auto h-1 w-16 bg-brand-yellow" />
        <h1 className="mt-6 text-7xl font-bold sm:text-8xl">Tanauan Medical Center</h1>
        <p className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
          Sa Kalusugan, Tanauan Medical Center ang Maaasahan — trusted, PhilHealth-accredited care
          in Tanauan, Batangas.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 [-webkit-text-stroke:0px] [text-shadow:none]">
          <Button href="/find-a-doctor" variant="light">
            Find a Doctor
          </Button>
          <Button href="/services" variant="outlineLight">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
