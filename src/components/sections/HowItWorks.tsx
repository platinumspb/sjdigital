import React from 'react';
import { Search, Cog, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Growth Audit',
      subtitle: 'Analyze current flow',
      description: 'We run a complete diagnostic scan on your current lead response times, Google Business profile, and website performance to locate leaked revenue.',
      points: ['Response Speed Test', 'GBP Citation Scan', 'Mobile PageSpeed Check']
    },
    {
      step: '02',
      icon: Cog,
      title: 'Custom Setup',
      subtitle: 'Deploy AI workflows',
      description: 'Our software engineers build your high-converting landing pages, configure calendar integrations, and program SMS automation channels.',
      points: ['Calendar & CRM Sync', 'AI SMS Playbooks', 'Landing Page Build']
    },
    {
      step: '03',
      icon: Rocket,
      title: 'Automated Growth',
      subtitle: 'Convert jobs 24/7',
      description: 'The systems take over. Missed calls automatically trigger text conversations, and leads book themselves into your dispatch schedule.',
      points: ['Missed-Call Recovery', 'Instant Review Requests', 'Live ROI Dashboard']
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-white border-y border-slate-200/50">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-3">
            The Process
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How Skillsjump Digital Works
          </p>
          <p className="text-slate-500 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            From initial audit to fully-automated operations. We coordinate setup with zero disruption to your daily operations.
          </p>
        </div>

        {/* Process Timeline Flex/Grid */}
        <div className="relative">
          {/* Connecting line for desktop timeline */}
          <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 bg-slate-200"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((stepData, idx) => {
              const Icon = stepData.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step bubble */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-slate-50 border-2 border-slate-200 group-hover:border-brand-600 flex items-center justify-center text-slate-400 group-hover:text-brand-600 transition-colors shadow-sm mb-6 bg-white">
                    <Icon className="w-6 h-6" />
                    {/* Floating step number */}
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-slate-900 border border-slate-800 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                      {stepData.step}
                    </span>
                  </div>

                  {/* Titles */}
                  <h3 className="font-bold text-xl text-slate-900 leading-tight">
                    {stepData.title}
                  </h3>
                  <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider mt-1 mb-3">
                    {stepData.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium mb-6 max-w-xs mx-auto">
                    {stepData.description}
                  </p>

                  {/* Bullet checklist */}
                  <div className="w-full max-w-[240px] bg-slate-50 border border-slate-200/50 p-4 rounded-xl text-left space-y-2">
                    {stepData.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[10px] sm:text-xs font-semibold text-slate-700">{pt}</span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
export default HowItWorks;
