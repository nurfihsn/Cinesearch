"use client";

import { useState, useEffect } from "react";
import { Movie } from "@/types/movie";

interface UseMovieSearchResult {
  query: string;
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
  hasMore: boolean;
  totalResults: number;
  setQuery: (q: string) => void;
  loadMore: () => void;
}

export function useMovieSearch(): UseMovieSearchResult {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        if (query) params.append("q", query);
        params.append("page", page.toString());

        const res = await fetch(`/api/movies?${params.toString()}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Failed to fetch");

        setMovies((prev) =>
          page === 1 ? data.results : [...prev, ...data.results],
        );
        setTotalResults(data.total_results || data.results.length || 0);
        setHasMore(data.page < data.total_pages);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setIsLoading(false);
        setHasSearched(query.length > 0);
      }
    }

    fetchMovies();
  }, [query, page]);

  const loadMore = () => setPage((prev) => prev + 1);

  return {
    query,
    movies,
    isLoading,
    error,
    hasSearched,
    hasMore,
    totalResults,
    setQuery: (q: string) => {
      setQuery(q);
      setPage(1);
    },
    loadMore,
  };
}
