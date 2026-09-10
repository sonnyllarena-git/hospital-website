import type { Metadata } from 'next';
import Image from 'next/image';
import Card from '@/components/shared/Card';

export const metadata: Metadata = {
  title: 'About Us | Tanauan Medical Center',
  description:
    "Learn about Tanauan Medical Center's mission, vision, history, and values since 1982.",
};

// Mission/Vision copy below is placeholder text pending the hospital's official wording.
// Founding year, address, and facility names are drawn from confirmed reference material.
const VALUES = ['Teamwork', 'Malasakit', 'Commitment to Excellence', 'Integrity', 'Honesty'];

export default function AboutUsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-green">About Tanauan Medical Center</h1>
      <p className="mt-2 text-gray-600">Serving Tanauan, Batangas since 1982.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-brand-green">Our Mission</h2>
          <p className="mt-2 text-gray-700">
            To provide accessible, compassionate, and quality healthcare services to the people of
            Tanauan and neighboring communities, delivered with integrity and a commitment to
            excellence.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold text-brand-green">Our Vision</h2>
          <p className="mt-2 text-gray-700">
            To be the most trusted healthcare institution in Batangas, recognized for compassionate
            patient care, clinical excellence, and continuous investment in our people and
            facilities.
          </p>
        </Card>
      </div>

      <section className="mt-10 grid gap-6 sm:grid-cols-[2fr_1fr] sm:items-center">
        <div>
          <h2 className="text-xl font-semibold text-brand-green">Our History</h2>
          <p className="mt-2 text-gray-700">
            Tanauan Medical Center opened its doors in 1982 to serve the City of Tanauan. Over the
            decades, the hospital has grown into a network of affiliated facilities — including the
            C.P. Reyes Satellite Clinic, Lab To Go Medical &amp; Diagnostic Center, and the Malvar
            and Tanauan Kidney &amp; Dialysis Centers — and is a PhilHealth Konsulta and YAKAP
            accredited facility with a 24-hour Emergency Room.
          </p>
        </div>
        <Image
          src="/images/philhealth-yakap.jpg"
          alt="Tanauan Medical Center — PhilHealth Konsulta and YAKAP accredited facility"
          width={526}
          height={526}
          className="rounded-lg border border-gray-200"
        />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-brand-green">Our Values</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {VALUES.map((value) => (
            <li
              key={value}
              className="rounded-full border border-brand-green px-4 py-1.5 text-sm font-medium text-brand-green"
            >
              {value}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
