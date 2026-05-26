import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Custom Pricing',
      subtext: 'For newer local businesses starting to automate',
      features: [
        'High-converting Smart Landing Page',
        '24/7 Web AI Lead Chatbot',
        'Direct calendar sync & booking link',
        'SMS lead capture notification',
        'Standard Email support'
      ],
      popular: false,
      cta: 'Request Starter Setup'
    },
    {
      name: 'Growth',
      price: 'Custom Pricing',
      subtext: 'Complete automated front office operations',
      features: [
        'Everything in Starter',
        'Missed-Call Text-Back automation',
        'Unified CRM dashboard & lead tracking',
        'Automatic Google Review request links',
        'Weekly pipeline performance metrics',
        'Priority support & setup assistance'
      ],
      popular: true,
      cta: 'Request Growth Audit'
    },
    {
      name: 'Premium',
      price: 'Custom Pricing',
      subtext: 'Tailored automation architecture for multi-truck crews',
      features: [
        'Everything in Growth',
        'Custom AI response tuning (knowledge base)',
        'Multiple dispatch & tech calendar integrations',
        'API & database webhook integrations',
        'Dedicated account manager & SLA support',
        'Bi-weekly lead performance audits'
      ],
      popular: false,
      cta: 'Consult with Engineers'
    }
  ];
  return (
    <section id="pricing" className="relative py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-3">
            Simple Billing
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Built for High ROI. No Hidden Fees.
          </p>
          <p className="text-slate-500 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Choose the operational foundation that fits your service business. Pricing is custom-quoted based on lead volume and customization requirements.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-brand-600 shadow-xl shadow-brand-600/5 lg:-translate-y-2'
                  : 'border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-600 to-blue-500 text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </span>
              )}

              <div>
                {/* Plan Metadata */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{plan.subtext}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">{plan.price}</span>
                  </div>
                </div>

                {/* Checklist */}
                <ul className="space-y-3.5 mb-8 border-t border-slate-100 pt-6">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200/50 flex items-center justify-center text-brand-600 shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-600 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                size="md"
                className="w-full mt-auto"
                href="https://calendly.com/skillsjump/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Pricing;
