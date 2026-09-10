'use client';

import Button from '@/components/shared/Button';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-brand-red">Something went wrong</h1>
      <p className="mt-2 text-gray-600">
        Please try again, or contact us if the problem continues.
      </p>
      <div className="mt-6 flex gap-4">
        <Button onClick={() => reset()}>Try Again</Button>
        <Button href="/" variant="secondary">
          Back to Home
        </Button>
      </div>
    </main>
  );
}
