export function MovieCardSkeleton() {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#E7E5E4] p-2 shadow-[6px_6px_12px_#c4c2c1,-6px_-6px_12px_#ffffff]">
            
            {/* Poster */}
            <div className="aspect-[2/3] w-full animate-pulse rounded-xl shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff]" />

            {/* Movie Info */}
            <div className="flex flex-col gap-3 p-4">

                {/* Title */}
                <div className="h-5 w-3/4 animate-pulse rounded-md shadow-[inset_2px_2px_4px_#c4c2c1,inset_-2px_-2px_4px_#ffffff]" />

                {/* Subtitle / Year */}
                <div className="h-4 w-1/4 animate-pulse rounded-md shadow-[inset_2px_2px_4px_#c4c2c1,inset_-2px_-2px_4px_#ffffff]" />

                {/* Genres */}
                <div className="mt-2 flex gap-2">
                    <div className="h-6 w-16 animate-pulse rounded-md shadow-[inset_2px_2px_4px_#c4c2c1,inset_-2px_-2px_4px_#ffffff]" />
                    <div className="h-6 w-14 animate-pulse rounded-md shadow-[inset_2px_2px_4px_#c4c2c1,inset_-2px_-2px_4px_#ffffff]" />
                </div>
            </div>
        </div>
    );
}
