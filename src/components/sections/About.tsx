import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Calendar,
  Cloud,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { TiltCard } from '../ui/TiltCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 scroll-mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering resilient, scalable{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
              cloud architectures
            </span>
            .
          </h2>
        </motion.div>

        {/* Asymmetric Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & Currently Card (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white/70 dark:bg-[#0E1220]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">
                DevOps Engineer with a Passion for Zero Downtime
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-4">
                {profileData.summary}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                I focus on bridge-building between software development teams and reliable cloud operations—automating repetitive toil, eliminating deployment stress through bulletproof CI/CD pipelines, and establishing observability that pinpoints bottlenecks in seconds.
              </p>
            </motion.div>

            {/* "Currently" Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-violet-500/5 dark:from-[#0E1220]/90 dark:to-[#13192e]/90 border border-blue-500/20 dark:border-white/10 backdrop-blur-xl shadow-md"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  CURRENT ROLE & OPERATIONS
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {profileData.companyPeriod}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                      {profileData.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {profileData.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{profileData.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-white/60 dark:bg-[#0E1220]/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-violet-500 dark:text-violet-400 font-semibold">
                      {profileData.education.period}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mt-0.5">
                    {profileData.education.degree}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {profileData.education.institution}, {profileData.education.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Tilt Card with Quick Facts (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TiltCard
                maxTilt={6}
                className="p-8 rounded-2xl bg-white/80 dark:bg-[#0E1220]/90 border border-slate-200/90 dark:border-white/10 backdrop-blur-2xl shadow-xl"
              >
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    Operations Highlights
                  </h3>
                </div>

                <div className="space-y-4">
                  {profileData.quickFacts.map((fact, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 flex items-start gap-3 transition-colors hover:border-blue-500/30"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
                          {fact.label}
                        </div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-0.5">
                          {fact.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Operations Terminal Badge */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Cloud className="w-3.5 h-3.5 text-blue-500" />
                    AWS Certified Architecture
                  </span>
                  <span className="text-emerald-500 font-semibold">Online</span>
                </div>
              </TiltCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
