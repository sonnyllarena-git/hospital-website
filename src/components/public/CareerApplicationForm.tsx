'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { applicationFormSchema, type ApplicationFormValues } from '@/lib/validation';
import Button from '@/components/shared/Button';

// v1 has no backend, so a validated submission opens the visitor's email client via a mailto:
// link addressed to the hospital's real inbox — this actually delivers the message, unlike a
// fake "submitted!" state with nowhere for the data to go.
export default function CareerApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormValues>({ resolver: zodResolver(applicationFormSchema) });

  const onSubmit = (data: ApplicationFormValues) => {
    const subject = `Job Application - ${data.department}`;
    const body = `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\n\n${data.message ?? ''}`;
    window.location.href = `mailto:customercare@tanauanmedicalcenter.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 max-w-lg space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          {...register('fullName')}
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-brand-red">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          {...register('email')}
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
        />
        {errors.email && <p className="mt-1 text-xs text-brand-red">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          {...register('phone')}
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
        />
        {errors.phone && <p className="mt-1 text-xs text-brand-red">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Department</label>
        <select
          {...register('department')}
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
        >
          <option value="Nursing">Nursing</option>
          <option value="Allied Health / Medical Technology">
            Allied Health / Medical Technology
          </option>
          <option value="Administrative & Support">Administrative & Support</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Message (optional)</label>
        <textarea
          {...register('message')}
          rows={4}
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
        />
      </div>

      <Button type="submit">Send Application</Button>
    </form>
  );
}
