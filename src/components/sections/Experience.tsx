import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { experienceData } from '../../data/experience';
import { TechBadge } from '../ui/TechBadge';
import { TiltCard } from '../ui/TiltCard';

export const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const currentRole = experienceData[0];

  return (
    <section id="experience" className="relative py-24 scroll-mt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
            <span>PROFESSIONAL TIMELINE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Operational impact &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
              production engineering
            </span>
            .
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl font-sans">
            Demonstrated track record of designing, securing, and maintaining mission-critical cloud infrastructure and automated delivery pipelines.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-8 sm:pl-12">
          {/* Precision Vertical Rail Line (starts exactly at the node center, zero overhang) */}
          <div className="absolute left-3 sm:left-5 top-7 bottom-6 w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-500 via-indigo-500/60 to-transparent" />

          {/* Timeline Node Beacon (mathematically centered on the vertical line) */}
          <div className="absolute left-3 sm:left-5 top-7 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center pointer-events-none">
            {/* Outer radar pulse */}
            <span className="absolute w-7 h-7 rounded-full bg-blue-500/25 animate-ping opacity-75" />
            {/* Halo border */}
            <div className="w-5 h-5 rounded-full border-2 border-blue-500 bg-white dark:bg-[#0E1220] flex items-center justify-center shadow-[0_0_14px_rgba(59,130,246,0.5)]">
              {/* Core beacon dot */}
              <div className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
          </div>

          {/* Sleek horizontal circuit trace connecting the node to the card */}
          <div className="absolute left-3 sm:left-5 top-7 w-5 sm:w-7 h-[2px] bg-gradient-to-r from-blue-500 to-blue-500/40 -translate-y-1/2 pointer-events-none" />

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TiltCard
              maxTilt={4}
              className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-[#0E1220]/85 border border-slate-200/80 dark:border-white/10 backdrop-blur-2xl shadow-xl"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Current Role (5+ Yrs)
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                    {currentRole.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mt-1">
                    <span className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-blue-500" />
                      {currentRole.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-rose-500" />
                      {currentRole.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{currentRole.period}</span>
                  </div>
                </div>
              </div>

              {/* Role Scope Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-5 leading-relaxed font-sans">
                {currentRole.description}
              </p>

              {/* Technologies Tag Array */}
              <div className="flex flex-wrap gap-2 my-5">
                {currentRole.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>

              {/* Achievements Toggle Header */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  Key Production Achievements ({currentRole.highlights.length})
                </h4>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-1 text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>{expanded ? 'Collapse Bullets' : 'Expand All'}</span>
                  {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Expandable Bullet Points */}
              {expanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3.5 mt-4"
                >
                  {currentRole.highlights.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </TiltCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
