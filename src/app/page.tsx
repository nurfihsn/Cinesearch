'use client';

import { useMovieSearch } from '@/hooks/useMovieSearch';
import { SearchBar } from '@/components/search/SearchBar';
import { SearchResults } from '@/components/search/SearchResults';

export default function HomePage() {
  const {
    query,
    movies,
    isLoading,
    error,
    hasSearched,
    hasMore,
    totalResults,
    setQuery,
    loadMore,
  } = useMovieSearch();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">

      {/* Hero Section */}
      <section className="mt-8 mb-12 text-center">

        <h1 className="mb-4 font-mono text-4xl font-bold text-[#1E2938] md:text-5xl">
          Discover <span className="text-[#006666]">Movies</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl font-mono text-lg text-[#1E2938]/80">
          Search through millions of movies. Find ratings, details, and more.
        </p>

        <SearchBar
          value={query}
          onChange={setQuery}
          resultCount={totalResults}
          isLoading={isLoading}
        />

      </section>

      {/* Results Section */}
      <section>

        <SearchResults
          movies={movies}
          isLoading={isLoading}
          error={error}
          hasSearched={true}
          hasMore={hasMore}
          query={query}
          onLoadMore={loadMore}
        />

      </section>
    </div>
  );
}