import React from 'react';
import { ArrowUp, Heart, Terminal, Linkedin, Mail, Phone } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#07090F]/80 backdrop-blur-md pt-12 pb-8 z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200 dark:border-white/5">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Senior Technical Operations Engineer specializing in enterprise AWS cloud platforms, Kubernetes orchestration, zero-downtime CI/CD automation, and Zero Trust infrastructure security.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:text-blue-500 dark:hover:text-blue-400 text-slate-600 dark:text-slate-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:text-blue-500 dark:hover:text-blue-400 text-slate-600 dark:text-slate-400 transition-colors"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:text-blue-500 dark:hover:text-blue-400 text-slate-600 dark:text-slate-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <SiGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {['Hero', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((sec) => (
                <li key={sec}>
                  <a
                    href={`#${sec.toLowerCase()}`}
                    className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {sec}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Cloud & Location */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold mb-3">
              Operations Hub
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {profileData.location}
            </p>
            <p className="text-xs font-mono text-slate-500 mt-2">
              Current: {profileData.company}
            </p>
            <p className="text-xs font-mono text-emerald-500 dark:text-emerald-400 mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Production Systems Active
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {currentYear} {profileData.name}. All rights reserved. Built with React 18, Vite & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 hover:border-blue-500/50 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all active:scale-95"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
