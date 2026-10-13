import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Lightbulb, TrendingUp, Layers } from 'lucide-react';
import { ProjectItem } from '../../types';
import { TechBadge } from './TechBadge';
import { ArchDiagram } from './ArchDiagram';

interface ProjectModalProps {
  project: ProjectItem | null;
  mode: 'case-study' | 'architecture';
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, mode, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0E1220] border border-white/15 text-slate-100 shadow-2xl z-10 p-6 sm:p-8"
        >
          {/* Top Bar */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                {mode === 'case-study' ? 'ENGINEERING CASE STUDY' : 'SYSTEM ARCHITECTURE'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 mt-1 font-sans">
                {project.tagline}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Architecture Visual if architecture mode or featured */}
          {(mode === 'architecture' || project.featured) && (
            <div className="my-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                Pipeline & Cloud Topology
              </h4>
              <ArchDiagram type={project.architectureType} />
            </div>
          )}

          {/* Case Study Details: Problem -> Approach -> Stack -> Result */}
          <div className="space-y-6 mt-6">
            {/* Problem */}
            <div className="rounded-xl p-4 bg-rose-500/5 border border-rose-500/20">
              <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold mb-2">
                <AlertTriangle className="w-4 h-4" />
                Problem & Challenge
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* Approach */}
            <div className="rounded-xl p-4 bg-blue-500/5 border border-blue-500/20">
              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-2">
                <Lightbulb className="w-4 h-4" />
                Engineering Approach & Architecture
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.caseStudy.approach}
              </p>
            </div>

            {/* Result */}
            <div className="rounded-xl p-4 bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-2">
                <TrendingUp className="w-4 h-4" />
                Quantifiable Result & Impact
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.caseStudy.result}
              </p>
            </div>

            {/* Key Deliverables */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Engineering Deliverables
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Technologies & AWS Services
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium font-mono bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View GitHub Profile
                </a>
              )}
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              Close Overview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
