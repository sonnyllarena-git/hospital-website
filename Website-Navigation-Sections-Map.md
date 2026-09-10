# Hospital One-Stop-Shop Website - Complete Navigation & Sections Map

**All Pages, Sections, Subsections, and URLs**

---

## 1. PUBLIC WEBSITE (Unauthenticated Users)

### 1.1 HOME PAGE
**URL:** `/` or `/home`

```
HOME PAGE SECTIONS:
├─ Header/Navigation (fixed)
├─ Hero Banner
│   ├─ Main headline: "Your Health, Our Priority"
│   ├─ Sub-headline & CTA buttons
│   └─ Background image/video
├─ "How Can We Help You Today?" (3 CTAs)
│   ├─ Meet Our Doctors (with search)
│   ├─ Locate a Facility
│   └─ Book an Appointment
├─ Why Our Care (Value proposition)
├─ Quick Access Buttons
│   ├─ 🏥 Services
│   ├─ 👨‍⚕️ Find Doctor
│   ├─ 📅 Book Appointment
│   ├─ 📋 Medical Records (login required)
│   └─ 💼 Careers
├─ Featured Services (3-4 cards)
├─ Health Packages/Promos (rotating carousel)
├─ Patient Testimonials (3-4 cards)
├─ Latest News/Blog Posts (3 recent)
├─ Offers/Promotions Section
├─ Facility Highlights (photo gallery)
├─ "Contact Us" CTA
├─ FAQ Section (expandable)
└─ Footer
```

---

### 1.2 FIND A DOCTOR (Public, No Login)
**URL:** `/doctors` or `/find-doctor`

```
FIND DOCTOR PAGE:
├─ Page header
├─ Search & Filter Section
│   ├─ Search by name (text input)
│   ├─ Filter by Specialty (dropdown)
│   │   ├─ Cardiology
│   │   ├─ Pediatrics
│   │   ├─ Emergency Medicine
│   │   ├─ Orthopedics
│   │   ├─ OB-GYN
│   │   ├─ General Medicine
│   │   └─ ... (all departments)
│   ├─ Filter by Insurance Accepted (multi-select)
│   │   ├─ Philcare
│   │   ├─ Medicard
│   │   ├─ Maxicare
│   │   ├─ AsianCare
│   │   └─ Direct pay
│   ├─ Filter by Availability (radio button)
│   │   ├─ Today
│   │   ├─ Tomorrow
│   │   ├─ This week
│   │   └─ Any time
│   ├─ Filter by Gender Preference (radio button)
│   ├─ Filter by Language (multi-select)
│   └─ Sort by (Rating, Experience, etc.)
│
├─ Doctor Results Grid (3 columns)
│   └─ Each card shows:
│       ├─ Doctor photo
│       ├─ Name + credentials
│       ├─ Specialty
│       ├─ Years of experience
│       ├─ Rating (⭐⭐⭐⭐⭐)
│       ├─ Insurance badges
│       ├─ "Book Appointment" button
│       ├─ "View Profile" link
│       └─ "Save" button
│
├─ Doctor Detail Page (individual doctor profile)
│   └─ URL: `/doctors/[doctorId]`
│   └─ Shows:
│       ├─ Full bio
│       ├─ Education & credentials
│       ├─ Specializations
│       ├─ Affiliations
│       ├─ Awards/recognition
│       ├─ Languages spoken
│       ├─ Consultation fee
│       ├─ Availability calendar
│       ├─ Patient reviews (5-star)
│       ├─ "Book Appointment" CTA
│       └─ "Telemedicine Available" badge
│
└─ Pagination or "Load More"
```

---

### 1.3 SERVICES
**URL:** `/services`

```
SERVICES PAGE:
├─ Page header
├─ Main Service Categories (tabs or accordion)
│   ├─ Medical Departments
│   │   ├─ Cardiology
│   │   ├─ Pediatrics
│   │   ├─ Emergency
│   │   ├─ OR/Surgery
│   │   ├─ ICU
│   │   └─ ... (all departments)
│   │
│   ├─ Diagnostic Services
│   │   ├─ CT Scan
│   │   ├─ MRI
│   │   ├─ Ultrasound
│   │   ├─ X-ray
│   │   └─ Laboratory
│   │
│   ├─ Health Check-Up Packages
│   │   ├─ Basic Health Check-Up (₱2,500)
│   │   ├─ Executive Check-Up (₱8,000)
│   │   ├─ Senior Wellness (₱5,000)
│   │   └─ Pregnancy Wellness (₱6,000)
│   │
│   ├─ Special Services
│   │   ├─ Home Service (phlebotomy, consultations)
│   │   ├─ Telemedicine
│   │   ├─ Medical Certificates
│   │   ├─ Vaccination Hub
│   │   └─ Corporate Wellness Programs
│   │
│   └─ Wellness Programs
│       ├─ Fitness Assessments
│       ├─ Nutrition Counseling
│       ├─ Stress Management
│       └─ Smoking Cessation
│
├─ Each Service shows:
│   ├─ Description
│   ├─ What's included
│   ├─ Price/cost
│   ├─ Duration
│   ├─ Who it's for
│   ├─ "Book Now" button
│   └─ FAQ for that service
│
└─ Footer CTA: "Book a Service Today"
```

---

### 1.4 EXPLORE LOCATIONS / BRANCHES
**URL:** `/locations` or `/explore-locations`

