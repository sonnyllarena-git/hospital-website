import type { Metadata } from 'next';
import Image from 'next/image';
import Card from '@/components/shared/Card';
import laboratoryImage from '@/components/public/images/Laboratory & Diagnostics.jpg';
import kidneyDialysisImage from '@/components/public/images/Kidney & Dialysis Care.jpeg';
import surgicalServicesImage from '@/components/public/images/Surgical Services.jpg';
import outpatientConsultationImage from '@/components/public/images/Outpatient Consultation.jpg';
import internalMedicineImage from '@/components/public/images/Internal Medicine.jpg';

export const metadata: Metadata = {
  title: 'Services | Tanauan Medical Center',
  description: 'Departments and services offered at Tanauan Medical Center.',
};

// Department names reflect the hospital's known facilities and common general-hospital
// departments. No doctor names, prices, or ratings are listed — those must come from Sonny,
// not be invented here.
const SERVICES = [
  {
    name: 'Emergency Care',
    description: '24-hour Emergency Room staffed and ready to serve.',
    image: '/images/emergency-room.jpg',
  },
  {
    name: 'Laboratory & Diagnostics',
    description: 'Lab testing and diagnostic imaging via Lab To Go Medical & Diagnostic Center.',
    image: laboratoryImage,
  },
  {
    name: 'Kidney & Dialysis Care',
    description: 'Dialysis services through the Malvar and Tanauan Kidney & Dialysis Centers.',
    image: kidneyDialysisImage,
  },
  {
    name: 'Surgical Services',
    description: 'Inpatient and outpatient surgical procedures.',
    image: surgicalServicesImage,
  },
  {
    name: 'Outpatient Consultation',
    description: 'General and specialist consultations, including at C.P. Reyes Satellite Clinic.',
    image: outpatientConsultationImage,
  },
  {
    name: 'Internal Medicine',
    description: 'Diagnosis and treatment of adult illness and chronic conditions.',
    image: internalMedicineImage,
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-green">Our Services</h1>
      <p className="mt-2 text-gray-600">
        Departments and services available across Tanauan Medical Center and its affiliated
        facilities.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <Card key={service.name}>
            {service.image && (
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={225}
                className="mb-4 aspect-video w-full rounded-md object-cover"
              />
            )}
            <h2 className="text-lg font-semibold text-brand-green">{service.name}</h2>
            <p className="mt-2 text-sm text-gray-700">{service.description}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
