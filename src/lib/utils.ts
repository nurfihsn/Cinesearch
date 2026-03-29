import {
  TMDB_IMAGE_BASE_URL,
  POSTER_SIZES,
  BACKDROP_SIZES,
  GENRE_MAP,
} from "./constants";

function withFallback<T>(
  value: T | null | undefined,
  fallback: string = "N/A",
): T | string {
  return value ?? fallback;
}

function buildImageUrl(path: string | null, size: string): string | null {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}

export function getPosterUrl(
  path: string | null,
  size: keyof typeof POSTER_SIZES = "medium",
): string | null {
  return buildImageUrl(path, POSTER_SIZES[size]);
}

export function getBackdropUrl(
  path: string | null,
  size: keyof typeof BACKDROP_SIZES = "large",
): string | null {
  return buildImageUrl(path, BACKDROP_SIZES[size]);
}

export function formatVoteAverage(rating: number): string {
  return rating.toFixed(1);
}

export function getYear(dateString: string | null | undefined): string {
  if (!dateString) return "TBA";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "TBA";

  return date.getFullYear().toString();
}

export function formatCurrency(amount: number | null): string {
  if (!amount) return "N/A";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatRuntime(minutes: number | null): string {
  if (!minutes || minutes <= 0) return "N/A";

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours === 0) return `${mins}m`;

  return `${hours}h ${mins}m`;
}

export function getGenreNames(genreIds: number[]): string[] {
  return genreIds
    .map((id) => GENRE_MAP[id as keyof typeof GENRE_MAP])
    .filter((name) => Boolean(name)) as string[];
}

export function cn(
  ...classes: Array<string | boolean | undefined | null>
): string {
  return classes.filter(Boolean).join(" ");
}