```
LOCATIONS PAGE:
├─ Page header: "Find a Facility Near You"
├─ Location Filter/Search
│   ├─ Search by city/address (text input)
│   ├─ Filter by Region (radio button)
│   │   ├─ Metro Manila
│   │   ├─ Luzon
│   │   ├─ Visayas
│   │   └─ Mindanao
│   └─ Filter by Type (checkbox)
│       ├─ Hospital
│       ├─ Clinic
│       └─ Specialty Center
│
├─ Location Cards (grid or list view)
│   └─ Each location shows:
│       ├─ Facility name
│       ├─ Type (Hospital/Clinic)
│       ├─ Address
│       ├─ Phone number
│       ├─ Operating hours (24/7 or specific times)
│       ├─ Departments available
│       ├─ "Get Directions" (Google Maps link)
│       ├─ "Contact" button
│       └─ "View Details" link
│
├─ Individual Location Detail Pages
│   └─ URL: `/locations/[locationId]` or `/our-network/[hospital-name]`
│   └─ Shows:
│       ├─ Full facility information
│       ├─ Photo gallery
│       ├─ Operating departments
│       ├─ Doctors available at this location
│       ├─ Services offered
│       ├─ Contact information
│       ├─ Directions/map
│       ├─ Parking information
│       ├─ Public transportation info
│       ├─ "Book Appointment" CTA
│       └─ "Call Now" button
│
└─ Map view (Google Maps embed)
```

**Specific Branches Listed:**
- Tanauan Medical Center (main hospital)
- Santo Tomás Medical Center
- Lipa Clinic
- Other branches

---

### 1.5 ABOUT US / MISSION & VISION
**URL:** `/about-us` or `/about`

```
ABOUT US PAGE:
├─ Page header
├─ Hospital Overview Section
│   ├─ Brief intro paragraph
│   ├─ Founding year + history
│   ├─ Current stats (# of doctors, staff, beds, etc.)
│   └─ Logo + key images
│
├─ MISSION Section
│   ├─ Official mission statement
│   ├─ Visual icon/badge
│   └─ Explanation paragraph
│
├─ VISION Section
│   ├─ Official vision statement
│   ├─ Visual icon/badge
│   └─ Explanation paragraph
│
├─ VALUES Section (3-5 core values)
│   ├─ Value 1: Compassion
│   │   ├─ Icon
│   │   └─ Description
│   ├─ Value 2: Excellence
│   ├─ Value 3: Integrity
│   ├─ Value 4: Innovation
│   └─ Value 5: Community
│
├─ Our Story (Timeline)
│   ├─ Founded: [Year]
│   ├─ Key milestones
│   ├─ Major expansions
│   └─ Awards/recognition
│
├─ Why Choose Us? (Differentiators)
│   ├─ Modern facilities
│   ├─ Expert doctors
│   ├─ Patient-centric care
│   ├─ Affordable pricing
│   └─ 24/7 support
│
├─ Leadership Team (optional)
│   ├─ CEO photo + bio
│   ├─ Medical Director photo + bio
│   └─ Other key leaders
│
├─ Awards & Accreditations
│   ├─ "Best Hospital 2024"
│   ├─ "Excellence in Patient Care"
│   ├─ ISO certifications
│   └─ HIPAA compliance badge
│
└─ Call to Action: "Join Our Family of Care"
```

---

### 1.6 CAREERS / JOBS
**URL:** `/careers` or `/jobs`

```
CAREERS PAGE:
├─ Page header: "Join Our Team - Be Part of Care Beyond Cure"
│
├─ "Why Work Here?" Section
│   ├─ Culture highlights
│   ├─ Benefits overview
│   ├─ Growth opportunities
│   └─ Employee testimonials
│
├─ OPEN POSITIONS / JOB BOARD
│   ├─ Search & Filter Section
│   │   ├─ Search by job title (text input)
│   │   ├─ Filter by Position Type (dropdown)
│   │   │   ├─ Doctor/Physician
│   │   │   ├─ Nurse (RN, LPN)
│   │   │   ├─ Allied Health
│   │   │   ├─ Administrative
│   │   │   ├─ Management
│   │   │   └─ Intern/Trainee
│   │   ├─ Filter by Department (dropdown)
│   │   ├─ Filter by Employment Type (checkbox)
│   │   │   ├─ Full-time
│   │   │   ├─ Part-time
│   │   │   ├─ Contract
│   │   │   └─ Locum/On-call
│   │   ├─ Filter by Location (dropdown)
│   │   └─ Sort by (Posted Date, Salary, etc.)
│   │
│   ├─ Job Cards (list or grid)
│   │   ├─ Job title
│   │   ├─ Department
│   │   ├─ Employment type
│   │   ├─ Location
│   │   ├─ Salary range
│   │   ├─ Quick benefits
│   │   ├─ "View Details" button
│   │   └─ "Apply Now" button
│   │
│   └─ Individual Job Detail Page
│       └─ URL: `/careers/[jobId]` or `/jobs/[jobId]`
│       └─ Shows:
│           ├─ Full job description
│           ├─ Responsibilities
│           ├─ Required qualifications
│           ├─ Preferred qualifications
│           ├─ Salary & benefits
│           ├─ Career growth opportunities
│           ├─ Department info
│           ├─ "Apply Now" form
│           ├─ "Share on Social" buttons
│           └─ Similar job listings
│
├─ Job Alert Subscription
│   ├─ Email input
│   ├─ Position interest (multi-select)
│   ├─ Frequency (radio button)
│   └─ "Subscribe" button
│
├─ Employee Recognition Wall
│   ├─ "Employee of the Month" card
│   ├─ "Department of the Quarter" card
│   ├─ Previous awards (carousel or pagination)
│   └─ "View All Recognition" link
│
├─ Company Culture Showcase
│   ├─ "Day in the Life" videos (3-4)
│   ├─ Staff testimonials
│   ├─ Photo gallery (office, team events)
│   └─ Team video
│
├─ Benefits Showcase
│   ├─ Compensation
│   ├─ Health & Wellness
│   ├─ Time Off
│   ├─ Professional Development
│   └─ Work-Life Balance
│
└─ Call to Action: "Start Your Career With Us"
```

---

### 1.7 CONTACT US
**URL:** `/contact-us` or `/contact`

