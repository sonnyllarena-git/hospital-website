'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  MOCK_DOCTORS,
  SPECIALIZATION_NAMES,
  HMO_NAMES,
  ALPHABET,
  type Doctor,
} from '@/lib/doctors';
import ScheduleVisitModal from './ScheduleVisitModal';

const PAGE_SIZE_OPTIONS = [10, 20, 50];

export default function DoctorDirectory() {
  const [surname, setSurname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [subSpecialization, setSubSpecialization] = useState('');
  const [hmo, setHmo] = useState('');
  const [letter, setLetter] = useState('');
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[1]);
  const [page, setPage] = useState(1);
  const [bookingDoctor, setBookingDoctor] = useState<Doctor | null>(null);

  const subSpecializationOptions = useMemo(() => {
    const pool = specialization
      ? MOCK_DOCTORS.filter((d) => d.specialization === specialization)
      : MOCK_DOCTORS;
    return Array.from(new Set(pool.map((d) => d.subSpecialization))).sort();
  }, [specialization]);

  const filteredDoctors = useMemo(() => {
    return MOCK_DOCTORS.filter((d) => {
      if (surname && !d.lastName.toLowerCase().includes(surname.toLowerCase())) return false;
      if (firstName && !d.firstName.toLowerCase().includes(firstName.toLowerCase())) return false;
      if (specialization && d.specialization !== specialization) return false;
      if (subSpecialization && d.subSpecialization !== subSpecialization) return false;
      if (hmo && !d.hmoAccreditations.includes(hmo)) return false;
      if (letter && !d.lastName.toUpperCase().startsWith(letter)) return false;
      return true;
    }).sort((a, b) => a.lastName.localeCompare(b.lastName));
  }, [surname, firstName, specialization, subSpecialization, hmo, letter]);

  useEffect(() => {
    setPage(1);
  }, [surname, firstName, specialization, subSpecialization, hmo, letter, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filteredDoctors.length / pageSize));
  const visibleDoctors = filteredDoctors.slice((page - 1) * pageSize, page * pageSize);

  const clearFilters = () => {
    setSurname('');
    setFirstName('');
    setSpecialization('');
    setSubSpecialization('');
    setHmo('');
    setLetter('');
  };

  const inputClasses =
    'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900';

  return (
    <div className="mt-6 grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Doctor&apos;s Surname</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className={inputClasses}
            placeholder="Enter Doctor's Surname"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Doctor&apos;s First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClasses}
            placeholder="Enter Doctor's First Name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Specialization</label>
          <select
            value={specialization}
            onChange={(e) => {
              setSpecialization(e.target.value);
              setSubSpecialization('');
            }}
            className={inputClasses}
          >
            <option value="">All Specializations</option>
            {SPECIALIZATION_NAMES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Sub-Specialization</label>
          <select
            value={subSpecialization}
            onChange={(e) => setSubSpecialization(e.target.value)}
            className={inputClasses}
          >
            <option value="">All Sub-Specializations</option>
            {subSpecializationOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">HMO Accreditation</label>
          <select value={hmo} onChange={(e) => setHmo(e.target.value)} className={inputClasses}>
            <option value="">All HMOs</option>
            {HMO_NAMES.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={clearFilters}
          className="w-full rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-green/90"
        >
          Clear Filters
        </button>

        <div>
          <p className="text-sm font-medium text-gray-700">Alphabetical Order by Last Name</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {ALPHABET.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setLetter(letter === a ? '' : a)}
                className={`h-7 w-7 rounded text-xs font-semibold ${
                  letter === a
                    ? 'bg-brand-green text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 pb-3 text-sm text-gray-600">
          <span>{filteredDoctors.length} results</span>
          <label className="flex items-center gap-2">
            Doctors Per Page
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900"
            >
              {PAGE_SIZE_OPTIONS.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
        </div>

        <ul>
          {visibleDoctors.map((doctor) => (
            <li
              key={doctor.id}
              className="flex flex-col gap-4 border-b border-gray-200 py-4 sm:flex-row sm:justify-between"
            >
              <div>
                <p className="text-sm font-medium text-gray-500">{doctor.firstName}</p>
                <p className="text-xl font-bold text-brand-green">{doctor.lastName}</p>
                <p className="mt-1 text-sm font-semibold uppercase text-gray-700">
                  {doctor.specialization}-({doctor.subSpecialization})
                </p>
                {doctor.hmoAccreditations.length > 0 && (
                  <div className="mt-2 text-sm text-gray-600">
                    <p className="font-medium">HMO Accreditation:</p>
                    <p>{doctor.hmoAccreditations.join(', ')}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center gap-2 text-center text-sm text-gray-600 sm:min-w-[220px]">
                <button
                  type="button"
                  onClick={() => setBookingDoctor(doctor)}
                  className="rounded-md bg-brand-green px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-green/90"
                >
                  Schedule a Visit
                </button>
                <div>
                  <p className="font-medium text-gray-700">Clinic Schedule</p>
                  {doctor.schedule.map((block) => (
                    <p key={block.label}>
                      {block.label}: {block.hours}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
          {visibleDoctors.length === 0 && (
            <li className="py-8 text-center text-sm text-gray-500">
              No doctors match those filters.
            </li>
          )}
        </ul>

        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-4 text-sm">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="font-medium text-brand-green disabled:text-gray-300"
            >
              « Prev
            </button>
            <span className="text-gray-600">
              Page {page} of {totalPages}
            </span>
            <button
              type="button"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="font-medium text-brand-green disabled:text-gray-300"
            >
              Next »
            </button>
          </div>
        )}
      </div>

      {bookingDoctor && (
        <ScheduleVisitModal doctor={bookingDoctor} onClose={() => setBookingDoctor(null)} />
      )}
    </div>
  );
}
