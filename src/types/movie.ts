interface BaseMovieFields {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
  originalLanguage: string;
}

interface BaseMovieMedia {
  posterPath: string | null;
  backdropPath: string | null;
}

export interface Movie extends BaseMovieFields, BaseMovieMedia {
  genreIds: number[];
}

export interface MovieDetail extends Movie {
  genres: Genre[];
  runtime: number | null;
  tagline: string | null;
  status: string;
  budget: number;
  revenue: number;
  productionCompanies: ProductionCompany[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logoPath: string | null;
}

export interface PaginatedResponse<T> {
  results: T[];
  page: number;
  totalPages: number;
  totalResults: number;
}

export interface MovieSearchParams {
  query: string;
  page?: number;
}

interface TMDBBaseMovieFields {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
  original_language: string;
}

interface TMDBBaseMovieMedia {
  poster_path: string | null;
  backdrop_path: string | null;
}

export interface TMDBMovieRaw extends TMDBBaseMovieFields, TMDBBaseMovieMedia {
  genre_ids: number[];
}

export interface TMDBMovieDetailRaw extends TMDBMovieRaw {
  genres: Genre[];
  runtime: number | null;
  tagline: string | null;
  status: string;
  budget: number;
  revenue: number;
  production_companies: TMDBProductionCompanyRaw[];
}

interface TMDBProductionCompanyRaw {
  id: number;
  name: string;
  logo_path: string | null;
}

export interface TMDBSearchResponse {
  results: TMDBMovieRaw[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface SearchState {
  query: string;
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
  totalResults: number;
  hasSearched: boolean;
}
