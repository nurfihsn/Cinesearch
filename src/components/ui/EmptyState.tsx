import { ReactNode } from 'react';

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center rounded-3xl bg-[#E7E5E4] p-12 text-center shadow-[inset_6px_6px_12px_#c4c2c1,inset_-6px_-6px_12px_#ffffff] animate-fade-in">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#E7E5E4] shadow-[6px_6px_12px_#c4c2c1,-6px_-6px_12px_#ffffff]">
        {icon}
      </div>
      <h3 className="mb-3 font-mono text-2xl font-black text-[#1E2938]">{title}</h3>
      <p className="font-mono font-medium text-[#1E2938]/70 leading-relaxed">{description}</p>
    </div>
  );
}