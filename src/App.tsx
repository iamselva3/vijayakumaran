import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield } from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CursorGlow } from './components/layout/CursorGlow';
import { ScrollProgressBar } from './components/layout/ScrollProgressBar';
import { NoiseBackground } from './components/ui/NoiseBackground';
import { ToastContainer, ToastMessage } from './components/ui/Toast';

import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

export function App() {
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Page-load splash intro: short name/logo reveal then hero stagger
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const addToast = (title: string, message?: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="relative min-h-screen bg-[#F6F7FB] dark:bg-[#07090F] text-[#0F172A] dark:text-[#F1F5F9] transition-colors duration-300 font-sans selection:bg-blue-500/20 selection:text-blue-500 overflow-x-hidden w-full max-w-full">
      
      {/* Page Load Splash Intro */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090F] text-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-[2px] shadow-2xl shadow-blue-500/30 flex items-center justify-center">
                <div className="w-full h-full bg-[#0E1220] rounded-[14px] flex items-center justify-center">
                  <Terminal className="w-7 h-7 text-blue-400 animate-pulse" />
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                VIJAYAKUMARAN A
              </span>
              <span className="font-mono text-xs text-blue-400">
                Initializing AWS & DevOps Console...
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Background Engineering Blueprint & Ambient Glows */}
      <NoiseBackground />

      {/* Desktop Mouse Spotlight */}
      <CursorGlow />

      {/* Floating Pill Glass Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact onShowToast={addToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Toast Notifications Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}

export default App;
