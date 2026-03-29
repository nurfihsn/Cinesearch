import { NextRequest, NextResponse } from "next/server";
import { searchMovies, getTrendingMovies } from "@/services/tmdbClient";
import { SEARCH_CONFIG } from "@/lib/constants";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const query = searchParams.get("q")?.trim() || "";

    const pageParam = searchParams.get("page") || "1";
    const page = parseInt(pageParam, 10);

    if (isNaN(page) || page < 1 || page > 500) {
      return NextResponse.json(
        { message: "Parameter page harus berupa angka antara 1 dan 500." },
        { status: 400 },
      );
    }

    if (query.length < SEARCH_CONFIG.minQueryLength) {
      const trending = await getTrendingMovies();
      return NextResponse.json(trending);
    }

    const results = await searchMovies(query, page);
    return NextResponse.json(results);

  } catch (error) {
    console.error(`[API] GET /movies error (q="${request.nextUrl.searchParams.get("q")}", page=${request.nextUrl.searchParams.get("page")}):`, error);

    const isError = error instanceof Error;
    const message = isError ? error.message : "Internal server error";
    const status =
      typeof error === "object" && error !== null && "statusCode" in error
        ? Number((error as { statusCode: number }).statusCode)
        : 500;

    return NextResponse.json({ message }, { status });
  }
}