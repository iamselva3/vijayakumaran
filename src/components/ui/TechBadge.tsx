import React from 'react';
import { TechIcon } from './TechIcon';

interface TechBadgeProps {
  name: string;
  showIcon?: boolean;
  className?: string;
  glow?: boolean;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  showIcon = true,
  className = '',
  glow = false,
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium font-mono border transition-all duration-200
        bg-slate-100/80 dark:bg-slate-800/60 
        text-slate-800 dark:text-slate-200
        border-slate-200 dark:border-white/10
        hover:border-blue-500/40 dark:hover:border-blue-500/40
        hover:bg-blue-500/5 dark:hover:bg-blue-500/10
        ${glow ? 'shadow-[0_0_12px_rgba(59,130,246,0.2)]' : ''}
        ${className}
      `}
    >
      {showIcon && <TechIcon name={name} size={13} className="shrink-0" />}
      <span>{name}</span>
    </span>
  );
};
