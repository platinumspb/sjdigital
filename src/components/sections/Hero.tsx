import React from 'react';
import { Sparkles, ShieldCheck, Cpu, Code, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import HeroDashboard from '../dashboard/HeroDashboard';

export const Hero: React.FC = () => {

  const trustBadges = [
    { text: 'Fast Setup', icon: '⚡' },
    { text: 'Automated Follow-Up', icon: '🤖' },
    { text: 'Lead Recovery', icon: '📞' },
    { text: '24/7 AI Response', icon: '🕒' },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        {/* Soft blue glow behind the dashboard */}
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[70%] aspect-square rounded-full bg-gradient-to-tr from-brand-400/10 to-blue-500/10 blur-[120px]"></div>
        {/* Soft grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subhead Tag / Pill */}
        <div className="flex justify-center mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-[10px] sm:text-xs font-bold text-brand-700 uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered Growth Systems for Local Businesses
          </motion.div>
        </div>

        {/* Tagline & Subheadline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            More Calls. <br className="sm:hidden" />
            More Bookings. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-500">
              Less Manual Work.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed"
          >
            Skillsjump Digital helps local businesses automate lead response, booking, follow-up, and customer communication using AI-powered systems.
          </motion.p>
        </div>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <Button 
            variant="primary" 
            size="lg" 
            href="https://calendly.com/skillsjump/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            Get Free Growth Audit
          </Button>
        </motion.div>

        {/* Dashboard Visual Wrap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-20 sm:mb-24 shadow-2xl rounded-2xl overflow-hidden"
        >
          <HeroDashboard />
        </motion.div>

        {/* Credibility & Trust Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 border-t border-slate-200"
        >
          {/* Engineering Bar */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-8 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-500" />
              <span>Built by Engineers</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-500" />
              <span>AI Automation Systems</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>QA-Tested Workflows</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>SMB-Focused Infrastructure</span>
            </div>
          </div>

          {/* Metric Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {trustBadges.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-sm text-xs font-bold text-slate-700"
              >
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default Hero;
