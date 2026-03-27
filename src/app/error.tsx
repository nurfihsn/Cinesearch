'use client';

import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 text-center">
      {/* Icon */}
      <div className="mb-6 flex justify-center">
        <ExclamationCircleIcon className="h-16 w-16 text-red-500" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-200 mb-4">
        Something went wrong!
      </h2>

      {/* Message */}
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>

      {/* Retry Button */}
      <button
        onClick={reset}
        className="rounded-2xl bg-primary-600 px-6 py-3 text-white font-medium hover:bg-primary-700 transition-colors">
        Try Again
      </button>
    </div>
  );
}