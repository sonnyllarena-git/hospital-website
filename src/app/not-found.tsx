import Button from '@/components/shared/Button';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-brand-green">404</h1>
      <p className="mt-2 text-gray-600">Sorry, we couldn&apos;t find that page.</p>
      <Button href="/" className="mt-6">
        Back to Home
      </Button>
    </main>
  );
}
