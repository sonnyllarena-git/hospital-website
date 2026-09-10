import type { Metadata } from 'next';
import ContactForm from '@/components/public/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Tanauan Medical Center',
  description: 'Get in touch with Tanauan Medical Center.',
};

export default function ContactUsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-green">Contact Us</h1>
      <p className="mt-2 text-gray-600">
        #41 A. Mabini Avenue, Barangay Poblacion IV, City of Tanauan, Batangas, 4232
        <br />
        Telephone: (043) 784-5401 to 5406 · Mobile: 0915-931-4618 / 0939-389-9083
        <br />
        Email: customercare@tanauanmedicalcenter.com
      </p>

      <h2 className="mt-10 text-xl font-semibold text-brand-green">Send Us a Message</h2>
      <ContactForm />
    </main>
  );
}
