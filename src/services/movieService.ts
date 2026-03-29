import { Movie, MovieDetail, PaginatedResponse } from '@/types/movie';
import { API_ENDPOINTS } from '@/lib/constants';

class ApiClient {
  constructor(private baseUrl: string = '') { }

  async get<T>(url: string, params?: Record<string, string | number>): Promise<T> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, String(value));
        }
      });
    }

    const queryString = searchParams.toString() ? `?${searchParams.toString()}` : '';
    const response = await fetch(`${this.baseUrl}${url}${queryString}`);

    return this.handleResponse<T>(response);
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      let errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;

      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        // Ignore JSON parsing errors and use the default error message
      }

      throw new Error(errorMessage);
    }

    return response.json();
  }
}

class MovieService {
  constructor(private api: ApiClient) { }

  searchMovies(
    query: string,
    page: number = 1
  ): Promise<PaginatedResponse<Movie>> {
    return this.api.get(API_ENDPOINTS.movies, {
      q: query,
      page,
    });
  }

  getMovieById(id: number): Promise<MovieDetail> {
    return this.api.get(API_ENDPOINTS.movieDetail(id));
  }
}


const defaultBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const apiClient = new ApiClient(defaultBaseUrl);
export const movieService = new MovieService(apiClient);