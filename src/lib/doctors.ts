// MOCK data for building/demoing the searchable doctor directory UI (per the "Find a Doctor.png"
// reference). None of these 100 doctors are real — do not present this list as real physicians.
// Replace with the actual physician roster before this page goes live.

export type DoctorSchedule = {
  weekdays: number[]; // 0 = Sunday .. 6 = Saturday
  label: string;
  hours: string;
};

export type Doctor = {
  id: string;
  firstName: string;
  lastName: string;
  specialization: string;
  subSpecialization: string;
  hmoAccreditations: string[];
  schedule: DoctorSchedule[];
};

const FIRST_NAMES = [
  'Aaron Adolf',
  'Lorna',
  'Ma. Teresita',
  'Rainerio',
  'Salvador',
  'Cristina',
  'Miguel',
  'Liza',
  'Carlos',
  'Ma. Fe',
  'Ramon',
  'Cecilia',
  'Eduardo',
  'Josefina',
  'Ricardo',
  'Victoria',
  'Antonio',
  'Corazon',
  'Manuel',
  'Remedios',
  'Francisco',
  'Angelica',
  'Roberto',
  'Teresa',
  'Danilo',
  'Leonora',
  'Ernesto',
  'Bernadette',
  'Rodrigo',
  'Ma. Luisa',
];

const LAST_NAMES = [
  'Abad',
  'Ramos',
  'Yumul',
  'Sion',
  'Miclat',
  'Santos',
  'Reyes',
  'Cruz',
  'Bautista',
  'Garcia',
  'Mendoza',
  'Torres',
  'Flores',
  'Rivera',
  'Gonzales',
  'Delos Santos',
  'Aquino',
  'Villanueva',
  'Castillo',
  'Navarro',
  'Salazar',
  'Del Rosario',
  'Marquez',
  'Pascual',
  'Domingo',
  'Fernandez',
  'Ocampo',
  'Roxas',
  'Lim',
  'Tan',
];

const SPECIALIZATIONS: { name: string; subSpecializations: string[] }[] = [
  { name: 'Anesthesiology', subSpecializations: ['None'] },
  {
    name: 'Cardiology',
    subSpecializations: ['None', 'Interventional Cardiology', 'Pediatric Cardiology'],
  },
  { name: 'Dermatology', subSpecializations: ['None', 'Cosmetic Dermatology'] },
  { name: 'Emergency Medicine', subSpecializations: ['None'] },
  { name: 'Endocrinology', subSpecializations: ['None', 'Diabetes & Metabolism'] },
  { name: 'Family Medicine', subSpecializations: ['None'] },
  { name: 'Gastroenterology', subSpecializations: ['None', 'Hepatology'] },
  { name: 'General Surgery', subSpecializations: ['None', 'Colorectal Surgery', 'Breast Surgery'] },
  { name: 'Internal Medicine', subSpecializations: ['None', 'Infectious Disease', 'Nephrology'] },
  {
    name: 'Obstetrics & Gynecology',
    subSpecializations: ['None', 'Gynecologic Oncology', 'Reproductive Endocrinology'],
  },
  { name: 'Ophthalmology', subSpecializations: ['None', 'Retina'] },
  { name: 'Orthopedics', subSpecializations: ['None', 'Sports Medicine', 'Spine Surgery'] },
  { name: 'Otolaryngology (ENT)', subSpecializations: ['None'] },
  { name: 'Pediatrics', subSpecializations: ['None', 'Pediatric Endocrinology', 'Neonatology'] },
  { name: 'Psychiatry', subSpecializations: ['None'] },
  { name: 'Psychology', subSpecializations: ['None'] },
  { name: 'Pulmonology', subSpecializations: ['None'] },
  { name: 'Radiology', subSpecializations: ['None'] },
  { name: 'Urology', subSpecializations: ['None', 'Pediatric Urology'] },
  { name: 'Nephrology (Kidney & Dialysis)', subSpecializations: ['None'] },
];

// Illustrative HMO names for the mock directory's filter — not a confirmed list of TMC's real
// HMO accreditations. See CLAUDE.md §1: real accreditation data is out of scope for this task.
const HMO_PROVIDERS = [
  'Maxicare',
  'Intellicare',
  'Medicard',
  'PhilCare',
  'AsianLife & General Assurance',
  'EastWest Healthcare',
  'ValuCare',
  'Kaiser International',
  'Pacific Cross',
  'Cocolife HMO',
];

// MOCK weekly schedules for the demo booking modal — not real clinic hours. See CLAUDE.md §1
// exception (2026-09-10): client-side-only booking UI, no real backend/availability system yet.
const SCHEDULE_PATTERNS: DoctorSchedule[][] = [
  [
    { weekdays: [1, 2, 3, 4, 5], label: 'Mon - Fri', hours: '9:00 AM - 12:00 NN' },
    { weekdays: [6], label: 'Saturday', hours: '1:00 PM - 4:00 PM' },
  ],
  [{ weekdays: [1, 3, 5], label: 'Mon, Wed, Fri', hours: '1:00 PM - 5:00 PM' }],
  [
    { weekdays: [2, 4], label: 'Tue, Thu', hours: '8:00 AM - 11:00 AM' },
    { weekdays: [6], label: 'Saturday', hours: '9:00 AM - 12:00 NN' },
  ],
];

const DOCTOR_COUNT = 100;

export const MOCK_DOCTORS: Doctor[] = Array.from({ length: DOCTOR_COUNT }, (_, i) => {
  const specializationEntry = SPECIALIZATIONS[i % SPECIALIZATIONS.length];
  const subSpecialization =
    specializationEntry.subSpecializations[i % specializationEntry.subSpecializations.length];
  const hmoCount = i % 4;

  return {
    id: `doc-${i + 1}`,
    firstName: FIRST_NAMES[i % FIRST_NAMES.length],
    lastName: LAST_NAMES[(i + Math.floor(i / FIRST_NAMES.length)) % LAST_NAMES.length],
    specialization: specializationEntry.name,
    subSpecialization,
    hmoAccreditations: Array.from(
      { length: hmoCount },
      (_, j) => HMO_PROVIDERS[(i + j) % HMO_PROVIDERS.length]
    ),
    schedule: SCHEDULE_PATTERNS[i % SCHEDULE_PATTERNS.length],
  };
});

export const SPECIALIZATION_NAMES = SPECIALIZATIONS.map((s) => s.name);
export const HMO_NAMES = HMO_PROVIDERS;
export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export type AvailabilityStatus = 'available' | 'limited' | 'full';

// Deterministic MOCK availability so the same doctor+date always shows the same demo result —
// not backed by any real appointment system. Swap for a real query once a backend exists.
export function getMockAvailability(doctorId: string, dateStr: string): AvailabilityStatus {
  const seed = `${doctorId}-${dateStr}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 997;
  }
  if (hash % 6 === 0) return 'full';
  if (hash % 3 === 0) return 'limited';
  return 'available';
}

export function getScheduleForWeekday(
  schedule: DoctorSchedule[],
  weekday: number
): DoctorSchedule | undefined {
  return schedule.find((block) => block.weekdays.includes(weekday));
}
