import type { Metadata } from 'next';
import Image from 'next/image';
import hiringPeoplePhoto from '@/components/public/images/hiring image.png';
import JobBoard from '@/components/public/JobBoard';
import CareerApplicationForm from '@/components/public/CareerApplicationForm';

export const metadata: Metadata = {
  title: 'Careers | Tanauan Medical Center',
  description: 'Join the Tanauan Medical Center team — current openings and how to apply.',
};

export default function CareersPage() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center gap-10 bg-brand-yellow px-4 pt-6 sm:flex-row sm:items-end sm:px-16 sm:pt-8">
        <Image
          src={hiringPeoplePhoto}
          alt="Tanauan Medical Center staff"
          className="h-auto w-full max-w-2xl shrink-0"
        />
        <div className="text-center sm:self-center sm:text-left">
          <h1 className="text-3xl font-bold text-brand-green">Careers</h1>
          <p className="mt-2 max-w-xl text-gray-800">
            We are always looking for dedicated healthcare professionals to join our team. Browse
            current openings below, or send a general application even if a specific opening
            isn&apos;t listed.
          </p>
          <p className="mt-6 text-4xl font-extrabold text-brand-green sm:text-5xl">WE ARE</p>
          <p className="text-5xl font-extrabold text-brand-green sm:text-6xl">HIRING!</p>
          <p className="mt-2 text-base font-bold text-brand-green sm:text-lg">
            JOIN. GROW. MAKE AN IMPACT.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12">
        <JobBoard />

        <h2 id="apply" className="mt-16 text-xl font-semibold text-brand-green">
          Apply Now
        </h2>
        <CareerApplicationForm />
      </div>
    </main>
  );
}