```
CONTACT US PAGE:
├─ Page header
├─ Contact Information Section
│   ├─ Main hospital address
│   ├─ Phone numbers
│   │   ├─ General inquiries: (02) 7777-2273
│   │   ├─ Emergency: 911 or (43) 778-1810
│   │   ├─ HR/Recruitment: [number]
│   │   └─ Customer Service: [number]
│   ├─ Email addresses
│   │   ├─ General: info@hospital.ph
│   │   ├─ Appointments: appointments@hospital.ph
│   │   ├─ Billing: billing@hospital.ph
│   │   └─ HR: careers@hospital.ph
│   └─ Operating hours
│
├─ Contact Form
│   ├─ Full name (required)
│   ├─ Email (required)
│   ├─ Phone (required)
│   ├─ Subject (dropdown)
│   │   ├─ Appointment inquiry
│   │   ├─ Medical question
│   │   ├─ Billing issue
│   │   ├─ Job inquiry
│   │   ├─ Complaint/Feedback
│   │   └─ Other
│   ├─ Message (textarea)
│   └─ "Submit" button
│
├─ Quick Links
│   ├─ "Make an Appointment" button
│   ├─ "Find a Doctor" button
│   ├─ "Apply for a Job" button
│   └─ "FAQ" link
│
├─ Location Map (Google Maps embed)
│   ├─ Showing main hospital
│   ├─ Showing all branches
│   └─ "Get Directions" link
│
├─ Social Media Links
│   ├─ Facebook
│   ├─ Instagram
│   ├─ LinkedIn
│   ├─ YouTube
│   └─ Twitter
│
└─ 24/7 Support Banner
    └─ "Need urgent help? Call us now: [number]"
```

---

### 1.8 HEALTH LIBRARY / BLOG
**URL:** `/health-library` or `/blog`

```
HEALTH LIBRARY PAGE:
├─ Page header: "Health Tips & Medical Information"
├─ Search & Filter Section
│   ├─ Search by keyword (text input)
│   ├─ Filter by Category (dropdown)
│   │   ├─ Cardiovascular Health
│   │   ├─ Pediatrics
│   │   ├─ Orthopedics
│   │   ├─ Women's Health
│   │   ├─ Mental Health
│   │   ├─ Nutrition & Diet
│   │   ├─ Fitness & Exercise
│   │   └─ Disease Prevention
│   ├─ Filter by Author (dropdown)
│   └─ Sort by (Date, Popularity, etc.)
│
├─ Featured Articles (carousel)
│   └─ Top 3-5 articles highlighted
│
├─ Article Grid (3 columns)
│   └─ Each article card shows:
│       ├─ Feature image
│       ├─ Title
│       ├─ Author + photo
│       ├─ Published date
│       ├─ Category badge
│       ├─ Brief excerpt (100 words)
│       ├─ Read time estimate
│       └─ "Read More" link
│
├─ Individual Article Page
│   └─ URL: `/health-library/[articleSlug]` or `/blog/[articleId]`
│   └─ Shows:
│       ├─ Full article title
│       ├─ Featured image
│       ├─ Author info + avatar
│       ├─ Published date
│       ├─ Read time
│       ├─ Category badge
│       ├─ Full article content
│       ├─ "Share" buttons (social media)
│       ├─ "Print" button
│       ├─ Related articles (sidebar or below)
│       ├─ Doctor interpretation (if applicable)
│       └─ "Book Consultation with a Doctor" CTA
│
├─ Categories Page (optional)
│   └─ URL: `/health-library/category/[categorySlug]`
│   └─ Shows all articles in that category
│
└─ Newsletter Signup
    └─ "Subscribe to our health tips newsletter"
```

---

### 1.9 NEWS & UPDATES
**URL:** `/news` or `/newsroom`

```
NEWS PAGE:
├─ Page header: "Latest News & Updates"
├─ Filter Section
│   ├─ Filter by Type (radio button)
│   │   ├─ General news
│   │   ├─ Awards & recognition
│   │   ├─ New services
│   │   ├─ Staff announcements
│   │   └─ Events
│   └─ Sort by (Date, Relevance)
│
├─ News Articles Grid
│   └─ Each news card shows:
│       ├─ Title
│       ├─ Category badge
│       ├─ Published date
│       ├─ Brief summary
│       └─ "Read More" link
│
├─ Individual News Article Page
│   └─ URL: `/news/[newsId]` or `/newsroom/[slug]`
│   └─ Shows:
│       ├─ Full title
│       ├─ Featured image
│       ├─ Published date
│       ├─ Category
│       ├─ Full content
│       ├─ "Share" buttons
│       └─ Related news items
│
└─ News Archive (by year/month)
```

---

### 1.10 PROMOS & PACKAGES
**URL:** `/promos` or `/packages`

```
PROMOS & PACKAGES PAGE:
├─ Page header: "Special Offers & Promotions"
├─ Filter Section
│   ├─ Filter by Type (checkbox)
│   │   ├─ Health packages
│   │   ├─ Discounts
│   │   ├─ Promotional events
│   │   └─ Special offers
│   └─ Filter by Validity (radio button)
│       ├─ Active now
│       ├─ Upcoming
│       └─ Expired
│
├─ Featured Promos (carousel)
├─ Promo Cards Grid
│   └─ Each promo shows:
│       ├─ Title
│       ├─ Description
│       ├─ Old price (crossed out)
│       ├─ New/sale price
│       ├─ Valid until date
│       ├─ Requirements/conditions
│       └─ "Book Now" or "Claim Offer" button
│
└─ Terms & Conditions (expandable section)
```

---

### 1.11 PATIENT GUIDE
**URL:** `/patient-guide`

```
PATIENT GUIDE PAGE:
├─ Page header: "How to Use Our Services"
├─ Tabs or Accordion Sections
│   ├─ First Visit
│   │   ├─ What to bring
│   │   ├─ What to expect
│   │   ├─ How to register
│   │   └─ Payment options
│   │
│   ├─ Booking an Appointment
│   │   ├─ Online booking steps
│   │   ├─ Phone booking
│   │   ├─ Walk-in procedures
│   │   └─ Cancellation/rescheduling
│   │
│   ├─ Insurance & HMO
│   │   ├─ Accepted insurance companies
│   │   ├─ HMO verification process
│   │   ├─ Letter of Authorization (LOA)
│   │   └─ Claim procedures
│   │
│   ├─ Patient Portal
│   │   ├─ How to register
│   │   ├─ How to book appointments
│   │   ├─ How to view records
│   │   └─ How to manage prescriptions
│   │
│   ├─ Telemedicine Consultation
│   │   ├─ How it works
│   │   ├─ Tech requirements
│   │   ├─ How to join
│   │   └─ Privacy & security
│   │
│   ├─ Billing & Payments
│   │   ├─ How billing works
│   │   ├─ Payment methods
│   │   ├─ Installment plans
│   │   └─ Asking for receipts/invoices
│   │
│   └─ Frequently Asked Questions (FAQs)
│       ├─ General questions
│       ├─ Appointment questions
│       ├─ Billing questions
│       ├─ Medical records questions
│       └─ Other
│
└─ Video Tutorials (optional)
```

