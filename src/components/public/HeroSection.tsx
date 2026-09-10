'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/shared/Button';

// Source photos are the hospital's own promotional graphics (with baked-in text/logos), not
// clean lifestyle photography — the brand-green overlay below exists to mask that busy detail
// so our own headline stays legible. Swap for real photography later for a cleaner look.
const BACKGROUND_IMAGES = [
  '/images/emergency-room.jpg',
  '/images/facilities-overview.jpg',
  '/images/doctors/medical-team-2.jpg',
];

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
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden text-center text-white">
      {BACKGROUND_IMAGES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-brand-green/80" />

      <div className="relative px-4">
        <div className="mx-auto h-1 w-16 bg-brand-yellow" />
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Tanauan Medical Center</h1>
        <p className="mx-auto mt-4 max-w-xl">
          Sa Kalusugan, Tanauan Medical Center ang Maaasahan — trusted, PhilHealth-accredited care
          in Tanauan, Batangas.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
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
