import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ShieldCheck, Box, Server, Activity, ArrowRight, Cloud, Database } from 'lucide-react';

interface ArchDiagramProps {
  type?: 'cicd' | 'eks' | 'ecs' | 'warpgate' | 'apm' | 'rds';
  interactive?: boolean;
}

export const ArchDiagram: React.FC<ArchDiagramProps> = ({ type = 'cicd', interactive = true }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 0,
      title: "1. Code Push",
      desc: "GitHub Webhook triggers",
      icon: GitBranch,
      color: "from-blue-500 to-indigo-500",
      border: "border-blue-500/50",
    },
    {
      id: 1,
      title: "2. Build & Scan",
      desc: "Maven & SonarQube Gate",
      icon: ShieldCheck,
      color: "from-indigo-500 to-violet-500",
      border: "border-violet-500/50",
    },
    {
      id: 2,
      title: "3. Containerize",
      desc: "Multi-stage Docker -> ECR",
      icon: Box,
      color: "from-violet-500 to-cyan-500",
      border: "border-cyan-500/50",
    },
    {
      id: 3,
      title: "4. Deploy to Cluster",
      desc: "EKS / ECS Rolling Update",
      icon: Cloud,
      color: "from-cyan-500 to-emerald-500",
      border: "border-emerald-500/50",
    },
    {
      id: 4,
      title: "5. Telemetry & Gate",
      desc: "ALB Check & Elastic APM",
      icon: Activity,
      color: "from-emerald-500 to-amber-500",
      border: "border-amber-500/50",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 border border-white/10 p-5 shadow-2xl relative overflow-hidden text-slate-100 font-sans">
      {/* Background glow and subtle circuit grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-white">LIVE ARCHITECTURE FLOW</span>
          <span className="text-slate-500 hidden sm:inline">• Automated Promotion Pipeline</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
            Step {activeStep + 1} of 5
          </span>
        </div>
      </div>

      {/* Interactive Step Nodes in sequence */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative z-10">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;
          const isPast = activeStep > step.id;

          return (
            <div
              key={step.id}
              onClick={() => interactive && setActiveStep(step.id)}
              className={`group relative p-3 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[110px]
                ${
                  isActive
                    ? 'bg-slate-800/90 border-blue-400/80 shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-[1.03]'
                    : isPast
                    ? 'bg-slate-900/60 border-emerald-500/30 hover:border-white/30'
                    : 'bg-slate-900/40 border-white/5 opacity-70 hover:opacity-90'
                }
              `}
            >
              {/* Connector line on desktop */}
              {step.id < 4 && (
                <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-slate-600">
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-colors ${
                      isActive || isPast ? 'text-blue-400' : 'text-slate-600'
                    }`}
                  />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-gradient-to-br ' + step.color + ' text-white shadow-lg'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                )}
              </div>

              <div className="mt-2">
                <div className="text-xs font-semibold text-white leading-tight">
                  {step.title}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5 leading-snug">
                  {step.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SVG Animated Flow Path */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
          Status: <strong className="text-emerald-300">Healthy (0-Downtime Rolling)</strong>
        </span>
        <span className="text-slate-400 hidden sm:inline">
          Target: UAT &rarr; Pre-Prod &rarr; Production
        </span>
      </div>
    </div>
  );
};
