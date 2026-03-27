// TMDB Image
export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const POSTER_SIZES = {
  small: "w185",
  medium: "w342",
  large: "w500",
  original: "original",
} as const;

export const BACKDROP_SIZES = {
  small: "w300",
  medium: "w780",
  large: "w1280",
  original: "original",
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  movies: "/api/movies",
  movieDetail: (id: number) => `/api/movies/${id}`,
} as const;

// Search Configuration
export const SEARCH_CONFIG = {
  debounceMs: 500,
  minQueryLength: 2,
  resultsPerPage: 20,
} as const;

// TMDB Genre
export const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  53: "Thriller",
  10752: "War",
  37: "Western",
} as const;

export type GenreId = keyof typeof GENRE_MAP;
export type GenreName = (typeof GENRE_MAP)[GenreId];
