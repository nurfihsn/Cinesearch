import Link from 'next/link';
import { FilmIcon } from '@heroicons/react/24/solid';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo Icon */}
          <span className="h-8 w-8 text-primary-400">
            <FilmIcon />
          </span>

          {/* App Name */}
          <h1 className="text-xl font-bold gradient-text">CineSearch</h1>
        </Link>
      </div>
    </header>
  );
}