import type { Metadata } from 'next';
import DoctorDirectory from '@/components/public/DoctorDirectory';

export const metadata: Metadata = {
  title: 'Find a Doctor | Tanauan Medical Center',
  description: 'Doctors and specialties available at Tanauan Medical Center.',
};

export default function FindADoctorPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-green">Find a Doctor</h1>
      <p className="mt-2 text-gray-600">
        Call (043) 784-5401 to 5406 or 0915-931-4618 / 0939-389-9083 to confirm current schedules
        and book a consultation.
      </p>
      <p className="mt-1 text-sm text-gray-500">
        Sample directory for development — names shown are placeholders, not real physicians. Will
        be replaced with the full roster before launch.
      </p>
      <DoctorDirectory />
    </main>
  );
}
