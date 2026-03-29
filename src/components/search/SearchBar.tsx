"use client";

import { Input } from "@/components/ui/Input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultCount?: number;
  isLoading?: boolean;
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function SearchBar({
  value,
  onChange,
  resultCount,
  isLoading = false,
}: SearchBarProps) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <Input
        type="text"
        placeholder="Search for movies..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        icon={<SearchIcon />}
        aria-label="Search movies"
        autoFocus
      />

      {/* Search meta info */}
      <div className="mt-4 h-6 text-center font-mono text-sm text-[#1E2938]/60 font-bold tracking-wide uppercase">
        {isLoading ? (
          <span className="animate-pulse">Searching the matrix...</span>
        ) : (
          resultCount !== undefined &&
          resultCount > 0 && (
            <span className="animate-fade-in">
              Found{" "}
              <span className="text-[#006666] font-black">
                {resultCount.toLocaleString()}
              </span>{" "}
              movies
            </span>
          )
        )}
      </div>
    </div>
  );
}
