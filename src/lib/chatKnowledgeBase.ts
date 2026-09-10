// Scripted, keyword-matched FAQ knowledge base — not a generative LLM. Every response below is
// pre-written and grounded in facts already verified elsewhere in this codebase (real address/
// phone/email, real facility locations, PhilHealth accreditation, 24-hour ER). This is a
// deliberate choice over a true generative AI: it can only ever return a reviewed answer, never
// hallucinate medical advice — see CLAUDE.md §2's Tawk.to note for the same reasoning.

export type ChatCategory = {
  id: string;
  keywords: string[];
  response: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export const CHAT_CATEGORIES: ChatCategory[] = [
  {
    id: 'about',
    keywords: ['about', 'mission', 'vision', 'history', 'values', 'who are you', 'founded'],
    response:
      'Tanauan Medical Center has served Tanauan, Batangas since 1982. We’re a PhilHealth Konsulta and YAKAP accredited facility with a 24-hour Emergency Room. You can read our full mission, vision, history, and values on the About Us page.',
    ctaLabel: 'Visit About Us',
    ctaHref: '/about-us',
  },
  {
    id: 'doctors',
    keywords: [
      'doctor',
      'physician',
      'specialist',
      'find a doctor',
      'ob-gyne',
      'obstetrics',
      'gynecology',
      'pediatrician',
      'pediatrics',
      'cardiologist',
      'cardiology',
      'dermatologist',
      'dermatology',
      'surgeon',
      'surgery',
      'orthopedic',
      'urologist',
      'urology',
      'nephrologist',
      'nephrology',
      'psychiatrist',
      'radiologist',
      'specialization',
      'sub-specialization',
    ],
    response:
      'Our Find a Doctor directory lets you search by surname or first name, and filter by Specialization (Cardiology, Pediatrics, Orthopedics, Nephrology, and 16 more), Sub-Specialization, or HMO Accreditation (Maxicare, Intellicare, Medicard, PhilCare, and others) — plus an A-Z index and pagination. Note: this directory is currently sample data for development, not the final physician roster. To confirm a real doctor’s schedule or book a consultation, please call us directly.',
    ctaLabel: 'Find a Doctor',
    ctaHref: '/find-a-doctor',
  },
  {
    id: 'services',
    keywords: ['service', 'treatment', 'specialty', 'dialysis', 'laboratory', 'lab'],
    response:
      'Our services span Emergency Care, Laboratory & Diagnostics, Kidney & Dialysis Care, Surgical Services, Outpatient Consultation, and Internal Medicine, across Tanauan Medical Center and our affiliated facilities.',
    ctaLabel: 'See all Services',
    ctaHref: '/services',
  },
  {
    id: 'locations',
    keywords: ['location', 'address', 'branch', 'where', 'malvar', 'directions', 'satellite'],
    response:
      'Our main hospital is at #41 A. Mabini Avenue, Barangay Poblacion IV, City of Tanauan, Batangas. We also have C.P. Reyes Satellite Clinic (Malvar), Lab To Go Medical & Diagnostic Center, and the Malvar and Tanauan Kidney & Dialysis Centers — full addresses on the Locations page.',
    ctaLabel: 'View Locations',
    ctaHref: '/locations',
  },
  {
    id: 'careers',
    keywords: [
      'career',
      'job',
      'hiring',
      'apply',
      'application',
      'vacancy',
      'opening',
      'work with',
      'employment',
      'nursing',
      'medical technology',
      'administrative',
    ],
    response:
      'Our Careers page is a searchable job board (currently sample openings for development) across four categories: Medical, Nursing, Allied Health / Medical Technology, and Administrative & Support. Search by keyword, filter by category, and click "View Details" for the full description. To apply, use the general application form at the bottom of the page (name, email, phone, department) — even if a specific opening isn’t listed.',
    ctaLabel: 'View Careers',
    ctaHref: '/careers',
  },
  {
    id: 'contact',
    keywords: ['contact', 'phone', 'email', 'call', 'number', 'reach you'],
    response:
      'You can reach us at (043) 784-5401 to 5406, or mobile 0915-931-4618 / 0939-389-9083, or email customercare@tanauanmedicalcenter.com.',
    ctaLabel: 'Contact Us',
    ctaHref: '/contact-us',
  },
  {
    id: 'emergency',
    keywords: ['emergency', 'er', 'urgent', 'ambulance', '24 hour', '24/7'],
    response:
      'Our Emergency Room is open 24 hours a day. If this is a medical emergency, please go directly to the ER or call (043) 784-5401 to 5406 — don’t wait for a chat reply.',
  },
  {
    id: 'appointment',
    keywords: ['book', 'appointment', 'schedule', 'reserve', 'consultation'],
    response:
      'We don’t have online booking yet — appointments are confirmed by phone. Call (043) 784-5401 to 5406 or 0915-931-4618 / 0939-389-9083 and our staff will help you schedule a visit.',
  },
  {
    id: 'billing',
    keywords: ['philhealth', 'hmo', 'insurance', 'billing', 'bill', 'payment', 'konsulta', 'yakap'],
    response:
      'Tanauan Medical Center is a PhilHealth Konsulta and YAKAP accredited facility. HMO accreditation varies by doctor — check a specific doctor’s profile on the Find a Doctor page, or call us to confirm coverage before your visit.',
    ctaLabel: 'Find a Doctor',
    ctaHref: '/find-a-doctor',
  },
];

export const GREETING = "👋 Good day! I'm the virtual assistant for Tanauan Medical Center.";

export const DISCLAIMER =
  "Before we start: I can help with general information about our hospital, doctors, services, and more — but I'm not able to give medical advice or diagnose symptoms. For medical concerns, please consult a physician directly, or visit our 24-hour Emergency Room for anything urgent.";

export const AGREE_LABEL = 'I Understand';

export const SUGGESTED_QUESTIONS = [
  'Find a Doctor',
  'Our Services',
  'Locations',
  'Careers',
  'Emergency Room',
];

export const FALLBACK_RESPONSE =
  "I'm not sure I have an answer for that — I can help with our doctors, services, locations, careers, or contact details. For anything else, please call us at (043) 784-5401 to 5406.";
