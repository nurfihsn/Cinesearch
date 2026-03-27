// import { MovieCardSkeleton } from '@/components/movie/MovieCardSkeleton';

const SKELETON_COUNT = 10;

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">

      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        <div className="h-12 w-64 mx-auto bg-gray-800 rounded-lg animate-pulse" />
        <div className="h-6 w-96 mx-auto bg-gray-800 rounded-lg animate-pulse" />
        <div className="h-14 w-full max-w-2xl mx-auto bg-gray-800 rounded-2xl animate-pulse" />
      </div>

      {/* Grid of Movie */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div> */}
    </div>
  );
}