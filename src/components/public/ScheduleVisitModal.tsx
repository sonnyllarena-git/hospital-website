'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  scheduleVisitSchema,
  VISIT_REASONS,
  SUFFIX_OPTIONS,
  TITLE_OPTIONS,
  type ScheduleVisitValues,
} from '@/lib/validation';
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
    const patientName = [data.title, data.firstName, data.lastName, data.suffix]
      .filter(Boolean)
      .join(' ');
    const body = `Doctor: Dr. ${doctor.firstName} ${doctor.lastName} (${doctor.specialization})
Preferred Date: ${data.preferredDate} (${scheduleBlock?.label}, ${scheduleBlock?.hours})
Name: ${patientName}
Phone: ${data.phone}
Email: ${data.email || 'N/A'}
Reason for Visit: ${data.reason}
Notes for the Doctor: ${data.notes || 'N/A'}`;
    setSubmitted(true);
    window.location.href = `mailto:customercare@tanauanmedicalcenter.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClasses =
    'mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-lg bg-white shadow-2xl">
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
            <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-[5.5rem_1fr_1fr_5.5rem]">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <select {...register('title')} className={inputClasses}>
                      <option value="">— None —</option>
                      {TITLE_OPTIONS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input {...register('firstName')} className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input {...register('lastName')} className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Suffix</label>
                    <select {...register('suffix')} className={inputClasses}>
                      <option value="">— None —</option>
                      {SUFFIX_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {(errors.firstName || errors.lastName) && (
                  <p className="-mt-2 text-xs text-brand-red">
                    {errors.firstName?.message || errors.lastName?.message}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Number
                    </label>
                    <input {...register('phone')} className={inputClasses} />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-brand-red">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email (optional)
                    </label>
                    <input {...register('email')} className={inputClasses} />
                    {errors.email && (
                      <p className="mt-1 text-xs text-brand-red">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Notes for the Doctor (optional)
                  </label>
                  <textarea {...register('notes')} rows={4} className={inputClasses} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
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
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Reason for Visit
                    </label>
                    <select {...register('reason')} defaultValue="" className={inputClasses}>
                      <option value="" disabled>
                        — Select Reason —
                      </option>
                      {VISIT_REASONS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                    {errors.reason && (
                      <p className="mt-1 text-xs text-brand-red">{errors.reason.message}</p>
                    )}
                  </div>
                </div>

                {preferredDate && (
                  <div className="flex flex-wrap items-center gap-2 text-sm">
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

                <p className="text-xs text-gray-500">
                  Note: Doctor&apos;s schedule may change without prior notice. This request is not
                  a confirmed appointment — our staff will reach out to confirm.
                </p>
              </div>
            </div>

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