---

## 2. AUTHENTICATED PATIENT PORTAL

### 2.1 PATIENT PORTAL LAYOUT (Logged-in Users)
**URL:** `/portal/*`

```
PATIENT PORTAL STRUCTURE:
├─ Header (fixed)
│   ├─ Hospital logo (links to home)
│   ├─ "Emergency" button (prominent red, top-right)
│   ├─ User menu (avatar + name)
│   └─ Notifications bell
│
├─ Sidebar (left)
│   ├─ Dashboard
│   ├─ Appointments
│   ├─ Medical Records
│   ├─ Prescriptions
│   ├─ Lab Results
│   ├─ Billing
│   ├─ Messages
│   ├─ Settings
│   └─ Logout
│
└─ Main Content Area
    └─ (Different for each page)
```

---

### 2.2 PATIENT DASHBOARD
**URL:** `/portal/dashboard`

```
DASHBOARD PAGE:
├─ Welcome message: "Welcome, [Patient Name]!"
├─ Quick Stats (cards)
│   ├─ Next appointment (date, time, doctor)
│   ├─ Unread messages (count)
│   ├─ Pending lab results (count)
│   └─ Pending payments (count)
│
├─ Quick Actions (buttons)
│   ├─ [Book New Appointment]
│   ├─ [Find a Doctor]
│   ├─ [View Medical Records]
│   ├─ [Refill Prescription]
│   └─ [Pay Invoice]
│
├─ Upcoming Appointments (card)
│   ├─ Date & time
│   ├─ Doctor name & specialty
│   ├─ Location
│   ├─ [Get Directions]
│   ├─ [Reschedule]
│   └─ [Cancel]
│
├─ Notifications/Alerts (card)
│   ├─ Lab results ready notification
│   ├─ Prescription ready notification
│   ├─ Payment reminder
│   ├─ Appointment reminder
│   └─ Doctor message notification
│
├─ Health Summary (card)
│   ├─ Blood pressure chart
│   ├─ Cholesterol trend
│   ├─ Weight trend
│   ├─ Glucose level
│   └─ [View Trends]
│
└─ Recent Activity (card)
    ├─ Last visit date
    ├─ Last lab test
    ├─ Last prescription
    └─ [View All]
```

---

### 2.3 APPOINTMENTS
**URL:** `/portal/appointments`

```
APPOINTMENTS PAGE:
├─ Tabs
│   ├─ Upcoming Appointments
│   ├─ Past Appointments
│   └─ All Appointments
│
├─ Upcoming Appointments Tab
│   ├─ [Book New Appointment] button
│   ├─ Appointment cards (list or calendar view)
│   │   ├─ Date & time (large)
│   │   ├─ Doctor name & photo
│   │   ├─ Specialty
│   │   ├─ Location
│   │   ├─ Consultation type (in-person/telemedicine)
│   │   ├─ Reason for visit
│   │   ├─ [Get Directions]
│   │   ├─ [Add to Calendar]
│   │   ├─ [Message Doctor]
│   │   ├─ [Reschedule]
│   │   └─ [Cancel]
│   │
│   └─ If no upcoming: "You have no upcoming appointments. Book one now!"
│
├─ Past Appointments Tab
│   ├─ Appointment cards
│   │   ├─ Date
│   │   ├─ Doctor name
│   │   ├─ Reason
│   │   ├─ Status (Completed)
│   │   ├─ [View Visit Summary]
│   │   ├─ [View Prescription]
│   │   └─ [Request Records]
│   │
│   └─ Pagination or "Load More"
│
└─ Calendar View (optional toggle)
    └─ Visual calendar with appointments marked
```

---

### 2.4 MEDICAL RECORDS
**URL:** `/portal/medical-records`

