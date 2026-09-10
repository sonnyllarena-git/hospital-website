import type { Metadata } from 'next';
import Image from 'next/image';
import AboutSidebarNav from '@/components/public/AboutSidebarNav';

export const metadata: Metadata = {
  title: 'About Us | Tanauan Medical Center',
  description:
    "Learn about Tanauan Medical Center's mission, vision, history, leadership, and more.",
};

// Everything below is MOCK content for this demo, grounded in confirmed real facts (founding
// year 1982, the real values acronym, the real affiliated facilities, PhilHealth Konsulta/YAKAP
// accreditation, 24-hour ER). Leadership names, Milestones years beyond 1982, Technology, and
// Research content are placeholders — Sonny's client will finalize real content before launch,
// including real legal review of the Privacy Notice.
const VALUES = [
  {
    name: 'Teamwork',
    description:
      'Every department — from nurses and physicians to administrative and support staff — works as one team so patients experience seamless, coordinated care from arrival to discharge.',
  },
  {
    name: 'Malasakit',
    description:
      'Malasakit means care that comes from the heart. We treat every patient like family, especially in moments of worry, pain, or uncertainty.',
  },
  {
    name: 'Commitment to Excellence',
    description:
      'We continuously invest in our medical staff, equipment, and facilities to meet the highest standards of clinical care available in Batangas.',
  },
  {
    name: 'Integrity',
    description:
      'We hold ourselves accountable to honest, transparent, and ethical practice in every interaction — with patients, colleagues, and the community we serve.',
  },
  {
    name: 'Honesty',
    description:
      'Patients and families deserve clear, truthful communication about their health, their treatment options, and the cost of their care.',
  },
];

const LEADERSHIP = [
  { name: 'Dr. Ma. Estrella R. Villanueva', title: 'Medical Director' },
  { name: 'Dr. Ferdinand C. Aquino', title: 'Chief of Hospital' },
  { name: 'Corazon P. Bautista, RN, MAN', title: 'Chief Nursing Officer' },
  { name: 'Rafael D. Santos', title: 'Chief Administrative Officer' },
  { name: 'Dr. Angelica M. Reyes', title: 'Head, Ambulatory & Satellite Clinics' },
];

const MILESTONES = [
  { year: '1982', event: 'Tanauan Medical Center opens in Barangay Poblacion IV, Tanauan.' },
  { year: '1995', event: 'Hospital services expand with new diagnostic laboratory capacity.' },
  {
    year: '2008',
    event: 'C.P. Reyes Satellite Clinic established in Malvar, extending outpatient care.',
  },
  {
    year: '2015',
    event: 'Malvar Kidney & Dialysis Center and Lab To Go Medical & Diagnostic Center open.',
  },
  { year: '2020', event: 'Tanauan Kidney & Dialysis Center opens along JP Laurel Highway.' },
  {
    year: '2025',
    event:
      'New 24-hour Emergency Room opens; PhilHealth Konsulta and YAKAP accreditation achieved.',
  },
];

