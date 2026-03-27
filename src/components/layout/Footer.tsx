export function Footer() {
  return (
    <footer className="mt-20 bg-[#E7E5E4] shadow-[inset_0px_4px_8px_-4px_#c4c2c1]">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="font-mono text-sm text-[#1E2938]">
          Powered by{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded px-2 py-1 font-bold text-[#006666] transition-all duration-300 hover:shadow-[inset_2px_2px_5px_#c4c2c1,inset_-2px_-2px_5px_#ffffff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006666] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E7E5E4]"
          >
            TMDB API
          </a>{" "}
          • Built with Next.js
        </p>
      </div>
    </footer>
  );
}
