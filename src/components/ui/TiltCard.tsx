import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  borderGlow?: boolean;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 8,
  glowColor = 'rgba(59, 130, 246, 0.15)',
  borderGlow = true,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = x / rect.width;
    const percentY = y / rect.height;

    const rotX = (percentY - 0.5) * -maxTilt * 2;
    const rotY = (percentX - 0.5) * maxTilt * 2;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlowPos({ x: percentX * 100, y: percentY * 100 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={
        isReducedMotion
          ? {}
          : {
              rotateX,
              rotateY,
            }
      }
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative rounded-2xl transition-shadow duration-300 ${className}`}
    >
      {/* Dynamic Cursor Border Glow */}
      {borderGlow && isHovered && (
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.2), transparent 70%)`,
          }}
        />
      )}

      {/* Surface Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 60%)`,
          }}
        />
      )}

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};