export default function AboutUsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-green">About Tanauan Medical Center</h1>
      <p className="mt-2 text-gray-600">Serving Tanauan, Batangas since 1982.</p>

      <AboutSidebarNav
        sections={[
          {
            id: 'about',
            label: 'About Tanauan Medical Center',
            content: (
              <div className="space-y-10">
                <div>
                  <h2 className="text-xl font-semibold text-brand-green">Mission</h2>
                  <p className="mt-2 text-gray-700">
                    Tanauan Medical Center exists to provide accessible, compassionate, and quality
                    healthcare to the people of Tanauan and its neighboring communities. We are
                    committed to delivering timely, evidence-based medical care, treating every
                    patient with malasakit, investing continuously in our staff and facilities, and
                    partnering with government health programs like PhilHealth Konsulta and YAKAP to
                    keep essential services within reach.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-brand-green">Vision</h2>
                  <p className="mt-2 text-gray-700">
                    To be the most trusted healthcare institution in Batangas — recognized for
                    clinical excellence, compassionate patient care, and a growing network of
                    accessible facilities that bring specialized services, from general medicine to
                    kidney dialysis, closer to the communities of Tanauan, Malvar, and the
                    surrounding 3rd District.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-brand-green">Values</h2>
                  <ul className="mt-4 space-y-3">
                    {VALUES.map((value) => (
                      <li key={value.name}>
                        <p className="font-semibold text-brand-green">{value.name}</p>
                        <p className="mt-1 text-gray-700">{value.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-brand-green">History</h2>
                  <div className="mt-2 grid gap-6 sm:grid-cols-[2fr_1fr] sm:items-center">
                    <div className="space-y-3 text-gray-700">
                      <p>
                        Tanauan Medical Center opened its doors in 1982 in Barangay Poblacion IV,
                        Tanauan, with a simple purpose: to bring reliable, general hospital care to
                        a community that had to travel far for it.
                      </p>
                      <p>
                        In the years that followed, the hospital grew alongside Tanauan itself,
                        building a network of affiliated facilities — the C.P. Reyes Satellite
                        Clinic in Malvar, the Lab To Go Medical &amp; Diagnostic Center, and the
                        Malvar and Tanauan Kidney &amp; Dialysis Centers — so patients across the
                        3rd District of Batangas could access specialized diagnostic and dialysis
                        care without leaving the area.
                      </p>
                      <p>
                        Today, Tanauan Medical Center operates a 24-hour Emergency Room and is an
                        accredited PhilHealth Konsulta and YAKAP facility, continuing the same
                        mission it opened with in 1982: sa kalusugan, Tanauan Medical Center ang
                        maaasahan.
                      </p>
                    </div>
                    <Image
                      src="/images/philhealth-yakap.jpg"
                      alt="Tanauan Medical Center — PhilHealth Konsulta and YAKAP accredited facility"
                      width={526}
                      height={526}
                      className="rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            ),
          },
          {
            id: 'leadership',
            label: 'Leadership',
            content: (
              <div>
                <ul className="grid gap-6 sm:grid-cols-2">
                  {LEADERSHIP.map((person) => (
                    <li key={person.name} className="rounded-lg border border-gray-200 p-4">
                      <p className="font-semibold text-brand-green">{person.name}</p>
                      <p className="mt-1 text-sm text-gray-600">{person.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          },
          {
            id: 'technology',
            label: 'Technology',
            content: (
              <div className="text-gray-700">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Digital radiography and imaging for faster, clearer diagnostics.</li>
                  <li>
                    Modern dialysis equipment at the Malvar and Tanauan Kidney &amp; Dialysis
                    Centers.
                  </li>
                  <li>
                    Automated laboratory testing at Lab To Go Medical &amp; Diagnostic Center.
                  </li>
                  <li>Computerized patient records shared across affiliated facilities.</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'research',
            label: 'Research and Biotechnology',
            content: (
              <div className="text-gray-700">
                <p>
                  Tanauan Medical Center participates in local Department of Health public health
                  programs and supports ongoing quality-improvement initiatives across its
                  affiliated network, with a focus on strengthening diagnostic accuracy and dialysis
                  care outcomes for patients in the 3rd District of Batangas.
                </p>
              </div>
            ),
          },
          {
            id: 'milestones',
            label: 'Milestones',
            content: (
              <div>
                <ol className="space-y-4 border-l-2 border-brand-green/30 pl-6">
                  {MILESTONES.map((milestone) => (
                    <li key={milestone.year}>
                      <p className="font-semibold text-brand-green">{milestone.year}</p>
                      <p className="mt-1 text-gray-700">{milestone.event}</p>
                    </li>
                  ))}
                </ol>
              </div>
            ),
          },
          {
            id: 'privacy',
            label: 'General Privacy Notice',
            content: (
              <div className="text-gray-700">
                <div className="space-y-3">
                  <p>
                    Tanauan Medical Center collects personal information you provide directly to us,
                    such as through our Contact Us and Careers forms — including your name, email
                    address, phone number, and any message or resume you submit.
                  </p>
                  <p>
                    We use this information only to respond to your inquiry or application, and we
                    do not sell or share it with third parties for marketing purposes.
                  </p>
                  <p>
                    For questions about this notice or your personal data, contact us at{' '}
                    customercare@tanauanmedicalcenter.com.
                  </p>
                </div>
              </div>
            ),
          },
        ]}
      />
    </main>
  );
}
