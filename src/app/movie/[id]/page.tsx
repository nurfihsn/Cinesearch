import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMovieById } from "@/services/tmdbClient";
import { MovieDetail } from "@/components/movie/MovieDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const movieId = parseInt(id, 10);
  if (isNaN(movieId)) return { title: "Movie Not Found" };

  try {
    const movie = await getMovieById(movieId);
    return {
      title: movie.title,
      description: movie.overview || "Movie details",
    };
  } catch {
    return { title: "Movie Not Found" };
  }
}

// Movie Detail
export default async function MovieDetailPage({ params }: PageProps) {
  const { id } = await params;
  const movieId = parseInt(id, 10);
  if (isNaN(movieId)) notFound();

  try {
    const movie = await getMovieById(movieId);
    return (
      <div className="pb-20">
        <MovieDetail movie={movie} />
      </div>
    );
  } catch {
    notFound();
  }
}