```
MEDICAL RECORDS PAGE:
├─ Navigation Tabs
│   ├─ Visit History
│   ├─ Lab Results
│   ├─ Diagnostic Images
│   ├─ Medications
│   ├─ Allergies & Conditions
│   └─ Vaccination Records
│
├─ VISIT HISTORY Tab
│   ├─ Filter by date range
│   ├─ Filter by doctor
│   ├─ Filter by department
│   ├─ Visit cards (list)
│   │   ├─ Date
│   │   ├─ Doctor name
│   │   ├─ Department/Specialty
│   │   ├─ Reason for visit (brief)
│   │   ├─ [View Full Visit Notes]
│   │   └─ [Download Visit Summary]
│   │
│   └─ Individual Visit Detail Page
│       └─ Full visit information:
│           ├─ Date & time
│           ├─ Doctor name + credentials
│           ├─ Chief complaint
│           ├─ Diagnosis
│           ├─ Treatment plan
│           ├─ Medications prescribed
│           ├─ Follow-up recommendations
│           ├─ [Print]
│           └─ [Download as PDF]
│
├─ LAB RESULTS Tab
│   ├─ Filter by test type
│   ├─ Filter by date
│   ├─ Lab result cards (list)
│   │   ├─ Test name
│   │   ├─ Date performed
│   │   ├─ Status (Preliminary/Final)
│   │   ├─ Normal/Abnormal badge
│   │   ├─ [View Full Results]
│   │   ├─ [View Interpretation]
│   │   └─ [Share with Specialist]
│   │
│   └─ Individual Lab Result Page
│       └─ Full results:
│           ├─ Test name & date
│           ├─ Results table (parameter, value, reference range, status)
│           ├─ Doctor's interpretation
│           ├─ Graph/chart (if applicable)
│           ├─ Comparison with previous results
│           ├─ [Book Follow-up Appointment]
│           ├─ [Print]
│           └─ [Download as PDF]
│
├─ DIAGNOSTIC IMAGES Tab
│   ├─ Filter by exam type (X-ray, CT, MRI, Ultrasound)
│   ├─ Filter by date
│   ├─ Image cards (thumbnail + info)
│   │   ├─ Exam type
│   │   ├─ Date
│   │   ├─ Body part
│   │   ├─ Thumbnail image
│   │   ├─ Status (Preliminary/Final)
│   │   └─ [View Full Image]
│   │
│   └─ Image Viewer (when clicked)
│       ├─ Full resolution image
│       ├─ Zoom & pan controls
│       ├─ Radiologist report
│       ├─ Comparison with previous images (timeline)
│       ├─ [Download DICOM file]
│       └─ [Print]
│
├─ MEDICATIONS Tab
│   ├─ Filter: Current / Past / All
│   ├─ Current Medications
│   │   ├─ Drug name + dosage
│   │   ├─ Frequency
│   │   ├─ Start date
│   │   ├─ Prescribing doctor
│   │   ├─ Reason for medication
│   │   ├─ Refills remaining
│   │   ├─ [Refill Now]
│   │   ├─ [View Instructions]
│   │   └─ [Report Side Effects]
│   │
│   └─ Past Medications (archived list)
│
├─ ALLERGIES & CONDITIONS Tab
│   ├─ Allergies Section (prominently displayed)
│   │   ├─ Allergy 1: [Substance] - [Reaction]
│   │   ├─ Allergy 2: [Substance] - [Reaction]
│   │   └─ [Edit Allergies]
│   │
│   ├─ Chronic Conditions
│   │   ├─ Condition 1: [Diagnosis] - [Date]
│   │   ├─ Condition 2: [Diagnosis] - [Date]
│   │   └─ [Edit Conditions]
│   │
│   └─ [Download Allergy Card as PDF]
│
└─ VACCINATION RECORDS Tab
    ├─ Routine Vaccines
    │   ├─ COVID-19: [# doses] + [last date]
    │   ├─ Flu: [last date]
    │   ├─ Tetanus: [last date + expiry]
    │   └─ MMR: [date]
    │
    ├─ Travel Vaccines
    │   └─ [List with validity dates]
    │
    ├─ Recommended Vaccines (based on age/health)
    │   └─ [Book vaccination]
    │
    └─ [Download e-Vax Card] [Print Vaccination Card]
```

---

### 2.5 PRESCRIPTIONS
**URL:** `/portal/prescriptions`

```
PRESCRIPTIONS PAGE:
├─ Tabs
│   ├─ Active Prescriptions
│   ├─ Past Prescriptions
│   └─ All Prescriptions
│
├─ ACTIVE PRESCRIPTIONS Tab
│   ├─ Prescription cards (list)
│   │   ├─ Drug name + strength (prominent)
│   │   ├─ Frequency (e.g., "Once daily at night")
│   │   ├─ Quantity
│   │   ├─ Refills remaining
│   │   ├─ Expiration date
│   │   ├─ Prescribing doctor
│   │   ├─ [Refill Now]
│   │   ├─ [Change Pharmacy]
│   │   ├─ [View Instructions]
│   │   ├─ [Report Issue]
│   │   └─ [Set Up Auto-Refill]
│   │
│   └─ Refill Modal (when "Refill Now" is clicked)
│       ├─ Confirm drug details
│       ├─ Select pharmacy (with inventory check)
│       ├─ Select delivery method (pickup/delivery)
│       ├─ Show price
│       ├─ [Submit Refill Request]
│       └─ SMS notification: "Prescription refill submitted"
│
├─ PAST PRESCRIPTIONS Tab
│   ├─ Archived list
│   ├─ Card shows: Drug name, date issued, status (filled/unfilled)
│   └─ [Refill Again] option
│
└─ Auto-Refill Setup (optional card at top)
    ├─ "Set up auto-refill for recurring medications"
    ├─ List medications eligible for auto-refill
    ├─ Frequency selector (every 30/60/90 days)
    ├─ Payment method selector
    └─ [Enable Auto-Refill]
```

---

### 2.6 LAB RESULTS
**URL:** `/portal/lab-results`

```
LAB RESULTS PAGE:
├─ Filter Section
│   ├─ Filter by test type (dropdown)
│   ├─ Filter by date range (date picker)
│   └─ Sort by (Date, Test Name)
│
├─ Lab Result Cards (list)
│   ├─ Date (large, prominent)
│   ├─ Test name
│   ├─ Status badge (Preliminary/Final/Abnormal ⚠️)
│   ├─ Normal/Abnormal indicator
│   ├─ Relevant numeric value (if quick view)
│   ├─ Approving doctor name
│   └─ [View Full Results]
│
├─ Individual Lab Result Page
│   └─ URL: `/portal/lab-results/[labId]`
│   └─ Shows:
│       ├─ Test name & date
│       ├─ Status
│       ├─ Ordered by: [Doctor name]
│       ├─ Results table:
│       │   ├─ Parameter name
│       │   ├─ Result value
│       │   ├─ Unit
│       │   ├─ Reference range
│       │   └─ Status (Normal ✓ / High 🔴 / Low 🔴)
│       │
│       ├─ Doctor's Interpretation (text box)
│       │   └─ "Your cholesterol is slightly elevated..."
│       │
│       ├─ View as Graph (if applicable)
│       │   └─ Chart showing values over time
│       │
│       ├─ Recommended Actions
│       │   ├─ [Book Consultation with Dr. Santos]
│       │   ├─ [View Health Tips]
│       │   └─ [Share with Specialist]
│       │
│       └─ [Download PDF] [Print] [Share]
│
└─ Auto-Notification Settings
    └─ "Get notified when lab results are ready"
```

---

### 2.7 BILLING
**URL:** `/portal/billing`

