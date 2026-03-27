import Link from "next/link";
import { FilmIcon } from "@heroicons/react/24/solid";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#E7E5E4] shadow-[6px_6px_12px_#c4c2c1,-6px_-6px_12px_#ffffff]">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <Link
          href="/"
          className="flex w-fit items-center gap-3 rounded-xl p-2 text-[#1E2938] transition-all duration-300 hover:text-[#006666] hover:shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006666] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E7E5E4]"
        >
          {/* Logo Icon */}
          <span className="h-8 w-8 text-[#006666]">
            <FilmIcon aria-hidden="true" />
          </span>

          {/* App Name */}
          <h1 className="font-mono text-xl font-bold tracking-tight">
            CineSearch
          </h1>
        </Link>
      </div>
    </header>
  );
}
