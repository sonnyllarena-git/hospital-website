import { z } from 'zod';

export const applicationFormSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  department: z.enum([
    'Nursing',
    'Allied Health / Medical Technology',
    'Administrative & Support',
    'Other',
  ]),
  message: z.string().optional(),
});

export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
