import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";
import {
  getPosterUrl,
  getYear,
  getGenreNames,
  formatVoteAverage,
} from "@/lib/utils";

function getRatingColor(vote: number): string {
  if (vote >= 7) return "text-[#00A63D]";
  if (vote >= 5) return "text-[#FE9900]";
  return "text-[#FF2157]";
}

function Poster({ src, title }: { src: string | null; title: string }) {
  if (!src) {
    return (
      <div className="flex h-full items-center justify-center bg-[#E7E5E4] shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff]">
        <span className="text-5xl opacity-50">🎬</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${title} poster`}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
      className="object-cover"
      loading="eager"
    />
  );
}

function RatingBadge({ vote }: { vote: number }) {
  if (vote <= 0) return null;

  return (
    <div className="absolute right-3 top-3">
      <div
        className={`rounded-full bg-[#E7E5E4] px-3 py-1 font-mono text-sm font-bold shadow-[4px_4px_8px_#c4c2c1,-4px_-4px_8px_#ffffff] ${getRatingColor(vote)}`}
      >
        ★ {formatVoteAverage(vote)}
      </div>
    </div>
  );
}

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = getPosterUrl(movie.posterPath, "medium");
  const year = getYear(movie.releaseDate);
  const genres = getGenreNames(movie.genreIds).slice(0, 2);

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group block animate-slide-up rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006666] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E7E5E4]"
    >
      <div className="h-full overflow-hidden rounded-2xl bg-[#E7E5E4] shadow-[6px_6px_12px_#c4c2c1,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff]">
        <div className="relative aspect-[2/3] overflow-hidden p-2">
          <div className="relative h-full w-full overflow-hidden rounded-xl shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff]">
            <Poster src={posterUrl} title={movie.title} />
          </div>
          <RatingBadge vote={movie.voteAverage} />
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="line-clamp-1 font-mono font-bold text-[#1E2938] transition-colors group-hover:text-[#006666]">
            {movie.title}
          </h3>
          <p className="mt-1 font-mono text-sm text-[#1E2938]/70">{year}</p>

          {genres.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-md bg-[#E7E5E4] px-2 py-1 font-mono text-xs font-semibold text-[#1E2938] shadow-[2px_2px_5px_#c4c2c1,-2px_-2px_5px_#ffffff]"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
