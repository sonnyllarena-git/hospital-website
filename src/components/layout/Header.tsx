'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/locations', label: 'Locations' },
  { href: '/find-a-doctor', label: 'Find a Doctor' },
  { href: '/careers', label: 'Careers' },
  { href: '/health-library', label: 'Health Library' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActiveLink = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-green-dark bg-brand-green">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
          <Image src="/images/logo.png" alt="Tanauan Medical Center" width={40} height={40} />
          Tanauan Medical Center
        </Link>

        <nav className="hidden gap-4 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-block border-b-2 text-sm font-medium transition-transform duration-200 hover:scale-110 hover:text-brand-yellow ${
                isActiveLink(link.href)
                  ? 'border-brand-yellow text-brand-yellow'
                  : 'border-transparent text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="text-white lg:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-4 border-t border-brand-green-dark px-4 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-block w-fit text-sm font-medium transition-transform duration-200 hover:scale-110 hover:text-brand-yellow ${
                isActiveLink(link.href) ? 'text-brand-yellow' : 'text-white/90'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
