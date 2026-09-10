'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/shared/Button';
import heroImage1 from '@/components/public/images/hero images 1.png';
import heroImage2 from '@/components/public/images/Hero images 2.png';
import heroImage3 from '@/components/public/images/Hero images 3.png';

// Source photos are the hospital's own promotional graphics, shown at full clarity with no
// overlay or card behind the text — a solid/translucent card looked wrong against whichever of
// the 3 rotating photos was showing. Instead the text itself is white with a strong drop-shadow,
// which stays legible against any busy or light-colored background.
//
// object-contain (not object-cover): these banners have captions right at the top/bottom edges
// (e.g. "NEW EMERGENCY ROOM"), and object-cover crops those off whenever the section's aspect
// ratio is wider than the image's own — which happens at wide viewports since the section's
// height is driven by the text content, not the image. object-contain never crops; the section
// background shows as letterboxing on the sides instead, which reads as intentional.
const BACKGROUND_IMAGES = [heroImage1, heroImage2, heroImage3];

const ROTATE_INTERVAL_MS = 5000;

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((index) => (index + 1) % BACKGROUND_IMAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden bg-white py-24 text-center sm:py-32">
      {BACKGROUND_IMAGES.map((src, index) => (
        <Image
          key={src.src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={index === 0}
          className={`object-contain transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="relative mx-4 px-4 text-brand-yellow [text-shadow:0_2px_10px_rgb(0_0_0_/_70%)]">
        <div className="mx-auto h-1 w-16 bg-brand-yellow" />
        <h1 className="mt-6 text-7xl font-bold sm:text-8xl">Tanauan Medical Center</h1>
        <p className="mx-auto mt-4 max-w-2xl text-2xl sm:text-3xl">
          Sa Kalusugan, Tanauan Medical Center ang Maaasahan — trusted, PhilHealth-accredited care
          in Tanauan, Batangas.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 [text-shadow:none]">
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
