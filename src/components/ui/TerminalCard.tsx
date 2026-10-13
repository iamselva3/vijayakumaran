import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, CheckCircle2, ShieldCheck } from 'lucide-react';

interface TerminalLine {
  text: string;
  type: 'cmd' | 'output' | 'success';
}

const linesToType: TerminalLine[] = [
  { text: '$ terraform init && terraform plan', type: 'cmd' },
  { text: '  Plan: 8 to add, 0 to change, 0 to destroy.', type: 'output' },
  { text: '$ terraform apply -auto-approve', type: 'cmd' },
  { text: '  Apply complete! Resources: 8 added.', type: 'output' },
  { text: '$ kubectl rollout status deploy/app -n prod', type: 'cmd' },
  { text: '  deployment "app" successfully rolled out', type: 'output' },
  { text: '✓ Pipeline passed — zero-downtime release to PROD', type: 'success' },
];

export const TerminalCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= linesToType.length) {
      // Loop after a pause
      const resetTimeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimeout);
    }

    const targetLine = linesToType[currentLineIndex];

    if (targetLine.type === 'output' || targetLine.type === 'success') {
      // Show output immediately after short pause
      const delay = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, targetLine]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 400);
      return () => clearTimeout(delay);
    }

    // Type character by character for commands
    if (currentCharIndex < targetLine.text.length) {
      const typeSpeed = Math.floor(Math.random() * 25) + 30; // 30-55ms
      const typeTimeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, typeSpeed);
      return () => clearTimeout(typeTimeout);
    } else {
      // Line finished typing
      const nextLineTimeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, targetLine]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 300);
      return () => clearTimeout(nextLineTimeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`relative rounded-xl border border-white/10 dark:border-white/10 bg-[#0E1220]/90 dark:bg-[#0E1220]/95 backdrop-blur-xl p-4 shadow-2xl text-xs font-mono text-slate-300 w-full max-w-md h-[275px] flex flex-col justify-between ${className}`}
    >
      {/* Glow highlight */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
            <TerminalIcon className="w-3 h-3 text-blue-400" />
            aws-deploy-agent ~ bash
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            99.99% Uptime
          </span>
        </div>
      </div>

      {/* Terminal Body - Fixed height to avoid expanding layout jitter */}
      <div className="space-y-1.5 h-[175px] overflow-hidden select-none flex-1">
        {displayedLines.map((line, idx) => (
          <div key={idx} className="leading-relaxed">
            {line.type === 'cmd' && (
              <span className="text-cyan-400 font-semibold">{line.text}</span>
            )}
            {line.type === 'output' && (
              <span className="text-slate-400">{line.text}</span>
            )}
            {line.type === 'success' && (
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 inline" />
                {line.text.replace('✓ ', '')}
              </span>
            )}
          </div>
        ))}

        {/* Current actively typing line */}
        {currentLineIndex < linesToType.length &&
          linesToType[currentLineIndex].type === 'cmd' && (
            <div className="leading-relaxed">
              <span className="text-cyan-400 font-semibold">
                {linesToType[currentLineIndex].text.slice(0, currentCharIndex)}
              </span>
              <span className="inline-block w-2 h-3.5 bg-blue-400 align-middle ml-0.5 animate-pulse" />
            </div>
          )}
      </div>

      {/* Bottom status badge */}
      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-purple-400" />
          Zero Trust Verified
        </span>
        <span className="text-slate-400">AWS us-east-1 • Prod</span>
      </div>
    </motion.div>
  );
};
