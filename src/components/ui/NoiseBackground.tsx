import React from 'react';

export const NoiseBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Engineering Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Primary Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-600/15 via-violet-600/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] -left-[10%] w-[600px] h-[600px] bg-indigo-600/10 dark:bg-indigo-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute top-[65%] -right-[10%] w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-amber-500/5 dark:bg-amber-500/5 blur-[150px] pointer-events-none" />
    </div>
  );
};
