'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { scheduleVisitSchema, type ScheduleVisitValues } from '@/lib/validation';
import {
  getMockAvailability,
  getScheduleForWeekday,
  type Doctor,
  type AvailabilityStatus,
} from '@/lib/doctors';

const AVAILABILITY_LABELS: Record<AvailabilityStatus, { text: string; className: string }> = {
  available: { text: 'Available', className: 'bg-brand-green/10 text-brand-green' },
  limited: { text: 'Limited Slots', className: 'bg-brand-yellow/60 text-brand-green-dark' },
  full: { text: 'Fully Booked', className: 'bg-brand-red/10 text-brand-red' },
};

// Booking is a client-side demo only — no backend/database (see CLAUDE.md §1 exception,
// 2026-09-10). Availability is mock data, and submission opens a mailto: draft to the hospital's
// inbox, same no-backend pattern already used by the Careers and Contact forms.
export default function ScheduleVisitModal({
  doctor,
  onClose,
}: {
  doctor: Doctor;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ScheduleVisitValues>({ resolver: zodResolver(scheduleVisitSchema) });

  const preferredDate = watch('preferredDate');

  const { scheduleBlock, availability } = useMemo(() => {
    if (!preferredDate) return { scheduleBlock: undefined, availability: undefined };
    const weekday = new Date(`${preferredDate}T00:00:00`).getDay();
    const block = getScheduleForWeekday(doctor.schedule, weekday);
    return {
      scheduleBlock: block,
      availability: block ? getMockAvailability(doctor.id, preferredDate) : undefined,
    };
  }, [preferredDate, doctor]);

  const canSubmit = Boolean(scheduleBlock) && availability !== 'full';

  const onSubmit = (data: ScheduleVisitValues) => {
    const subject = `Appointment Request: Dr. ${doctor.firstName} ${doctor.lastName}`;
    const body = `Doctor: Dr. ${doctor.firstName} ${doctor.lastName} (${doctor.specialization})
Preferred Date: ${data.preferredDate} (${scheduleBlock?.label}, ${scheduleBlock?.hours})
Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email || 'N/A'}
Reason for Visit: ${data.reason || 'N/A'}`;
    setSubmitted(true);
    window.location.href = `mailto:customercare@tanauanmedicalcenter.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClasses =
    'mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white shadow-2xl">
        <div className="flex items-center justify-between bg-brand-green px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-white">Schedule a Visit</p>
            <p className="text-xs text-white/80">
              Dr. {doctor.firstName} {doctor.lastName} — {doctor.specialization}
            </p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="text-white">
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="space-y-4 p-5 text-sm text-gray-700">
            <p>
              Your appointment request has been prepared in your email client. Send it to complete
              your request — our staff will confirm the actual schedule with you.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-green/90"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input {...register('fullName')} className={inputClasses} />
              {errors.fullName && (
                <p className="mt-1 text-xs text-brand-red">{errors.fullName.message}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input {...register('phone')} className={inputClasses} />
                {errors.phone && (
                  <p className="mt-1 text-xs text-brand-red">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email (optional)</label>
                <input {...register('email')} className={inputClasses} />
                {errors.email && (
                  <p className="mt-1 text-xs text-brand-red">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Date of Visit
              </label>
              <input
                type="date"
                min={new Date().toISOString().slice(0, 10)}
                {...register('preferredDate')}
                className={inputClasses}
              />
              {errors.preferredDate && (
                <p className="mt-1 text-xs text-brand-red">{errors.preferredDate.message}</p>
              )}

              {preferredDate && (
                <div className="mt-2 flex items-center gap-2 text-sm">
                  {scheduleBlock ? (
                    <>
                      <span className="text-gray-600">
                        Clinic hours: {scheduleBlock.label}, {scheduleBlock.hours}
                      </span>
                      {availability && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${AVAILABILITY_LABELS[availability].className}`}
                        >
                          {AVAILABILITY_LABELS[availability].text}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="text-brand-red">
                      Dr. {doctor.lastName} does not hold clinic on this day. Please pick another
                      date.
                    </span>
                  )}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Reason for Visit (optional)
              </label>
              <textarea {...register('reason')} rows={3} className={inputClasses} />
            </div>

            <p className="text-xs text-gray-500">
              Note: Doctor&apos;s schedule may change without prior notice. This request is not a
              confirmed appointment — our staff will reach out to confirm.
            </p>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!canSubmit}
                className="rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-green/90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Request Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
