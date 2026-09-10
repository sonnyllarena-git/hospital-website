// MOCK data for building/demoing the searchable doctor directory UI (per the "Find a Doctor.png"
// reference). None of these 100 doctors are real — do not present this list as real physicians.
// Replace with the actual physician roster before this page goes live.

export type Doctor = {
  id: string;
  firstName: string;
  lastName: string;
  specialization: string;
  subSpecialization: string;
  hmoAccreditations: string[];
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
  };
});

export const SPECIALIZATION_NAMES = SPECIALIZATIONS.map((s) => s.name);
export const HMO_NAMES = HMO_PROVIDERS;
export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
