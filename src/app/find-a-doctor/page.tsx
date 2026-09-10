import type { Metadata } from 'next';
import Image from 'next/image';
import Card from '@/components/shared/Card';

export const metadata: Metadata = {
  title: 'Find a Doctor | Tanauan Medical Center',
  description: 'Doctors and specialties available at Tanauan Medical Center.',
};

// Names, credentials, specialties, and schedules below are confirmed from Tanauan Medical
// Center's own published doctor-schedule and event graphics — not invented. Schedules can
// change; call to confirm before a visit.
const DOCTORS = [
  {
    name: 'Christian Aaron E. Lantin, MD, MBA, FPOA',
    specialty: 'Orthopedic Surgery and Sports Medicine',
    schedule: 'Mon & Wed, 10:00 AM – 12:00 NN',
    photo: '/images/doctors/medical-team-1.jpg',
  },
  {
    name: 'Karl Homer V. Nievera, MD, FPCP, FPCEDM',
    specialty: 'Internal Medicine – Endocrinology',
    schedule: 'Thu, 10:00 AM – 12:00 NN · Sat, 1:00 – 3:00 PM',
    photo: '/images/doctors/medical-team-2.jpg',
  },
  {
    name: 'Shirley Ann P. Burgos, MD',
    specialty: 'General Practice',
    schedule: null,
    photo: '/images/doctors/medical-team-3.jpg',
  },
  { name: 'Ryan A. Parcon, MD', specialty: 'Orthopedics', schedule: null, photo: null },
  { name: 'Christine Anne C. Chacon, MD', specialty: 'Neurology', schedule: null, photo: null },
  {
    name: 'Maria Kristine S. Mendoza, MD',
    specialty: 'Radiology',
    schedule: null,
    photo: null,
  },
];

// Departments with no confirmed doctor listed yet.
const OTHER_SPECIALTIES = [
  'Surgery (General)',
  'Nephrology (Kidney & Dialysis)',
  'Obstetrics & Gynecology',
  'Pediatrics',
  'Emergency Medicine',
];

export default function FindADoctorPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-green">Find a Doctor</h1>
      <p className="mt-2 text-gray-600">
        Call (043) 784-5401 to 5406 or 0915-931-4618 / 0939-389-9083 to confirm current schedules
        and book a consultation.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DOCTORS.map((doctor) => (
          <Card key={doctor.name}>
            {doctor.photo && (
              <Image
                src={doctor.photo}
                alt={doctor.name}
                width={300}
                height={300}
                className="mb-4 aspect-square w-full rounded-md object-cover"
              />
            )}
            <h2 className="text-base font-semibold text-brand-green">{doctor.name}</h2>
            <p className="mt-1 text-sm text-gray-700">{doctor.specialty}</p>
            {doctor.schedule && <p className="mt-1 text-xs text-gray-500">{doctor.schedule}</p>}
          </Card>
        ))}
      </div>

      <h2 className="mt-14 text-xl font-semibold text-brand-green">Other Departments</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {OTHER_SPECIALTIES.map((specialty) => (
          <Card key={specialty}>
            <h3 className="text-lg font-semibold text-brand-green">{specialty}</h3>
            <p className="mt-2 text-sm text-gray-700">Call for doctor availability.</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
