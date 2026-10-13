import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Layers,
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Shield,
  Activity,
  Box,
  Cloud,
} from 'lucide-react';
import { projectsData } from '../../data/projects';
import { ProjectItem } from '../../types';
import { TiltCard } from '../ui/TiltCard';
import { TechBadge } from '../ui/TechBadge';
import { ArchDiagram } from '../ui/ArchDiagram';
import { ProjectModal } from '../ui/ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalMode, setModalMode] = useState<'case-study' | 'architecture'>('case-study');

  const featuredProject = projectsData[0];
  const remainingProjects = projectsData.slice(1);

  const openModal = (project: ProjectItem, mode: 'case-study' | 'architecture') => {
    setSelectedProject(project);
    setModalMode(mode);
  };

  return (
    <section id="projects" className="relative py-24 scroll-mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
            <span>FEATURED WORK & CASE STUDIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Architecture implementations &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
              real-world platforms
            </span>
            .
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl font-sans">
            Every project represents production-grade architecture deployed to solve latency, reliability, security, and continuous deployment at scale.
          </p>
        </motion.div>

        {/* 1. LARGE FEATURED PROJECT CARD */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <TiltCard
              maxTilt={4}
              className="p-6 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#0E1220]/90 border border-blue-500/20 dark:border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                
                {/* Left side: Project Info & CTAs */}
                <div className="lg:w-1/2 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20">
                        <Sparkles className="w-3.5 h-3.5" />
                        FLAGSHIP ARCHITECTURE
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        10+ Apps Supported
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                      {featuredProject.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1 font-mono">
                      {featuredProject.tagline}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-sans">
                      {featuredProject.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-5 space-y-2">
                      {featuredProject.highlights.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {featuredProject.stack.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-200 dark:border-white/10">
                    <button
                      onClick={() => openModal(featuredProject, 'case-study')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-md shadow-blue-500/20 transition-all active:scale-95"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Read Case Study</span>
                    </button>

                    <button
                      onClick={() => openModal(featuredProject, 'architecture')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 transition-colors"
                    >
                      <Layers className="w-4 h-4 text-blue-500" />
                      <span>Architecture Details</span>
                    </button>

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right side: Live Sequential Animated Architecture Diagram */}
                <div className="lg:w-1/2 w-full flex flex-col justify-center">
                  <ArchDiagram type={featuredProject.architectureType} />
                </div>

              </div>
            </TiltCard>
          </motion.div>
        )}

        {/* 2. REMAINING PROJECTS (2-COLUMN GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {remainingProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard
                maxTilt={6}
                className="p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-[#0E1220]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-lg flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      0{idx + 2}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mt-1">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 space-y-1.5">
                    {project.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.stack.slice(0, 5).map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-3 pt-5 mt-6 border-t border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openModal(project, 'case-study')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-blue-50 dark:bg-white/5 hover:bg-blue-100 dark:hover:bg-white/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-white/10 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </button>

                    <button
                      onClick={() => openModal(project, 'architecture')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5 text-blue-500" />
                      <span>Architecture</span>
                    </button>
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study / Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        mode={modalMode}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
