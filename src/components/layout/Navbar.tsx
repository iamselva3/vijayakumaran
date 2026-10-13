import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Moon,
  Download,
  Menu,
  X,
  Terminal,
  ExternalLink,
  ChevronRight,
  Shield,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../../hooks/useTheme';
import { profileData } from '../../data/profile';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for navbar shrink
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    });

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1, x: 0.8 },
      colors: ['#3B82F6', '#8B5CF6', '#FF9900', '#10B981'],
    });
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 transition-all duration-300 pt-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 rounded-full border
          ${
            isScrolled
              ? 'py-2 px-4 sm:px-5 bg-white/80 dark:bg-[#0E1220]/85 backdrop-blur-xl border-slate-200/80 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
              : 'py-3 px-5 sm:px-6 bg-white/60 dark:bg-[#0E1220]/60 backdrop-blur-md border-slate-200/60 dark:border-white/10 shadow-sm'
          }
        `}
      >
        {/* Brand Logo & Status */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 group text-left"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-blue-500/30 group-hover:border-blue-500 transition-colors bg-slate-900 shrink-0">
            <img
              src="/images/vijay-avatar.png"
              alt={profileData.name}
              className="w-full h-full object-cover object-top"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-slate-900" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>{profileData.name}</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
              AWS / DevOps Engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/50 p-1 rounded-full border border-slate-200/50 dark:border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-sm"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right CTA Actions: Theme Toggle + Resume */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={(e) => toggleTheme(e)}
            aria-label="Toggle theme"
            className="relative p-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 text-blue-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4 text-amber-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Download Resume Link Button */}
          <a
            href="/Vijayakumaran_Resume.pdf"
            download="Vijayakumaran_A_DevOps_Resume.pdf"
            onClick={handleResumeDownload}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium font-mono text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-slate-300"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 md:hidden rounded-2xl bg-white/95 dark:bg-[#0E1220]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
                <a
                  href="/Vijayakumaran_Resume.pdf"
                  download="Vijayakumaran_A_DevOps_Resume.pdf"
                  onClick={handleResumeDownload}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-mono font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
