/**
 * GET /api/movies/:id
 * Fetch detail film berdasarkan ID
 */

import { NextRequest, NextResponse } from "next/server";
import { getMovieById } from "@/services/tmdbClient";

interface RouteContext {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> } 
) {
  let id: string = "unknown";
  try {
    id = (await params).id;
    const movieId = parseInt(id, 10);

    // Validasi ID
    if (isNaN(movieId) || movieId < 1) {
      return NextResponse.json(
        { error: "Bad Request", message: "Format ID film tidak valid." },
        { status: 400 },
      );
    }

    const movie = await getMovieById(movieId);

    // Return 404 film tidak ditemukan
    if (!movie) {
      return NextResponse.json(
        {
          error: "Not Found",
          message: `Film dengan ID ${movieId} tidak ditemukan.`,
        },
        { status: 404 },
      );
    }

    return NextResponse.json({ data: movie }, { status: 200 });
  } catch (error) {
    console.error(`[API] GET /movies/${id} error:`, error);

    const isError = error instanceof Error;
    const message = isError ? error.message : "Terjadi kesalahan pada server.";
    const status =
      typeof error === "object" && error !== null && "statusCode" in error
        ? Number((error as { statusCode: number }).statusCode)
        : 500;

    return NextResponse.json(
      { error: "Internal Server Error", message },
      { status },
    );
  }
}
