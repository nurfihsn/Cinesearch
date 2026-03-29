import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

const sizeStyles = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
} as const;

export function StarRating({
  rating,
  maxStars = 5,
  size = 'md',
  showValue = true,
}: StarRatingProps) {
  const normalized = (rating / 10) * maxStars;
  const fullStars = Math.floor(normalized);
  const hasHalfStar = normalized - fullStars >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  const ratingColor =
    rating >= 7 ? 'text-[#00A63D]' :
      rating >= 5 ? 'text-[#FE9900]' :
        'text-[#FF2157]';

  const renderStars = () => (
    <>
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="text-[#FE9900] drop-shadow-sm">★</span>
      ))}
      {hasHalfStar && <span className="text-[#FE9900] drop-shadow-sm">★</span>}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className="text-[#1E2938]/20">★</span>
      ))}
    </>
  );

  return (
    <div className={cn('flex items-center gap-2', sizeStyles[size])}>
      <div className="flex gap-0.5">{renderStars()}</div>
      {showValue && <span className={cn('font-mono font-black', ratingColor)}>{rating.toFixed(1)}</span>}
    </div>
  );
}