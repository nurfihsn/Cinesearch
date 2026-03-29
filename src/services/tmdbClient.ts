import { TMDBMovieRaw, TMDBMovieDetailRaw, TMDBSearchResponse, Movie, MovieDetail, PaginatedResponse } from '@/types/movie';
import { ApiError, NotFoundError } from '@/lib/exceptions';

const TMDB_API_KEY = process.env.TMDB_API_KEY || '';
const TMDB_BASE_URL = process.env.TMDB_BASE_URL || '';

class TMDBClient {
  constructor(
    private baseUrl: string,
    private apiKey: string
  ) {
    if (!this.apiKey) {
      console.warn('⚠️ TMDB_API_KEY is not set in environment variables');
    }
  }

  async get<T>(
    endpoint: string,
    params: Record<string, string> = {}
  ): Promise<T> {
    
    const url = new URL(`${this.baseUrl}${endpoint}`);

    url.searchParams.set('api_key', this.apiKey);

    Object.entries(params).forEach(([key, value]) => {
      if (value) url.searchParams.set(key, value);
    });

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    return this.handleResponse<T>(response);
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      if (response.status === 404) {
        throw new NotFoundError('Movie');
      }

      throw new ApiError(
        `TMDB API error: ${response.statusText}`,
        response.status
      );
    }

    return response.json();
  }
}

const tmdbClient = new TMDBClient(TMDB_BASE_URL, TMDB_API_KEY);

function mapSharedMovieData(raw: TMDBMovieRaw | TMDBMovieDetailRaw) {
  return {
    id: raw.id,
    title: raw.title,
    overview: raw.overview,
    posterPath: raw.poster_path,
    backdropPath: raw.backdrop_path,
    releaseDate: raw.release_date,
    voteAverage: raw.vote_average,
    voteCount: raw.vote_count,
    popularity: raw.popularity,
    originalLanguage: raw.original_language,
  };
}

function transformMovie(raw: TMDBMovieRaw): Movie {
  return {
    ...mapSharedMovieData(raw),
    genreIds: raw.genre_ids || [],
  };
}

function transformMovieDetail(raw: TMDBMovieDetailRaw): MovieDetail {
  return {
    ...mapSharedMovieData(raw),
    genreIds: raw.genres?.map((g) => g.id) || [],
    genres: raw.genres || [],
    runtime: raw.runtime,
    tagline: raw.tagline,
    status: raw.status,
    budget: raw.budget,
    revenue: raw.revenue,
    productionCompanies: raw.production_companies?.map((pc) => ({
      id: pc.id,
      name: pc.name,
      logoPath: pc.logo_path,
    })) || [],
  };
}

function mapPaginatedResponse<TInput, TOutput>(
  data: {
    results: TInput[];
    page: number;
    total_pages: number;
    total_results: number;
  },
  transformer: (item: TInput) => TOutput
): PaginatedResponse<TOutput> {
  return {
    results: data.results.map(transformer),
    page: data.page,
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };
}

export async function searchMovies(
  query: string,
  page: number = 1
): Promise<PaginatedResponse<Movie>> {
  const data = await tmdbClient.get<TMDBSearchResponse>(
    '/search/movie',
    {
      query,
      page: String(page),
      include_adult: 'false',
      language: 'en-US',
    }
  );

  return mapPaginatedResponse(data, transformMovie);
}

export async function getMovieById(
  id: number
): Promise<MovieDetail> {
  const data = await tmdbClient.get<TMDBMovieDetailRaw>(
    `/movie/${id}`,
    { language: 'en-US' }
  );

  return transformMovieDetail(data);
}

export async function getTrendingMovies(): Promise<PaginatedResponse<Movie>> {
  const data = await tmdbClient.get<TMDBSearchResponse>(
    '/trending/movie/week'
  );

  return mapPaginatedResponse(data, transformMovie);
}