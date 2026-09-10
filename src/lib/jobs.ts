// MOCK job postings for building/demoing the Careers job board UI. None of these are real
// openings — the client will finalize real postings before launch.

export type Job = {
  id: string;
  title: string;
  category: string;
  postedDate: string;
  workLocation: string;
  summary: string;
  fullDescription: string;
};

export const JOB_CATEGORIES = [
  'Medical',
  'Nursing',
  'Allied Health / Medical Technology',
  'Administrative & Support',
];

export const MOCK_JOBS: Job[] = [
  {
    id: 'staff-nurse-er',
    title: 'Staff Nurse - Emergency Room',
    category: 'Nursing',
    postedDate: 'September 8, 2026',
    workLocation: 'City of Tanauan, Batangas',
    summary: 'Provide direct patient care in our 24-hour Emergency Room, triaging...',
    fullDescription:
      'Provide direct patient care in our 24-hour Emergency Room, triaging incoming patients, assisting physicians during procedures, and monitoring patients until stabilized or transferred. Requires a valid PRC nursing license and BLS/ACLS certification.',
  },
  {
    id: 'staff-nurse-dialysis',
    title: 'Staff Nurse - Dialysis Unit',
    category: 'Nursing',
    postedDate: 'September 5, 2026',
    workLocation: 'Tanauan Kidney & Dialysis Center',
    summary: 'Administer hemodialysis treatments and monitor patients throughout...',
    fullDescription:
      'Administer hemodialysis treatments and monitor patients throughout each session, maintain dialysis equipment logs, and coordinate with nephrologists on treatment plans. Prior dialysis unit experience preferred.',
  },
  {
    id: 'ecg-technologist',
    title: 'ECG Technologist',
    category: 'Medical',
    postedDate: 'September 10, 2026',
    workLocation: 'City of Tanauan, Batangas',
    summary: 'Perform cardiac diagnostic procedures including ECG, holter monitoring...',
    fullDescription:
      'Perform cardiac diagnostic procedures including ECG, holter monitoring, and stress tests. Prepare and calibrate equipment, ensure accurate patient records, and coordinate results delivery with attending physicians.',
  },
  {
    id: 'radiologic-technologist',
    title: 'Radiologic Technologist',
    category: 'Medical',
    postedDate: 'September 3, 2026',
    workLocation: 'City of Tanauan, Batangas',
    summary: 'Operate digital X-ray and imaging equipment, ensuring patient safety...',
    fullDescription:
      'Operate digital X-ray and imaging equipment, ensuring patient safety and image quality. Maintain radiologic equipment and comply with radiation safety protocols. Valid PRC license required.',
  },
  {
    id: 'medical-technologist-lab',
    title: 'Medical Technologist',
    category: 'Allied Health / Medical Technology',
    postedDate: 'August 28, 2026',
    workLocation: 'Lab To Go Medical & Diagnostic Center',
    summary: 'Perform laboratory testing across chemistry, hematology, and...',
    fullDescription:
      'Perform laboratory testing across chemistry, hematology, and microbiology sections. Ensure accurate specimen handling and timely, quality-controlled results reporting. Valid PRC Medical Technologist license required.',
  },
  {
    id: 'pharmacist',
    title: 'Hospital Pharmacist',
    category: 'Allied Health / Medical Technology',
    postedDate: 'September 1, 2026',
    workLocation: 'City of Tanauan, Batangas',
    summary: 'Dispense medications, verify prescriptions, and counsel patients on...',
    fullDescription:
      'Dispense medications, verify prescriptions, and counsel patients on proper medication use. Maintain inventory and ensure compliance with FDA and DOH pharmacy regulations.',
  },
  {
    id: 'physical-therapist',
    title: 'Physical Therapist',
    category: 'Medical',
    postedDate: 'August 25, 2026',
    workLocation: 'City of Tanauan, Batangas',
    summary: 'Develop and administer rehabilitation programs for post-surgical...',
    fullDescription:
      'Develop and administer rehabilitation programs for post-surgical, orthopedic, and neurological patients. Coordinate with attending physicians on treatment progress.',
  },
  {
    id: 'nurse-supervisor',
    title: 'Nurse Supervisor',
    category: 'Nursing',
    postedDate: 'August 20, 2026',
    workLocation: 'City of Tanauan, Batangas',
    summary: 'Oversee nursing staff scheduling, patient care standards, and...',
    fullDescription:
      'Oversee nursing staff scheduling, patient care standards, and shift operations across hospital departments. Minimum 3 years nursing experience with supervisory exposure preferred.',
  },
  {
    id: 'billing-clerk',
    title: 'Billing Clerk',
    category: 'Administrative & Support',
    postedDate: 'September 6, 2026',
    workLocation: 'City of Tanauan, Batangas',
    summary: 'Process patient billing, PhilHealth and HMO claims, and payment...',
    fullDescription:
      'Process patient billing, PhilHealth and HMO claims, and payment reconciliation. Coordinate with insurance providers and maintain accurate financial records.',
  },
  {
    id: 'hr-officer',
    title: 'Human Resources Officer',
    category: 'Administrative & Support',
    postedDate: 'August 30, 2026',
    workLocation: 'City of Tanauan, Batangas',
    summary: 'Manage recruitment, employee records, and benefits administration...',
    fullDescription:
      'Manage recruitment, employee records, and benefits administration for hospital staff across all facilities. Bachelor’s degree in HR, Psychology, or related field required.',
  },
  {
    id: 'it-support-specialist',
    title: 'IT Support Specialist',
    category: 'Administrative & Support',
    postedDate: 'September 2, 2026',
    workLocation: 'City of Tanauan, Batangas',
    summary: 'Maintain hospital IT systems, troubleshoot hardware and software...',
    fullDescription:
      'Maintain hospital IT systems, troubleshoot hardware and software issues, and support the rollout of computerized patient records across affiliated facilities.',
  },
  {
    id: 'housekeeping-staff',
    title: 'Housekeeping Staff',
    category: 'Administrative & Support',
    postedDate: 'August 22, 2026',
    workLocation: 'City of Tanauan, Batangas',
    summary: 'Maintain cleanliness and sanitation standards across patient...',
    fullDescription:
      'Maintain cleanliness and sanitation standards across patient rooms, common areas, and clinical spaces in compliance with infection control protocols.',
  },
  {
    id: 'security-guard',
    title: 'Security Guard',
    category: 'Administrative & Support',
    postedDate: 'August 18, 2026',
    workLocation: 'Malvar Kidney & Dialysis Center',
    summary: 'Ensure facility security, monitor visitor access, and respond to...',
    fullDescription:
      'Ensure facility security, monitor visitor access, and respond to incidents. Valid security license (SOSIA/SLI) required.',
  },
  {
    id: 'xray-technician-malvar',
    title: 'X-Ray Technician',
    category: 'Medical',
    postedDate: 'August 15, 2026',
    workLocation: 'C.P. Reyes Satellite Clinic, Malvar',
    summary: 'Operate imaging equipment at our Malvar satellite clinic, supporting...',
    fullDescription:
      'Operate imaging equipment at our Malvar satellite clinic, supporting outpatient diagnostic services. Valid PRC license required.',
  },
];
