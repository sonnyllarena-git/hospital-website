import type { Metadata } from 'next';
import Card from '@/components/shared/Card';
import CareerApplicationForm from '@/components/public/CareerApplicationForm';

export const metadata: Metadata = {
  title: 'Careers | Tanauan Medical Center',
  description: 'Join the Tanauan Medical Center team.',
};

const DEPARTMENTS = ['Nursing', 'Allied Health / Medical Technology', 'Administrative & Support'];

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-green">Careers</h1>
      <p className="mt-2 text-gray-600">
        We are always looking for dedicated healthcare professionals to join our team. Send your
        application below even if a specific opening isn&apos;t listed.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {DEPARTMENTS.map((department) => (
          <Card key={department}>
            <h2 className="text-base font-semibold text-brand-green">{department}</h2>
            <p className="mt-2 text-sm text-gray-700">We welcome applications year-round.</p>
          </Card>
        ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold text-brand-green">Apply Now</h2>
      <CareerApplicationForm />
    </main>
  );
}
