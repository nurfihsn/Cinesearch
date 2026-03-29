import Image from 'next/image';
import Link from 'next/link';
import { MovieDetail as MovieDetailType } from '@/types/movie';
import { StarRating } from '@/components/ui/StarRating';
import { getPosterUrl, getBackdropUrl, getYear, formatRuntime, formatCurrency } from '@/lib/utils';
import { FilmIcon } from '@heroicons/react/24/solid';

interface MovieDetailProps {
  movie: MovieDetailType;
}

export function MovieDetail({ movie }: MovieDetailProps) {
  const posterUrl = getPosterUrl(movie.posterPath, 'large');
  const backdropUrl = getBackdropUrl(movie.backdropPath, 'large');
  const metaLabel = 'mb-1 font-mono text-sm font-bold text-[#1E2938]/60 uppercase tracking-wider';
  const metaValue = 'font-mono text-base font-medium text-[#1E2938]';
  const sectionSpacing = 'mb-6';

  return (
    <div className="animate-fade-in pb-20">

      {/* Backdrop Section */}
      <div className="relative h-[40vh] overflow-hidden md:h-[50vh]">
        {backdropUrl ? (
          <Image
            src={backdropUrl}
            alt={`${movie.title} backdrop`}
            fill
            className="object-cover opacity-60 mix-blend-multiply"
            sizes="100vw"
            priority
          />
        ) : (
          <div className="h-full w-full bg-[#E7E5E4]" />
        )}

        {/* Gradient fade to Surface */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E7E5E4] via-[#E7E5E4]/40 to-transparent" />

        {/* Back Button */}
        <Link
          href="/"
          className="absolute left-6 top-8 z-10 flex items-center gap-2 rounded-xl bg-[#E7E5E4] px-5 py-2.5 font-mono text-sm font-bold text-[#1E2938] shadow-[6px_6px_12px_#c4c2c1,-6px_-6px_12px_#ffffff] transition-all hover:text-[#006666] hover:shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006666] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E7E5E4]"
        >
          ← Back to Search
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto -mt-32 max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row">

          {/* Poster */}
          <div className="flex-shrink-0">
            <div className="relative aspect-[2/3] w-48 overflow-hidden rounded-2xl bg-[#E7E5E4] p-2 shadow-[8px_8px_16px_#c4c2c1,-8px_-8px_16px_#ffffff] md:w-64">
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff]">
                {posterUrl ? (
                  <Image
                    src={posterUrl}
                    alt={`${movie.title} poster`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#E7E5E4]">
                    <FilmIcon className="h-20 w-20 text-[#1E2938]/30" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 pt-4 md:pt-32">

            {/* Title */}
            <h1 className="mb-2 font-mono text-3xl font-black text-[#1E2938] md:text-5xl">{movie.title}</h1>
            {movie.tagline && (
              <p className="mb-6 font-mono text-lg italic text-[#006666]">&ldquo;{movie.tagline}&rdquo;</p>
            )}

            {/* Meta Info */}
            <div className={`flex flex-wrap items-center gap-4 rounded-2xl bg-[#E7E5E4] p-4 shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff] ${sectionSpacing}`}>
              <StarRating rating={movie.voteAverage} size="lg" />
              <span className="text-[#1E2938]/30">|</span>
              <span className="font-mono font-bold text-[#1E2938]">{getYear(movie.releaseDate)}</span>
              <span className="text-[#1E2938]/30">|</span>
              <span className="font-mono font-bold text-[#1E2938]">{formatRuntime(movie.runtime)}</span>
              <span className="text-[#1E2938]/30">|</span>
              <span className="font-mono font-bold text-[#1E2938]">{movie.voteCount.toLocaleString()} votes</span>
            </div>

            {/* Genres */}
            <div className={`flex flex-wrap gap-3 ${sectionSpacing}`}>
              {movie.genres.map((genre) => (
                <span key={genre.id} className="rounded-lg bg-[#E7E5E4] px-4 py-2 font-mono text-sm font-bold text-[#006666] shadow-[4px_4px_8px_#c4c2c1,-4px_-4px_8px_#ffffff]">
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div className="mb-10 rounded-2xl bg-[#E7E5E4] p-6 shadow-[6px_6px_12px_#c4c2c1,-6px_-6px_12px_#ffffff]">
              <h2 className="mb-4 font-mono text-xl font-bold text-[#1E2938]">Overview</h2>
              <p className="max-w-3xl font-mono leading-relaxed text-[#1E2938]/80">
                {movie.overview || 'No overview available.'}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 rounded-2xl bg-[#E7E5E4] p-6 shadow-[inset_6px_6px_12px_#c4c2c1,inset_-6px_-6px_12px_#ffffff] md:grid-cols-3">
              <div>
                <p className={metaLabel}>Status</p>
                <p className={metaValue}>{movie.status}</p>
              </div>

              <div>
                <p className={metaLabel}>Budget</p>
                <p className={metaValue}>{formatCurrency(movie.budget)}</p>
              </div>

              <div>
                <p className={metaLabel}>Revenue</p>
                <p className={metaValue}>{formatCurrency(movie.revenue)}</p>
              </div>

              <div>
                <p className={metaLabel}>Language</p>
                <p className={metaValue}>{movie.originalLanguage.toUpperCase()}</p>
              </div>

              {movie.productionCompanies.length > 0 && (
                <div className="col-span-2 md:col-span-3">
                  <p className={metaLabel}>Production</p>
                  <p className={metaValue}>
                    {movie.productionCompanies.map((pc) => pc.name).join(', ')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}