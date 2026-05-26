import React from 'react';
import { 
  PhoneMissed, 
  Clock, 
  CalendarX, 
  Laptop, 
  StarOff, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: PhoneMissed,
      title: 'Unanswered Calls',
      metric: '62% Missed Rate',
      description: 'Over half of incoming calls to local service businesses go unanswered during busy hours. Customers rarely leave voicemails; they just call your competitor.'
    },
    {
      icon: Clock,
      title: 'Slow Response Times',
      metric: '7x Drop In Leads',
      description: 'Waiting just 30 minutes to reply to a web form reduces your booking rate by 700%. Modern buyers expect instant verification, not callbacks tomorrow.'
    },
    {
      icon: CalendarX,
      title: 'Zero Lead Follow-Up',
      metric: '44% Never Follow Up',
      description: '80% of bookings require 3 to 5 touchpoints. Yet, almost half of SMBs never follow up a lead after the first quote or email goes unanswered.'
    },
    {
      icon: Laptop,
      title: 'Friction-Heavy Booking',
      metric: '4% Conversion Rate',
      description: 'Static landing pages with complex contact forms turn mobile visitors away. Customers want to click a button and book their appointment immediately.'
    },
    {
      icon: StarOff,
      title: 'No Review Collection',
      metric: 'Rankings Decline',
      description: '92% of new customers read reviews first. Happy customers forget to post reviews, while unhappy ones rarely forget—letting competitors leapfrog you on Google.'
    },
    {
      icon: AlertTriangle,
      title: 'Leads Lost in the Shuffles',
      metric: 'Lost Revenue',
      description: 'Using paper schedules, text threads, or cluttered email folders leads to double-bookings, missed appointments, and forgotten jobs.'
    }
  ];

  return (
    <section id="problem" className="relative py-20 sm:py-28 bg-white border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-3">
            The Revenue Leaks
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Most Local Businesses Lose Revenue Every Day
          </p>
          <p className="text-slate-500 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Traditional marketing drives clicks, but operational friction wastes them. Here is how your hard-earned traffic slips away.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-50 border border-slate-200/60 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:border-slate-300 hover:bg-slate-50/50 hover:shadow-premium group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-700 shadow-sm group-hover:border-blue-200 group-hover:text-brand-600 transition-colors mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-bold text-lg text-slate-900">{prob.title}</h3>
                  <span className="text-[10px] font-bold text-brand-600 bg-blue-50 border border-blue-100/50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {prob.metric}
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                  {prob.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Transitional Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 text-center relative overflow-hidden shadow-xl"
        >
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
          
          <div className="relative z-10 space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
              The Skillsjump Framework
            </span>
            <p className="text-xl sm:text-2xl font-bold tracking-tight max-w-2xl mx-auto leading-normal">
              “We build systems that automatically capture, respond to, and convert leads into booked customers.”
            </p>
            <div className="flex justify-center pt-2">
              <a 
                href="#audit" 
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors group"
              >
                Find your growth opportunities <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default Problem;
