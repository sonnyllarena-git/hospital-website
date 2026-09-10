import type { Metadata } from 'next';
import Image from 'next/image';
import Card from '@/components/shared/Card';

export const metadata: Metadata = {
  title: 'Locations | Tanauan Medical Center',
  description: 'Tanauan Medical Center and its affiliated facilities across Batangas.',
};

// Addresses and phone numbers below are verified against each facility's live Google Business
// listing (and, where noted, the PhilHealth accredited freestanding dialysis clinic list) —
// not invented. C.P. Reyes Satellite Clinic is in Malvar, not Tanauan, despite its name.
const LOCATIONS = [
  {
    name: 'Tanauan Medical Center',
    address: '#41 A. Mabini Avenue, Barangay Poblacion IV, City of Tanauan, Batangas, 4232',
    phone: '(043) 784-5401 to 5406',
  },
  {
    name: 'C.P. Reyes Satellite Clinic',
    address: 'President Jose P. Laurel Highway, Barangay Santiago, Malvar, Batangas',
    phone: '0917 107 7623',
  },
  {
    name: 'Lab To Go Medical & Diagnostic Center',
    address: 'Unit A, CPRH Commercial Bldg, J.V. Pagaspas Street, City of Tanauan, Batangas',
    phone: '0956 932 9111',
  },
  {
    name: 'Malvar Kidney & Dialysis Center',
    address: 'President Jose P. Laurel Highway, Barangay San Pioquinto, Malvar, Batangas, 4233',
    phone: '(043) 727-4943',
  },
  {
    name: 'Tanauan Kidney & Dialysis Center',
    address: '9 President Jose P. Laurel Highway, Barangay Darasa, City of Tanauan, Batangas, 4232',
    phone: null,
  },
];

export default function LocationsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-green">Our Locations</h1>
      <p className="mt-2 text-gray-600">
        Tanauan Medical Center and its affiliated facilities. For all locations, call (043) 784-5401
        to 5406 or 0915-931-4618 / 0939-389-9083.
      </p>

      <Image
        src="/images/facilities-overview.jpg"
        alt="Tanauan Medical Center and its affiliated facilities"
        width={1600}
        height={899}
        className="mt-8 w-full rounded-lg border border-gray-200"
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {LOCATIONS.map((location) => (
          <Card key={location.name}>
            <h2 className="text-lg font-semibold text-brand-green">{location.name}</h2>
            <p className="mt-2 text-sm text-gray-700">{location.address}</p>
            {location.phone && <p className="mt-1 text-sm text-gray-500">{location.phone}</p>}
          </Card>
        ))}
      </div>
    </main>
  );
}