```
BILLING PAGE:
├─ Quick Summary Cards
│   ├─ Total Amount Due: ₱[X]
│   ├─ Last Payment: ₱[X] on [Date]
│   └─ Payment Method: [Last 4 digits of card]
│
├─ Tabs
│   ├─ Invoices (Outstanding)
│   ├─ Payment History
│   ├─ Insurance Claims
│   └─ Receipts & Documentation
│
├─ INVOICES (Outstanding) Tab
│   ├─ [Sort by: Date / Amount Due]
│   ├─ Overdue Invoices (red section if any)
│   │   └─ Invoice cards (with warning badge)
│   │       ├─ Invoice number
│   │       ├─ Date issued
│   │       ├─ Amount due (large, red)
│   │       ├─ Days overdue (red text)
│   │       ├─ Service description (brief)
│   │       ├─ [View Itemized Details]
│   │       ├─ [Pay Now]
│   │       ├─ [Set Up Installment]
│   │       └─ [Request Extension]
│   │
│   ├─ Pending Invoices (yellow section)
│   │   └─ Invoice cards
│   │       ├─ Invoice number
│   │       ├─ Date issued
│   │       ├─ Amount due
│   │       ├─ Due date
│   │       ├─ Service description
│   │       ├─ [View Itemized Details]
│   │       ├─ [Pay Now]
│   │       └─ [Set Up Installment]
│   │
│   └─ Individual Invoice Detail Page
│       └─ Shows:
│           ├─ Invoice number
│           ├─ Date issued
│           ├─ Itemized breakdown:
│           │   ├─ Consultation: ₱1,200
│           │   ├─ Lab Test: ₱800
│           │   ├─ ECG: ₱500
│           │   └─ Subtotal: ₱2,500
│           │
│           ├─ Insurance Information:
│           │   ├─ Your insurance (Philcare): covers ₱1,500
│           │   ├─ Your co-pay: ₱500
│           │   ├─ Your out-of-pocket: ₱1,000
│           │   └─ Total: ₱2,500
│           │
│           ├─ Payment Options:
│           │   ├─ [Pay Full Amount Now]
│           │   ├─ [Set Up Installment] (0% interest, 3 months)
│           │   └─ [Pay on Arrival at Hospital]
│           │
│           ├─ [Download Invoice as PDF]
│           ├─ [Print Invoice]
│           └─ [Request Tax Document]
│
├─ PAYMENT HISTORY Tab
│   ├─ Filter by date range
│   ├─ Payment records (list)
│   │   ├─ Date paid
│   │   ├─ Amount paid
│   │   ├─ Invoice(s) covered
│   │   ├─ Payment method (Visa ****4242)
│   │   ├─ Confirmation number
│   │   ├─ Status (Success ✓)
│   │   └─ [View Receipt]
│   │
│   └─ Pagination or "Load More"
│
├─ INSURANCE CLAIMS Tab
│   ├─ Claim cards (list)
│   │   ├─ Claim number
│   │   ├─ Invoice(s) covered
│   │   ├─ Claim amount
│   │   ├─ Submitted date
│   │   ├─ Status badge:
│   │   │   ├─ ✅ Approved
│   │   │   ├─ ⏳ Processing
│   │   │   ├─ ❌ Denied
│   │   │   └─ ⚠️ Pended (need more info)
│   │   ├─ Insurance approval amount (if approved)
│   │   ├─ Expected approval date (if still processing)
│   │   ├─ [View Claim Details]
│   │   ├─ [Download Approval Letter] (if approved)
│   │   ├─ [Appeal] (if denied)
│   │   └─ [Contact HMO] button
│   │
│   └─ Claim Detail Page
│       ├─ Full claim information
│       ├─ Claim timeline
│       ├─ Documents attached
│       ├─ Approval letter (if approved)
│       └─ Denial reason (if denied, with appeal option)
│
└─ RECEIPTS & DOCUMENTATION Tab
    ├─ Download options:
    │   ├─ [Download Individual Receipt as PDF]
    │   ├─ [Download Monthly Statement]
    │   ├─ [Download Annual Tax Document]
    │   └─ [Export to Excel]
    │
    └─ Request Documentation Form
        ├─ Document type (dropdown)
        ├─ Date range
        └─ [Request]
```

---

### 2.8 SETTINGS / PROFILE
**URL:** `/portal/settings`

