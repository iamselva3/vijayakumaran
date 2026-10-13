import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud,
  Box,
  GitBranch,
  FileCode,
  Activity,
  ShieldCheck,
  Database,
  Terminal,
  Search,
  Check,
  Sparkles,
} from 'lucide-react';
import { skillCategories, marqueeTechLogos } from '../../data/skills';
import { TechBadge } from '../ui/TechBadge';
import { TechIcon } from '../ui/TechIcon';
import { TiltCard } from '../ui/TiltCard';

const categoryIcons: Record<string, React.ElementType> = {
  cloud: Cloud,
  containers: Box,
  cicd: GitBranch,
  iac: FileCode,
  observability: Activity,
  security: ShieldCheck,
  databases: Database,
  systems: Terminal,
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter skills based on category and search
  const filteredCategories = skillCategories
    .map((cat) => {
      if (activeCategory !== 'all' && cat.id !== activeCategory) {
        return null;
      }
      if (!searchQuery.trim()) {
        return cat;
      }
      const matchingSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matchingSkills.length === 0) return null;
      return {
        ...cat,
        skills: matchingSkills,
      };
    })
    .filter(Boolean) as typeof skillCategories;

  return (
    <section id="skills" className="relative py-24 scroll-mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
            <span>CORE EXPERTISE & TOOLING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Battle-tested technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
              infrastructure stack
            </span>
            .
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl font-sans">
            Specialized in end-to-end cloud infrastructure automation, Kubernetes orchestration, zero-downtime pipelines, and observability telemetry.
          </p>
        </motion.div>

        {/* Category Filter Tabs & Instant Search Input */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200 dark:border-white/10">
          {/* Category Tabs - Clean Wrap with No Horizontal Slider */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-white/5'
              }`}
            >
              All Tooling ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-white/5'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. EKS, RDS)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
            />
          </div>
        </div>

        {/* Bento Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const IconComponent = categoryIcons[category.id] || Cloud;

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TiltCard
                    maxTilt={5}
                    className="p-6 rounded-2xl bg-white/70 dark:bg-[#0E1220]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-lg flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                            {category.name}
                          </h3>
                          <span className="text-xs font-mono text-slate-500">
                            {category.skills.length} competencies
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 font-sans">
                        {category.description}
                      </p>

                      {/* Skills Badges */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {category.skills.map((skill) => (
                          <TechBadge
                            key={skill.name}
                            name={skill.name}
                            glow={skill.popular}
                          />
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Infinite Marquee of Tech Logos */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-white/10">
          <div className="flex items-center justify-center gap-2 mb-6 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>PRIMARY ECOSYSTEM LOGOS</span>
          </div>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex gap-8 w-max animate-marquee">
              {[...marqueeTechLogos, ...marqueeTechLogos].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-[#0E1220]/60 backdrop-blur-md shadow-sm shrink-0 hover:scale-105 transition-transform"
                >
                  <TechIcon name={tech.name} size={18} />
                  <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
