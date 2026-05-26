import React from 'react';
import { 
  MessageSquareCode, 
  CalendarCheck, 
  PhoneCall, 
  Sparkles, 
  Laptop, 
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Solution: React.FC = () => {
  const solutions = [
    {
      icon: MessageSquareCode,
      title: 'AI Lead Response',
      tag: 'Core Feature',
      description: 'Engage web visitors instantly via conversational SMS. Our AI answers service questions, quotes baseline prices, and drives customers straight to booking.'
    },
    {
      icon: CalendarCheck,
      title: 'Booking Automation',
      tag: 'Calendar Sync',
      description: 'Direct integration with Housecall Pro, ServiceTitan, and Google Calendar. The system checks real-time tech availability and secures the booking instantly.'
    },
    {
      icon: PhoneCall,
      title: 'Missed Call Recovery',
      tag: 'Revenue Saver',
      description: 'Missed a call? The system triggers an instant SMS callback within 10 seconds, starting an automated booking chat before the customer can call competitors.'
    },
    {
      icon: Sparkles,
      title: 'Review Automation',
      tag: 'Local SEO',
      description: 'Automatically trigger polite review request links via SMS the moment a job is closed. Boost Google Maps rankings and drive more organic inbound leads.'
    },
    {
      icon: Laptop,
      title: 'Smart Landing Pages',
      tag: 'Conversion Engine',
      description: 'Lightning-fast, highly optimized landing pages customized for local HVAC, plumbing, or roofing contractors. Built to turn mobile traffic into bookings.'
    },
    {
      icon: BarChart3,
      title: 'CRM & Pipeline Tracking',
      tag: 'Operations Hub',
      description: 'A single, unified dashboard to view every lead, conversation history, automated dispatch status, and revenue captured. Built for operational oversight.'
    }
  ];

  return (
    <section id="solution" className="relative py-20 sm:py-28 bg-slate-50">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-3">
            The Solution
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Your AI-Powered Front Office
          </p>
          <p className="text-slate-500 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Skillsjump Digital replaces manual data entry and slow callbacks with reliable software workflows. We automate the customer journey from search to scheduled job.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-premium-hover hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                {/* Icon & Tag */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {sol.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {sol.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                  {sol.description}
                </p>

                {/* Learn More link (micro interaction) */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Explore System</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Solution;