```
SETTINGS PAGE:
├─ Navigation (tabs or sidebar)
│   ├─ Personal Information
│   ├─ Contact Information
│   ├─ Insurance Information
│   ├─ Medical Information
│   ├─ Account Settings
│   ├─ Privacy & Security
│   ├─ Notification Preferences
│   └─ Privacy Policy / Terms
│
├─ PERSONAL INFORMATION Tab
│   ├─ Full name (editable)
│   ├─ Date of birth (editable)
│   ├─ Gender (editable)
│   ├─ Blood type (editable)
│   ├─ [Save Changes]
│   └─ [Cancel]
│
├─ CONTACT INFORMATION Tab
│   ├─ Email address (editable, verified)
│   ├─ Primary phone (editable, verified)
│   ├─ Secondary phone (editable)
│   ├─ Address (editable)
│   ├─ City/Province (editable)
│   ├─ [Save Changes]
│   └─ [Cancel]
│
├─ INSURANCE INFORMATION Tab
│   ├─ Primary insurance
│   │   ├─ Insurance provider (dropdown or autocomplete)
│   │   ├─ Member ID (editable)
│   │   ├─ Group number (editable)
│   │   ├─ [Verify Coverage]
│   │   └─ [Remove]
│   │
│   ├─ Secondary insurance (optional)
│   │   └─ Same fields as primary
│   │
│   ├─ Emergency contact
│   │   ├─ Name
│   │   ├─ Relationship
│   │   ├─ Phone number
│   │   └─ [Edit]
│   │
│   └─ [Save Changes]
│
├─ MEDICAL INFORMATION Tab
│   ├─ Allergies
│   │   ├─ [Add new allergy]
│   │   └─ List current allergies (editable)
│   │
│   ├─ Chronic Conditions
│   │   ├─ [Add new condition]
│   │   └─ List current conditions (editable)
│   │
│   ├─ Current Medications
│   │   └─ Auto-populated from prescription list
│   │
│   └─ [Save Changes]
│
├─ ACCOUNT SETTINGS Tab
│   ├─ Username (display only)
│   ├─ Email (primary login)
│   ├─ Password
│   │   ├─ [Change Password]
│   │   └─ Form: Current password, New password, Confirm password
│   │
│   ├─ Two-Factor Authentication
│   │   ├─ Status: Enabled / Disabled
│   │   ├─ [Enable 2FA] or [Disable 2FA]
│   │   └─ Backup codes (if enabled)
│   │
│   ├─ Linked Accounts (Social login)
│   │   ├─ [Link Google Account]
│   │   ├─ [Link Facebook Account]
│   │   └─ [Unlink accounts]
│   │
│   └─ Account Deletion
│       └─ [Delete My Account] (red, requires confirmation)
│
├─ PRIVACY & SECURITY Tab
│   ├─ Data Encryption: ✅ Enabled
│   ├─ Login Activity
│   │   ├─ Current session
│   │   ├─ Recent logins (list)
│   │   ├─ Device info (browser, OS, IP)
│   │   └─ [Sign Out of This Device]
│   │
│   ├─ Connected Applications
│   │   └─ [Manage third-party app access]
│   │
│   └─ Data Download
│       └─ [Download My Data as JSON/PDF]
│
├─ NOTIFICATION PREFERENCES Tab
│   ├─ Channel Preferences
│   │   ├─ ☐ Email notifications
│   │   ├─ ☐ SMS notifications
│   │   ├─ ☐ Push notifications (app)
│   │   ├─ ☐ In-portal notifications
│   │   └─ ☐ Phone calls
│   │
│   ├─ What to Notify About
│   │   ├─ ☐ Appointment reminders (24h, 1h, 15m before)
│   │   ├─ ☐ Lab results ready
│   │   ├─ ☐ Prescription ready
│   │   ├─ ☐ Billing reminders
│   │   ├─ ☐ Doctor messages
│   │   ├─ ☐ Vaccination reminders
│   │   ├─ ☐ Appointment confirmations
│   │   ├─ ☐ Promotional offers
│   │   └─ ☐ Hospital news
│   │
│   ├─ Quiet Hours
│   │   ├─ From: [time] To: [time]
│   │   ├─ ☐ Enable quiet hours
│   │   └─ (No SMS/push during quiet hours)
│   │
│   ├─ Language Preference
│   │   ├─ ○ English
│   │   ├─ ○ Tagalog
│   │   └─ ○ Ilocano
│   │
│   └─ [Save Preferences]
│
└─ PRIVACY POLICY / TERMS Tab
    ├─ Privacy Policy (expandable)
    ├─ Terms of Service (expandable)
    ├─ Cookies Policy (expandable)
    └─ Data Protection Information (expandable)
```

---

## 3. AUTHENTICATED EMPLOYEE PORTAL (For Hospital Staff)

### 3.1 EMPLOYEE PORTAL LAYOUT
**URL:** `/employee/*` (Separate from patient portal)

```
EMPLOYEE PORTAL STRUCTURE:
├─ Header (different from patient portal)
│   ├─ Hospital logo
│   ├─ "Employee Portal" label
│   ├─ User menu (avatar + name + employee ID)
│   └─ Notifications bell
│
├─ Sidebar
│   ├─ Dashboard
│   ├─ Schedule
│   ├─ Payroll
│   ├─ Benefits
│   ├─ Training & Development
│   ├─ Directory
│   ├─ Announcements
│   ├─ Leave Management
│   ├─ Performance Reviews
│   ├─ Help/Support
│   └─ Settings
│
└─ Main Content Area
```

---

### 3.2 EMPLOYEE DASHBOARD
**URL:** `/employee/dashboard`

```
EMPLOYEE DASHBOARD:
├─ Welcome Banner
│   └─ "Welcome, [Employee Name] | Employee ID: [ID]"
│
├─ Quick Info Cards
│   ├─ Your Department: [Department name]
│   ├─ Your Role: [Position]
│   ├─ Manager: [Manager name]
│   ├─ Years with hospital: [X]
│   └─ Current Status: Active
│
├─ Quick Action Buttons
│   ├─ [View My Schedule]
│   ├─ [Request Time Off]
│   ├─ [View Payslip]
│   ├─ [Enroll in Training]
│   └─ [Submit a Request]
│
├─ Upcoming Events/Announcements
│   ├─ Title, date, brief description
│   └─ [Learn More]
│
├─ My Schedule (Next 7 days, mini view)
│   ├─ Calendar view of next week
│   ├─ Shifts highlighted
│   └─ [View Full Schedule]
│
├─ Pending Tasks/Requests
│   ├─ Incomplete items
│   └─ [Resolve]
│
└─ Important Links
    ├─ [Request Time Off]
    ├─ [Enroll in Training]
    ├─ [View Payslip]
    └─ [Submit Expense Report]
```

---

### 3.3 EMPLOYEE SCHEDULE
**URL:** `/employee/schedule`

```
SCHEDULE PAGE:
├─ Calendar View (month/week/day toggle)
│   ├─ Color-coded shifts
│   ├─ Days off highlighted
│   ├─ Training days marked
│   └─ Hover to see shift details
│
├─ Shift Details (click on shift)
│   ├─ Date
│   ├─ Start time
│   ├─ End time
│   ├─ Department/Location
│   ├─ Supervisor name
│   └─ [Add to Personal Calendar]
│
├─ Swap/Trade Shifts (if allowed)
│   ├─ [Browse Available Shifts]
│   ├─ [Request Shift Swap]
│   └─ [My Pending Swaps]
│
├─ Request Time Off
│   ├─ Type of leave (dropdown)
│   ├─ Dates
│   ├─ Reason
│   ├─ [Submit Request]
│   └─ Status of pending requests
│
└─ Absence Management
    ├─ Remaining vacation days: [X]
    ├─ Remaining sick leave: [X]
    └─ Remaining other leave: [X]
```

---

