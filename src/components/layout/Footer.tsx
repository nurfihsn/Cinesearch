export function Footer() {
  return (
    <footer className="border-t border-gray-800/50 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="text-sm text-gray-600">
          Powered by{' '}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-400 transition-colors"
          >
            TMDB API
          </a>{' '}
          • Built with Next.js
        </p>
      </div>
    </footer>
  );
}