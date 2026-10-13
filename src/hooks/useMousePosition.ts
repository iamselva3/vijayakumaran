import { useEffect, useState } from 'react';

export interface MousePosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
          normalizedX: (e.clientX / width) * 2 - 1,
          normalizedY: (e.clientY / height) * 2 - 1,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return mousePosition;
}
