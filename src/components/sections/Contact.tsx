import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
  Terminal,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import confetti from 'canvas-confetti';
import { profileData } from '../../data/profile';
import { TiltCard } from '../ui/TiltCard';

interface ContactProps {
  onShowToast: (title: string, message?: string, type?: 'success' | 'info' | 'error') => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`Copied ${label} to clipboard!`, text, 'success');
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Missing Fields', 'Please complete all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulating API request / Formspree submission
      const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      if (formEndpoint) {
        await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } else {
        // Fallback delay simulation
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#8B5CF6', '#10B981'],
      });
      onShowToast('Message Sent Successfully!', 'Thank you! Vijay will get back to you shortly.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      onShowToast('Submission Failed', 'Please email directly at vijayakumaran.ar@gmail.com', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Decorative Glowing Orb in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Let's build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400">
              reliable
            </span>
            .
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3 max-w-2xl font-sans">
            Whether you need AWS infrastructure automation, Kubernetes cluster optimization, zero-downtime CI/CD architecture, or site reliability consulting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <TiltCard
              maxTilt={4}
              className="p-5 rounded-2xl bg-white/80 dark:bg-[#0E1220]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="block text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profileData.email, 'Email')}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'Email' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </TiltCard>

            {/* Phone Card */}
            <TiltCard
              maxTilt={4}
              className="p-5 rounded-2xl bg-white/80 dark:bg-[#0E1220]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                      className="block text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profileData.phone, 'Phone')}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'Phone' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </TiltCard>

            {/* LinkedIn Card */}
            <TiltCard
              maxTilt={4}
              className="p-5 rounded-2xl bg-white/80 dark:bg-[#0E1220]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      LinkedIn Network
                    </span>
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/vijayakumaran-ar
                    </a>
                  </div>
                </div>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
                  aria-label="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </TiltCard>

            {/* Location & Status Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/5 to-blue-500/5 dark:bg-[#0E1220]/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    Base Location
                  </span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {profileData.location}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Cloud & DevOps Roles
                </span>
                <span>IST (UTC+5:30)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <TiltCard
              maxTilt={3}
              className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0E1220]/90 border border-slate-200/90 dark:border-white/10 backdrop-blur-2xl shadow-xl"
            >
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                <Terminal className="w-5 h-5 text-blue-500" />
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  Send an Engineering Inquiry
                </h3>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-400">
                    Message Transmitted
                  </h4>
                  <p className="text-sm text-slate-300">
                    Thank you for reaching out. Vijayakumaran will review your message and reply via email shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-mono bg-white/10 hover:bg-white/15 text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="DevOps role / AWS Architecture consultation"
                      className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Vijayakumaran, we're building a new AWS EKS platform and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};
