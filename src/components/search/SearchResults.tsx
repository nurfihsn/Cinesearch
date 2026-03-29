"use client";

import { Movie } from "@/types/movie";
import { MovieGrid } from "@/components/movie/MovieGrid";
import { MovieCardSkeleton } from "@/components/movie/MovieCardSkeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  FireIcon,
  ExclamationTriangleIcon,
  FilmIcon,
} from "@heroicons/react/24/solid";

interface SearchResultsProps {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
  hasMore: boolean;
  query: string;
  onLoadMore: () => void;
}

export function SearchResults({
  movies,
  isLoading,
  error,
  hasSearched,
  hasMore,
  query,
  onLoadMore,
}: SearchResultsProps) {
  if (error) {
    return (
      <EmptyState
        icon={<ExclamationTriangleIcon className="h-16 w-16 text-[#FF2157]" />}
        title="System Error"
        description={error}
      />
    );
  }

  if (isLoading && movies.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (hasSearched && movies.length === 0 && query.length >= 2) {
    return (
      <EmptyState
        icon={<MagnifyingGlassIcon className="h-16 w-16 text-[#1E2938]/40" />}
        title="No Match Found"
        description={`We couldn't find any data matching "${query}". Adjust your query parameters.`}
      />
    );
  }

  if (movies.length > 0) {
    const showTrendingTitle = !query || query.length < 2;

    return (
      <div>
        {showTrendingTitle && (
          <h2 className="mb-6 flex items-center gap-3 font-mono text-xl font-bold text-[#1E2938]">
            <span className="rounded-full bg-[#E7E5E4] p-2 shadow-[inset_2px_2px_4px_#c4c2c1,inset_-2px_-2px_4px_#ffffff]">
              <FireIcon className="h-5 w-5 text-[#FF2157]" />
            </span>
            Trending This Week
          </h2>
        )}

        <MovieGrid movies={movies} isLoading={isLoading} skeletonCount={5} />

        {hasMore && !isLoading && (
          <div className="mt-12 text-center">
            <button
              onClick={onLoadMore}
              className="rounded-xl bg-[#E7E5E4] px-8 py-4 font-mono font-bold text-[#1E2938] shadow-[6px_6px_12px_#c4c2c1,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:text-[#006666] hover:shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006666] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E7E5E4]"
            >
              Load More Data
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <EmptyState
      icon={<FilmIcon className="h-16 w-16 text-[#006666]" />}
      title="Initiate Search"
      description="Enter a query above to access the movie database."
    />
  );
}
