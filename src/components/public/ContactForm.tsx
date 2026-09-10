'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/validation';
import Button from '@/components/shared/Button';

// Same no-backend pattern as the Careers form: a validated submit opens a mailto: link to the
// hospital's real inbox rather than faking a success state with nowhere for the data to go.
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = (data: ContactFormValues) => {
    const subject = `Website Contact from ${data.fullName}`;
    const body = `Name: ${data.fullName}\nEmail: ${data.email}\n\n${data.message}`;
    window.location.href = `mailto:customercare@tanauanmedicalcenter.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 max-w-lg space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          {...register('fullName')}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-brand-red">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          {...register('email')}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        {errors.email && <p className="mt-1 text-xs text-brand-red">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          {...register('message')}
          rows={5}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        {errors.message && <p className="mt-1 text-xs text-brand-red">{errors.message.message}</p>}
      </div>

      <Button type="submit">Send Message</Button>
    </form>
  );
}
