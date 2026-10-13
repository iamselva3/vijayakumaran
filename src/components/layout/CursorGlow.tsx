import React, { useEffect, useState } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

export const CursorGlow: React.FC = () => {
  const { x, y } = useMousePosition();
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    setIsPointerFine(pointerQuery.matches);
    setIsReducedMotion(motionQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);

    pointerQuery.addEventListener('change', handlePointerChange);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      pointerQuery.removeEventListener('change', handlePointerChange);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  if (!isPointerFine || isReducedMotion || (x === 0 && y === 0)) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed z-30 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      {/* Outer subtle glow circle */}
      <div className="w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,rgba(139,92,246,0.04)_40%,transparent_70%)] blur-2xl" />
      {/* Inner pinpoint light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400/20 blur-sm" />
    </div>
  );
};