### 3.4 EMPLOYEE ANNOUNCEMENTS
**URL:** `/employee/announcements`

```
ANNOUNCEMENTS PAGE:
├─ Filter & Search
│   ├─ Search by keyword
│   ├─ Filter by type (checkbox)
│   │   ├─ Policy updates
│   │   ├─ Events
│   │   ├─ Celebrations
│   │   ├─ New services
│   │   └─ General news
│   └─ Sort by (Date, Priority)
│
├─ Announcement List
│   ├─ Title (prominent)
│   ├─ Date posted
│   ├─ Category badge
│   ├─ Brief summary
│   ├─ Author name
│   └─ [Read More] / [Expand]
│
├─ Important Announcements (pinned at top)
│   └─ Staff-wide notices
│
└─ Individual Announcement Page
    ├─ Full title
    ├─ Posted date
    ├─ Category
    ├─ Full content
    ├─ Attachments (if any)
    └─ [Mark as Read]
```

---

### 3.5 EMPLOYEE DIRECTORY
**URL:** `/employee/directory`

```
DIRECTORY PAGE:
├─ Search & Filter
│   ├─ Search by name (text input)
│   ├─ Filter by department (dropdown)
│   ├─ Filter by role (dropdown)
│   └─ Sort by (Last name, Department)
│
├─ Employee List/Grid
│   ├─ Employee name
│   ├─ Department
│   ├─ Position
│   ├─ Email
│   ├─ Phone extension
│   ├─ Photo (small)
│   └─ [View Profile]
│
└─ Individual Employee Profile Page
    ├─ Photo (larger)
    ├─ Name
    ├─ Position
    ├─ Department
    ├─ Email
    ├─ Phone extension
    ├─ Office location
    ├─ Years with hospital
    ├─ Manager name
    ├─ Direct reports (if applicable)
    └─ [Send Message] / [Email]
```

---

## 4. PUBLIC SECTIONS (Not Portal)

### 4.1 SPECIAL SECTIONS

**404 ERROR PAGE**
- `URL: /404`
- Friendly message + link back to home

**500 ERROR PAGE**
- `URL: /500`
- System error message + support contact

**PRIVACY POLICY**
- `URL: /privacy-policy`

**TERMS OF SERVICE**
- `URL: /terms`

**DATA PROTECTION / GDPR**
- `URL: /data-protection`

---

## COMPLETE SECTION SUMMARY

### PUBLIC WEBSITE (No Login Required)
1. ✅ HOME
2. ✅ FIND A DOCTOR
3. ✅ SERVICES
4. ✅ EXPLORE LOCATIONS / BRANCHES
5. ✅ ABOUT US (Mission, Vision, Values)
6. ✅ CAREERS / JOBS (Job Board, Recognition, Culture)
7. ✅ CONTACT US
8. ✅ HEALTH LIBRARY / BLOG
9. ✅ NEWS & UPDATES
10. ✅ PROMOS & PACKAGES
11. ✅ PATIENT GUIDE / FAQ

### PATIENT PORTAL (Login Required)
1. ✅ PATIENT DASHBOARD
2. ✅ APPOINTMENTS (Book, View, Manage)
3. ✅ MEDICAL RECORDS (Visit History, Lab Results, Imaging, Meds, Allergies, Vaccines)
4. ✅ PRESCRIPTIONS (View, Refill, Auto-Refill)
5. ✅ LAB RESULTS (View, Graph, Interpretation)
6. ✅ BILLING (Invoices, Payment History, Insurance Claims, Receipts)
7. ✅ SETTINGS / PROFILE

### EMPLOYEE PORTAL (Login Required, Staff Only)
1. ✅ EMPLOYEE DASHBOARD
2. ✅ SCHEDULE (View, Swap Shifts, Request Time Off)
3. ✅ PAYROLL (View Payslip)
4. ✅ BENEFITS (Access Info)
5. ✅ TRAINING & DEVELOPMENT (View Courses, Enroll)
6. ✅ EMPLOYEE DIRECTORY (Find Colleagues)
7. ✅ ANNOUNCEMENTS (Hospital News)
8. ✅ LEAVE MANAGEMENT (Request, Track Balance)
9. ✅ PERFORMANCE REVIEWS
10. ✅ HELP / SUPPORT

### UTILITY PAGES
- ✅ LOGIN
- ✅ REGISTER
- ✅ FORGOT PASSWORD
- ✅ VERIFY OTP
- ✅ EMERGENCY (Modal/Overlay)
- ✅ 404 ERROR PAGE
- ✅ 500 ERROR PAGE
- ✅ PRIVACY POLICY
- ✅ TERMS OF SERVICE

---

## TOTAL SECTION COUNT

**PUBLIC SECTIONS:** 11 pages
**PATIENT PORTAL:** 7 pages + multiple sub-pages
**EMPLOYEE PORTAL:** 10 pages
**UTILITY/ERROR:** 6 pages

**TOTAL: ~34 main pages + unlimited sub-pages**

---

## Frontend Build Order (Priority)

### Phase 1 (Weeks 1-2): Foundation
1. Home page
2. Navigation/Header
3. Footer
4. Login/Register pages
5. 404/500 error pages

### Phase 2 (Weeks 3-4): Public Features
6. Find a Doctor
7. Services
8. Locations
9. About Us
10. Careers

### Phase 3 (Weeks 5-7): Patient Portal
11. Patient Dashboard
12. Appointments (Book, View, Manage)
13. Medical Records
14. Prescriptions
15. Lab Results
16. Billing
17. Settings

### Phase 4 (Weeks 8-9): Employee Portal
18. Employee Dashboard
19. Schedule
20. Announcements
21. Directory

### Phase 5 (Weeks 10-11): Supporting Pages
22. Health Library / Blog
23. News & Updates
24. Promos & Packages
25. Patient Guide
26. Contact Us

### Phase 6 (Weeks 12-14): Polish & Optimization
- Testing
- Performance optimization
- Mobile responsiveness
- Accessibility (WCAG)
- SEO optimization
- Deployment

---

This comprehensive map shows exactly what needs to be built! 🎯
