export default function Footer() {
  return (
    <footer className="border-t border-brand-green-dark bg-brand-green">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/90">
        <p className="font-semibold text-white">Tanauan Medical Center</p>
        <p className="mt-2">
          #41 A. Mabini Avenue, Barangay Poblacion IV, City of Tanauan, Batangas, 4232
        </p>
        <p className="mt-1">Telephone: (043) 784-5401 to 5406</p>
        <p className="mt-1">Mobile: 0915-931-4618 / 0939-389-9083</p>
        <p className="mt-1">Email: customercare@tanauanmedicalcenter.com</p>
        <a
          href="https://www.facebook.com/tanauanmedicalcenter"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-medium text-white hover:text-brand-yellow"
        >
          Facebook: Tanauan Medical Center
        </a>
        <p className="mt-6 text-xs text-white/70">
          &copy; {new Date().getFullYear()} Tanauan Medical Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
