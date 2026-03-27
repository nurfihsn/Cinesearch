// import { MovieCardSkeleton } from "@/components/movie/MovieCardSkeleton";

const SKELETON_COUNT = 10;

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <div className="mb-12 space-y-6 text-center">
        <div className="mx-auto h-12 w-64 animate-pulse rounded-xl bg-[#E7E5E4] shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff]" />
        <div className="mx-auto h-6 w-96 animate-pulse rounded-lg bg-[#E7E5E4] shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff]" />
        <div className="mx-auto h-14 w-full max-w-2xl animate-pulse rounded-2xl bg-[#E7E5E4] shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff]" />
      </div>

      {/* Grid of Movie */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <div
            key={index}
            className="aspect-[2/3] w-full animate-pulse rounded-xl bg-[#E7E5E4] shadow-[6px_6px_12px_#c4c2c1,-6px_-6px_12px_#ffffff]"
          />
        ))}
      </div>
    </div>
  );
}
