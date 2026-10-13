import React from 'react';

export const SceneFallback: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
      <div className="relative w-80 h-80 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '30s' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_#3B82F6]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_#8B5CF6]" />
      </div>
      <div className="absolute w-60 h-60 rounded-full border border-purple-500/15 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#06B6D4]" />
      </div>
    </div>
  );
};
