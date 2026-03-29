import { Movie } from "@/types/movie";
import { MovieCard } from "./MovieCard";
import { MovieCardSkeleton } from "./MovieCardSkeleton";

interface MovieGridProps {
  movies: Movie[];
  isLoading?: boolean;
  skeletonCount?: number;
}

export function MovieGrid({
  movies = [],
  isLoading = false,
  skeletonCount = 10,
}: MovieGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
      {movies.map((movie, index) => (
        <MovieCard key={movie.id ?? index} movie={movie} />
      ))}

      {isLoading &&
        Array.from({ length: skeletonCount }).map((_, i) => (
          <MovieCardSkeleton key={`skeleton-${i}`} />
        ))}
    </div>
  );
}
