import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'outlineLight';

// 'light' / 'outlineLight' exist for use on a dark background (e.g. a photo hero) — don't
// simulate them by overriding 'primary'/'secondary' colors via className, since Tailwind's
// generated stylesheet order (not className order) decides which same-property class wins.
const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-brand-green text-white hover:bg-brand-green/90',
  secondary: 'border border-brand-green text-brand-green hover:bg-brand-green/10',
  light: 'bg-white text-brand-green hover:bg-white/90',
  outlineLight: 'border border-white text-white hover:bg-white/10',
};

const BASE_CLASSES =
  'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors';

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
} & ComponentPropsWithoutRef<'button'>;

export default function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
