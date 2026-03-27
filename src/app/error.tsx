"use client";

import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
      {/* Icon */}
      <div className="mb-6 flex items-center justify-center rounded-full bg-[#E7E5E4] p-5 shadow-[inset_6px_6px_12px_#c4c2c1,inset_-6px_-6px_12px_#ffffff]">
        <ExclamationCircleIcon
          className="h-12 w-12 text-[#FF2157]"
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <h2 className="mb-4 text-2xl font-bold text-[#1E2938]">
        Something went wrong!
      </h2>

      {/* Message */}
      <p className="mb-8 max-w-md text-[#1E2938]/80">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>

      {/* Retry Button */}
      <button
        onClick={reset}
        className="rounded-xl bg-[#E7E5E4] px-8 py-3 font-bold text-[#006666] shadow-[6px_6px_12px_#c4c2c1,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006666] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E7E5E4]"
      >
        Try Again
      </button>
    </div>
  );
}
