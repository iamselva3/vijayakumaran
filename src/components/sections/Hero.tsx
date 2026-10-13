import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Terminal,
  Shield,
  Linkedin,
  Mail,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import confetti from 'canvas-confetti';
import { profileData } from '../../data/profile';
import { useMousePosition } from '../../hooks/useMousePosition';
import { MagneticButton } from '../ui/MagneticButton';
import { TerminalCard } from '../ui/TerminalCard';
import { TechIcon } from '../ui/TechIcon';
import { SceneFallback } from '../3d/SceneFallback';

// Lazy-load the 3D Canvas
const Hero3DScene = lazy(() => import('../3d/Hero3DScene'));

export const Hero: React.FC = () => {
  const { normalizedX, normalizedY } = useMousePosition();
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);
  }, []);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.2, x: 0.3 },
      colors: ['#3B82F6', '#8B5CF6', '#FF9900', '#10B981'],
    });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth',
      });
    }
  };

  // Tech tiles orbiting/floating around the cutout
  const techTiles = [
    {
      name: 'AWS',
      label: 'AWS Cloud',
      pos: 'top-[4%] left-[6%]',
      depth: 25,
      delay: 0,
      animClass: 'animate-float-slow',
    },
    {
      name: 'Kubernetes',
      label: 'EKS / K8s',
      pos: 'top-[8%] right-[4%]',
      depth: 30,
      delay: 1,
      animClass: 'animate-float-reverse',
    },
    {
      name: 'Terraform',
      label: 'IaC Terraform',
      pos: 'bottom-[34%] -left-[4%]',
      depth: 20,
      delay: 2,
      animClass: 'animate-float-slow',
    },
    {
      name: 'Docker',
      label: 'Docker Multi-stage',
      pos: 'bottom-[28%] -right-[6%]',
      depth: 35,
      delay: 0.5,
      animClass: 'animate-float-reverse',
    },
    {
      name: 'Jenkins',
      label: 'CI/CD Jenkins',
      pos: 'top-[42%] -left-[10%]',
      depth: 18,
      delay: 1.5,
      animClass: 'animate-float-slow',
    },
    {
      name: 'Linux',
      label: 'Linux Kernel',
      pos: 'top-[48%] -right-[8%]',
      depth: 22,
      delay: 2.5,
      animClass: 'animate-float-reverse',
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* 3D Scene Background (lazy-loaded with fallback) */}
      <Suspense fallback={<SceneFallback />}>
        {!isReducedMotion && (
          <Hero3DScene
            normalizedMouseX={normalizedX}
            normalizedMouseY={normalizedY}
          />
        )}
      </Suspense>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.roleBadge}</span>
              <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">•</span>
              <span className="text-amber-500 dark:text-amber-400 font-normal hidden sm:inline">
                AWS Production Specialist
              </span>
            </div>

            {/* Giant Staggered Headline */}
            <h1 className="font-display text-[30px] xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] break-words">
              Automating{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400">
                cloud infrastructure
              </span>{' '}
              & shipping{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-500 to-amber-500 dark:from-violet-400 dark:via-purple-300 dark:to-amber-400">
                reliable deployments
              </span>
              .
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
              {profileData.subtext}
            </p>

            {/* CTAs and Social Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full">
              <MagneticButton
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 border border-white/20 gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <a
                href="/Vijayakumaran_Resume.pdf"
                download="Vijayakumaran_A_DevOps_Resume.pdf"
                onClick={handleResumeDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-medium border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 transition-all duration-200 hover:border-blue-500/40"
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>Download Resume</span>
              </a>

              {/* Social Icon Row */}
              <div className="flex items-center justify-center sm:justify-start gap-2 pt-2 sm:pt-0 sm:pl-3 sm:border-l border-slate-300 dark:border-white/10">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <SiGithub className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats Row */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {profileData.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-baseline">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-xs font-mono text-blue-500 ml-1">
                        {stat.suffix}
                      </span>
                    )}
                  </span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {stat.sublabel}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN (VISUAL CENTERPIECE) ================= */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center w-full max-w-full overflow-hidden">
            {/* Cutout Photo Container with Orbit Rings (100% Unobstructed) */}
            <div className="relative w-full max-w-full flex items-center justify-center min-h-[350px] sm:min-h-[450px] overflow-hidden">
              {/* Concentric Orbit Rings System */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                {/* Outer Ring */}
                <div className="w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full border border-blue-500/15 dark:border-blue-500/20 animate-orbit-slow" />
                {/* Middle Ring with dashed lines */}
                <div className="absolute w-[190px] h-[190px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-violet-500/20 dark:border-violet-500/25 animate-orbit-reverse" />
                {/* Inner Ring */}
                <div className="absolute w-[130px] h-[130px] sm:w-[230px] sm:h-[230px] rounded-full border border-blue-500/20 dark:border-blue-500/30" />
                {/* Radial Center Glow */}
                <div className="absolute w-52 h-52 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-blue-600/20 via-violet-600/15 to-transparent blur-3xl pointer-events-none" />
              </div>

              {/* Floating Glass Tech Tiles around the portrait */}
              {techTiles.map((tile) => {
                // Apply layered parallax tilt to tech tiles
                const tiltX = isReducedMotion ? 0 : normalizedX * tile.depth * 0.35;
                const tiltY = isReducedMotion ? 0 : normalizedY * tile.depth * 0.35;

                return (
                  <div
                    key={tile.name}
                    style={{
                      transform: `translate3d(${tiltX}px, ${tiltY}px, 0)`,
                    }}
                    className={`absolute z-20 transition-transform duration-300 ease-out hidden sm:block ${tile.pos}`}
                  >
                    <div
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-[#0E1220]/90 backdrop-blur-xl shadow-xl text-slate-800 dark:text-slate-200 text-xs font-mono font-medium hover:scale-105 transition-transform ${tile.animClass}`}
                    >
                      <TechIcon name={tile.name} size={15} />
                      <span className="font-semibold">{tile.name}</span>
                    </div>
                  </div>
                );
              })}

              {/* Cutout Photo (100% visible, completely unobstructed) */}
              <motion.div
                style={{
                  transform: isReducedMotion
                    ? 'none'
                    : `perspective(1000px) rotateY(${normalizedX * 8}deg) rotateX(${-normalizedY * 6}deg)`,
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                className="relative z-10 flex flex-col items-center justify-end w-full max-w-[280px] sm:max-w-[340px] h-[340px] sm:h-[430px]"
              >
                {/* Rim Light / Back Glow Behind Photo */}
                <div className="absolute inset-x-6 top-8 bottom-4 rounded-full bg-gradient-to-b from-blue-500/25 via-violet-500/15 to-transparent blur-2xl pointer-events-none" />

                {/* The Photo Cutout - clear view of face, sweater, posture */}
                <div className="relative w-full h-full flex items-end justify-center">
                  <img
                    src="/images/vijay-cutout.png"
                    alt={profileData.name}
                    className="max-h-[340px] sm:max-h-[430px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] select-none pointer-events-none"
                    style={{
                      WebkitMaskImage:
                        'linear-gradient(to bottom, black 88%, transparent 100%)',
                      maskImage:
                        'linear-gradient(to bottom, black 88%, transparent 100%)',
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating Terminal Card positioned cleanly below the photo with NO overlap */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                transform: isReducedMotion
                  ? 'none'
                  : `translate3d(${-normalizedX * 8}px, ${-normalizedY * 6}px, 0)`,
              }}
              className="w-full max-w-[340px] sm:max-w-[400px] mt-4 sm:mt-5 relative z-20 h-[275px] shrink-0"
            >
              <TerminalCard />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
