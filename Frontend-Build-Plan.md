# Frontend Build Plan - Hospital One-Stop-Shop Website

**Comprehensive Guide for Building Patient & Employee Portal**

---

## Table of Contents

1. [Tech Stack & Setup](#tech-stack--setup)
2. [Project Structure](#project-structure)
3. [Component Breakdown](#component-breakdown)
4. [Page-by-Page Build Guide](#page-by-page-build-guide)
5. [Authentication Flow](#authentication-flow)
6. [Styling & Design System](#styling--design-system)
7. [Performance Optimization](#performance-optimization)
8. [Testing Strategy](#testing-strategy)

---

## Tech Stack & Setup

### Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "@headlessui/react": "^1.7.0",
    "axios": "^1.4.0",
    "react-hook-form": "^7.45.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    "@tanstack/react-query": "^4.29.0",
    "zustand": "^4.3.8",
    "date-fns": "^2.30.0",
    "react-calendar": "^4.2.0",
    "recharts": "^2.7.2",
    "react-hot-toast": "^2.4.1",
    "next-intl": "^2.17.0",
    "next-auth": "^4.22.0",
    "jwt-decode": "^3.1.2",
    "sentry/nextjs": "^7.50.0"
  },
  "devDependencies": {
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^5.16.5",
    "jest": "^29.6.0",
    "eslint": "^8.45.0",
    "prettier": "^3.0.0"
  }
}
```

### Installation & Setup

```bash
# Create Next.js project
npx create-next-app@latest hospital-portal --typescript --tailwind

# Install dependencies
npm install axios react-hook-form zod @hookform/resolvers @tanstack/react-query zustand date-fns react-calendar recharts react-hot-toast next-intl next-auth jwt-decode @sentry/nextjs

# Dev dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest eslint prettier

# Setup environment variables
cp .env.example .env.local
```

### .env.local

```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

---

## Project Structure

```
hospital-portal/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-banner.jpg
│   │   └── placeholder-doctor.jpg
│   └── icons/
│       ├── appointment.svg
│       ├── medical.svg
│       └── user.svg
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles
│   │   │
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx
│   │   │   ├── register/page.tsx
│   │   │   ├── forgot-password/page.tsx
│   │   │   └── verify-otp/page.tsx
│   │   │
│   │   ├── (patient)/
│   │   │   ├── layout.tsx          # Patient portal layout
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── portal/
│   │   │   │   ├── medical-records/page.tsx
│   │   │   │   ├── prescriptions/page.tsx
│   │   │   │   ├── billing/page.tsx
│   │   │   │   ├── lab-results/page.tsx
│   │   │   │   └── appointments/page.tsx
│   │   │   ├── book-appointment/page.tsx
│   │   │   ├── find-doctor/page.tsx
│   │   │   ├── telemedicine/[appointmentId]/page.tsx
│   │   │   └── settings/page.tsx
│   │   │
│   │   ├── (employee)/
│   │   │   ├── layout.tsx          # Employee portal layout
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── careers/page.tsx
│   │   │   ├── job/[jobId]/page.tsx
│   │   │   ├── recognition/page.tsx
│   │   │   ├── employee-portal/page.tsx
│   │   │   ├── announcements/page.tsx
│   │   │   └── apply/[jobId]/page.tsx
│   │   │
│   │   ├── (public)/
│   │   │   ├── about-us/page.tsx
│   │   │   ├── services/page.tsx
│   │   │   ├── locations/page.tsx
│   │   │   ├── contact-us/page.tsx
│   │   │   ├── health-library/page.tsx
│   │   │   └── news/page.tsx
│   │   │
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login/route.ts
│   │   │   │   ├── register/route.ts
│   │   │   │   ├── logout/route.ts
│   │   │   │   └── refresh/route.ts
│   │   │   ├── appointments/route.ts
│   │   │   ├── patients/route.ts
│   │   │   └── [...]
│   │   │
│   │   └── error.tsx               # Error boundary
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── Navbar.tsx
│   │   │
│   │   ├── shared/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── ErrorMessage.tsx
│   │   │   └── Toast.tsx
│   │   │
│   │   ├── patient/
│   │   │   ├── AppointmentCard.tsx
│   │   │   ├── DoctorCard.tsx
│   │   │   ├── LabResultCard.tsx
│   │   │   ├── PrescriptionCard.tsx
│   │   │   ├── InvoiceCard.tsx
│   │   │   ├── AppointmentBookingForm.tsx
│   │   │   ├── MedicalRecordsList.tsx
│   │   │   ├── HealthChart.tsx
│   │   │   └── PatientDashboard.tsx
│   │   │
│   │   ├── employee/
│   │   │   ├── JobCard.tsx
│   │   │   ├── EmployeeAwardCard.tsx
│   │   │   ├── RecognitionWall.tsx
│   │   │   ├── JobApplicationForm.tsx
│   │   │   ├── AnnouncementCard.tsx
│   │   │   └── EmployeeDashboard.tsx
│   │   │
│   │   └── public/
│   │       ├── HeroSection.tsx
│   │       ├── DoctorSearchForm.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── TestimonialCard.tsx
│   │       └── FAQSection.tsx
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useAppointments.ts
│   │   ├── usePatient.ts
│   │   ├── useDoctors.ts
│   │   ├── useLabs.ts
│   │   ├── useJobs.ts
│   │   └── useForm.ts
│   │
│   ├── services/
│   │   ├── api.ts                  # Axios instance
│   │   ├── auth.service.ts
│   │   ├── appointment.service.ts
│   │   ├── patient.service.ts
│   │   ├── doctor.service.ts
│   │   ├── lab.service.ts
│   │   ├── billing.service.ts
│   │   ├── job.service.ts
│   │   └── hmo.service.ts
│   │
│   ├── store/
│   │   ├── authStore.ts            # Zustand auth state
│   │   ├── patientStore.ts
│   │   ├── uiStore.ts              # UI state (modals, toasts)
│   │   └── filterStore.ts          # Filter state (doctor search, etc.)
│   │
│   ├── lib/
│   │   ├── utils.ts                # Utility functions
│   │   ├── constants.ts            # App constants
│   │   ├── validation.ts           # Zod schemas
│   │   ├── formats.ts              # Formatting functions
│   │   └── api-client.ts           # API client wrapper
│   │
│   ├── types/
│   │   ├── auth.ts
│   │   ├── patient.ts
│   │   ├── appointment.ts
│   │   ├── doctor.ts
│   │   ├── lab.ts
│   │   ├── billing.ts
│   │   ├── job.ts
│   │   └── common.ts
│   │
│   ├── styles/
│   │   ├── tailwind.config.ts      # Design tokens
│   │   ├── variables.css           # CSS variables
│   │   └── animations.css          # Custom animations
│   │
│   └── middleware.ts               # NextAuth middleware
│
├── .env.local
├── .env.example
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── jest.config.js
└── package.json
```

---

## Component Breakdown

### 1. Layout Components

#### Header.tsx (Navigation)

```typescript
// src/components/layout/Header.tsx
import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLogout = async () => {
    await logout()
    router.push('/login')
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-blue-600">
          🏥 Hospital Portal
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <Link href="/find-doctor" className="hover:text-blue-600">
            Find Doctor
          </Link>
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/locations" className="hover:text-blue-600">
            Locations
          </Link>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100"
              >
                {user.avatar && <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />}
                {user.name}
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <Link href="/portal/dashboard" className="block px-4 py-2 hover:bg-gray-50">
                    Dashboard
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 hover:bg-gray-50">
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
```

#### Sidebar.tsx (Patient Portal)

```typescript
// src/components/layout/Sidebar.tsx
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PATIENT_LINKS = [
  { href: '/portal/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/portal/appointments', label: 'Appointments', icon: '📅' },
  { href: '/portal/medical-records', label: 'Medical Records', icon: '📋' },
  { href: '/portal/prescriptions', label: 'Prescriptions', icon: '💊' },
  { href: '/portal/lab-results', label: 'Lab Results', icon: '🔬' },
  { href: '/portal/billing', label: 'Billing', icon: '💳' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-gray-50 border-r min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800">Patient Portal</h2>
      </div>

      <nav className="space-y-2 px-4">
        {PATIENT_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              pathname.startsWith(link.href)
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span>{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
```

### 2. Shared Components

#### Button.tsx

```typescript
// src/components/shared/Button.tsx
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  isLoading?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  onClick,
  type = 'button',
  className = '',
  isLoading = false,
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed'

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {isLoading ? '⏳ Loading...' : children}
    </button>
  )
}
```

#### Input.tsx

```typescript
// src/components/shared/Input.tsx
import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}

        <input
          ref={ref}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
            error ? 'border-red-500 bg-red-50' : 'border-gray-300'
          } ${className}`}
          {...props}
        />

        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        {helperText && <p className="text-gray-500 text-sm mt-1">{helperText}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
```

### 3. Patient Components

#### DoctorCard.tsx

```typescript
// src/components/patient/DoctorCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Doctor } from '@/types/doctor'

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Doctor Photo */}
      <div className="relative w-full h-48 bg-gray-200">
        {doctor.photo ? (
          <Image src={doctor.photo} alt={doctor.name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">👨‍⚕️</div>
        )}
      </div>

      {/* Doctor Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">{doctor.name}</h3>
        <p className="text-sm text-gray-600">{doctor.specialty}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 my-2">
          <span className="text-yellow-400">⭐</span>
          <span className="text-sm font-semibold">{doctor.rating.toFixed(1)}</span>
          <span className="text-xs text-gray-500">({doctor.reviewCount} reviews)</span>
        </div>

        {/* Insurance */}
        <div className="mb-3">
          <p className="text-xs text-gray-600 mb-1">Insurance Accepted:</p>
          <div className="flex flex-wrap gap-1">
            {doctor.insurances.slice(0, 3).map((ins) => (
              <span key={ins} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                {ins}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link href={`/book-appointment?doctorId=${doctor.id}`} className="w-full bg-blue-600 text-white py-2 rounded text-center hover:bg-blue-700 transition-colors">
          Book Appointment
        </Link>
      </div>
    </div>
  )
}
```

#### AppointmentBookingForm.tsx

```typescript
// src/components/patient/AppointmentBookingForm.tsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Input from '@/components/shared/Input'
import Button from '@/components/shared/Button'
import { useAppointments } from '@/hooks/useAppointments'
import toast from 'react-hot-toast'

const appointmentSchema = z.object({
  doctorId: z.string().min(1, 'Doctor is required'),
  appointmentDate: z.string().min(1, 'Date is required'),
  appointmentTime: z.string().min(1, 'Time is required'),
  consultationType: z.enum(['in-person', 'telemedicine']),
  reason: z.string().min(10, 'Please provide a reason (min 10 characters)'),
  paymentMethod: z.enum(['now', 'arrival']),
})

type AppointmentFormData = z.infer<typeof appointmentSchema>

export default function AppointmentBookingForm({ doctorId }: { doctorId: string }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { doctorId, consultationType: 'in-person', paymentMethod: 'now' },
  })

  const { createAppointment } = useAppointments()

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      await createAppointment(data)
      toast.success('Appointment booked successfully!')
    } catch (error) {
      toast.error('Failed to book appointment. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Date */}
      <Input
        type="date"
        label="Appointment Date"
        {...register('appointmentDate')}
        error={errors.appointmentDate?.message}
      />

      {/* Time */}
      <Input
        type="time"
        label="Appointment Time"
        {...register('appointmentTime')}
        error={errors.appointmentTime?.message}
      />

      {/* Consultation Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input type="radio" value="in-person" {...register('consultationType')} className="mr-2" />
            In-person
          </label>
          <label className="flex items-center">
            <input type="radio" value="telemedicine" {...register('consultationType')} className="mr-2" />
            Telemedicine
          </label>
        </div>
      </div>

      {/* Reason */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit</label>
        <textarea
          {...register('reason')}
          placeholder="Describe your reason for the appointment..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        {errors.reason && <p className="text-red-600 text-sm mt-1">{errors.reason.message}</p>}
      </div>

      {/* Payment */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input type="radio" value="now" {...register('paymentMethod')} className="mr-2" />
            Pay Now
          </label>
          <label className="flex items-center">
            <input type="radio" value="arrival" {...register('paymentMethod')} className="mr-2" />
            Pay on Arrival
          </label>
        </div>
      </div>

      <Button type="submit" isLoading={isSubmitting}>
        Book Appointment
      </Button>
    </form>
  )
}
```

---

## Page-by-Page Build Guide

### Page 1: Home Page (Public)

**File:** `src/app/page.tsx`

```typescript
import Header from '@/components/layout/Header'
import Hero from '@/components/public/HeroSection'
import DoctorSearchForm from '@/components/public/DoctorSearchForm'
import ServiceCard from '@/components/public/ServiceCard'
import TestimonialCard from '@/components/public/TestimonialCard'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Find Doctor CTA */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Find & Book a Doctor</h2>
        <DoctorSearchForm />
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">What Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
```

### Page 2: Find Doctor

**File:** `src/app/(public)/find-doctor/page.tsx`

```typescript
'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import DoctorCard from '@/components/patient/DoctorCard'
import { useDoctors } from '@/hooks/useDoctors'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default function FindDoctorPage() {
  const [filters, setFilters] = useState({
    specialty: '',
    insurance: '',
    availability: '',
  })

  const { doctors, isLoading, error } = useDoctors(filters)

  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find a Doctor</h1>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <select
            value={filters.specialty}
            onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">All Specialties</option>
            <option value="cardiology">Cardiology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="orthopedics">Orthopedics</option>
          </select>

          <select
            value={filters.insurance}
            onChange={(e) => setFilters({ ...filters, insurance: e.target.value })}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">All Insurance</option>
            <option value="philcare">Philcare</option>
            <option value="medicard">Medicard</option>
            <option value="maxicare">Maxicare</option>
          </select>

          <select
            value={filters.availability}
            onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">Any Time</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="this-week">This Week</option>
          </select>
        </div>

        {/* Results */}
        {isLoading && <LoadingSpinner />}
        {error && <div className="text-red-600">Error loading doctors. Please try again.</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  )
}
```

### Page 3: Patient Portal Dashboard

**File:** `src/app/(patient)/portal/dashboard/page.tsx`

```typescript
'use client'

import { useAuth } from '@/hooks/useAuth'
import PatientDashboard from '@/components/patient/PatientDashboard'
import Sidebar from '@/components/layout/Sidebar'

export default function DashboardPage() {
  const { user } = useAuth()

  if (!user) return <div>Loading...</div>

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <PatientDashboard user={user} />
      </main>
    </div>
  )
}
```

---

## Authentication Flow

### Login Page

**File:** `src/app/(auth)/login/page.tsx`

```typescript
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '@/hooks/useAuth'
import Input from '@/components/shared/Input'
import Button from '@/components/shared/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password)
      router.push('/portal/dashboard')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            type="email"
            label="Email"
            placeholder="your@email.com"
            {...register('email')}
            error={errors.email?.message}
          />

          <Input
            type="password"
            label="Password"
            placeholder="••••••"
            {...register('password')}
            error={errors.password?.message}
          />

          <Button type="submit" isLoading={isSubmitting} className="w-full">
            Login
          </Button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
```

---

## Styling & Design System

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',    // blue-700
        secondary: '#6b7280',  // gray-500
        success: '#10b981',    // green-500
        danger: '#ef4444',     // red-500
        warning: '#f59e0b',    // amber-500
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

### styles/variables.css

```css
:root {
  --color-primary: #1e40af;
  --color-secondary: #6b7280;
  --color-success: #10b981;
  --color-danger: #ef4444;
  --color-warning: #f59e0b;

  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  --border-radius-sm: 0.375rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 0.75rem;

  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
}
```

---

## Performance Optimization

### 1. Image Optimization

```typescript
// Use Next.js Image component
import Image from 'next/image'

export default function OptimizedImage() {
  return (
    <Image
      src="/images/doctor.jpg"
      alt="Doctor"
      width={400}
      height={400}
      priority // For above-the-fold images
      placeholder="blur" // Show blurred placeholder while loading
      quality={75} // Optimize quality
    />
  )
}
```

### 2. Code Splitting

```typescript
// Use dynamic imports for heavy components
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('@/components/patient/HealthChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false, // Disable SSR if not needed
})
```

### 3. Memoization

```typescript
import { memo } from 'react'

const DoctorCard = memo(function DoctorCard({ doctor }) {
  return (
    // Component JSX
  )
})

export default DoctorCard
```

### 4. API Caching with React Query

```typescript
// src/hooks/useDoctors.ts
import { useQuery } from '@tanstack/react-query'
import { getDoctors } from '@/services/doctor.service'

export function useDoctors(filters) {
  return useQuery({
    queryKey: ['doctors', filters],
    queryFn: () => getDoctors(filters),
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  })
}
```

---

## Testing Strategy

### Jest Configuration

**jest.config.js:**

```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
```

### Sample Unit Test

**src/components/shared/__tests__/Button.test.tsx:**

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '@/components/shared/Button'

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    await user.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('shows loading state', () => {
    render(<Button isLoading>Loading</Button>)
    expect(screen.getByText(/Loading/)).toBeInTheDocument()
  })
})
```

---

## Environment Variables

**.env.local:**

```
# API
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001

# Auth
NEXTAUTH_SECRET=your-secret-key-here-min-32-chars
NEXTAUTH_URL=http://localhost:3000

# Third-party APIs
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx

# Zoom API (Telemedicine)
NEXT_PUBLIC_ZOOM_CLIENT_ID=xxx
ZOOM_CLIENT_SECRET=xxx

# Monitoring
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx

# Feature Flags
NEXT_PUBLIC_ENABLE_TELEMEDICINE=true
NEXT_PUBLIC_ENABLE_EMPLOYEE_PORTAL=true
```

---

## Build & Deployment

### Development

```bash
npm run dev
# Runs on http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

### Docker

**Dockerfile:**

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY --from=builder /app/.next ./.next
COPY public ./public

EXPOSE 3000
CMD ["npm", "start"]
```

**docker-compose.yml:**

```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_API_URL: http://backend:3001
    depends_on:
      - backend

  backend:
    image: hospital-api:latest
    ports:
      - '3001:3001'
    environment:
      DATABASE_URL: postgresql://...
      JWT_SECRET: ...
```

---

## Next Steps

1. ✅ **Set up Next.js project** with the structure outlined
2. ✅ **Create shared components** (Button, Input, Card, etc.)
3. ✅ **Build layout components** (Header, Sidebar, Footer)
4. ✅ **Implement authentication** pages (Login, Register)
5. ✅ **Build patient portal** pages and components
6. ✅ **Build employee portal** pages and components
7. ✅ **Connect to backend API** via services
8. ✅ **Add styling** with Tailwind
9. ✅ **Write tests** for critical components
10. ✅ **Deploy to Vercel**

---

This frontend build plan provides a complete, production-ready structure for the hospital website. Start with the foundation (layout, shared components), then build pages and features incrementally. 🚀
