import type { Metadata } from 'next';
import Card from '@/components/shared/Card';

export const metadata: Metadata = {
  title: 'Health Library | Tanauan Medical Center',
  description: 'Health articles from Tanauan Medical Center.',
};

// Topic titles only — no specific medical claims are written here. Full articles should be
// authored or reviewed by the hospital's medical staff before publishing.
const TOPICS = [
  'Understanding Diabetes',
  'Kidney Health & Dialysis Care',
  'The Importance of Regular Checkups',
  'Preparing for Surgery: What to Know',
  'Emergency Care: When to Go to the ER',
];

export default function HealthLibraryPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-green">Health Library</h1>
      <p className="mt-2 text-gray-600">
        Articles from our medical team are coming soon. Topics we plan to cover:
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {TOPICS.map((topic) => (
          <Card key={topic}>
            <h2 className="text-lg font-semibold text-brand-green">{topic}</h2>
            <p className="mt-2 text-sm text-gray-700">Article coming soon.</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
