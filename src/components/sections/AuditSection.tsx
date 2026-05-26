import { ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveScheduler from '../dashboard/InteractiveScheduler';

export const AuditSection: React.FC = () => {
  const auditBenefits = [
    'Live test of your missed-call response speed',
    'Full citation integrity check for Google Maps',
    'Custom AI implementation blueprint (yours to keep)',
    '15-minute screen share with a systems engineer'
  ];

  return (
    <section id="audit" className="relative py-20 sm:py-28 bg-slate-950 text-white overflow-hidden">
      
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[50%] aspect-square rounded-full bg-gradient-to-br from-brand-600/10 to-blue-500/15 blur-[130px]"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] aspect-square rounded-full bg-gradient-to-tr from-brand-700/5 to-blue-600/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Benefit bullets (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                Zero Friction
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight mt-4 leading-tight">
                See How Many Leads<br className="hidden sm:inline" /> You're Losing Every Week
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-medium mt-4 leading-relaxed max-w-xl">
                Schedule a 15-minute diagnostic growth audit. Our engineering team will analyze your response speed, search visibility, and booking friction, and build a custom automation roadmap. No high-pressure sales pitch, just code and metrics.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-4">
              {auditBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Professional sub-note */}
            <div className="pt-6 border-t border-slate-900 max-w-xl flex items-center gap-3 text-[10px] text-slate-500">
              <ShieldCheck className="w-5 h-5 text-slate-600 shrink-0" />
              <span>We value privacy. Your business name and contact information are processed securely and will never be shared or sold.</span>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Scheduler (5 cols) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <InteractiveScheduler />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default AuditSection;
