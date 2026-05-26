import { useState } from 'react';
import { Check, FileCode, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export const Differentiator = () => {
  const [activeTab, setActiveTab] = useState<'flow' | 'code'>('flow');

  const bullets = [
    {
      title: 'Infrastructure vs. Ad Spend',
      description: 'We build systems you own. Instead of locking you into ongoing ad budgets that stop producing leads the moment you stop paying, our software automates your existing organic flow.'
    },
    {
      title: 'QA-Tested Workflows',
      description: 'Before going live, we run simulated lead-stress tests on your SMS lines, calendars, and dashboards to ensure 100% operational uptime.'
    },
    {
      title: 'Native API Integration',
      description: 'We build direct database syncing with local CRM tools like ServiceTitan, Housecall Pro, and Jobber rather than brittle third-party scraper hacks.'
    }
  ];

  return (
    <section id="why-us" className="relative py-20 sm:py-28 bg-white border-y border-slate-200/50">
      
      {/* Background shapes */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Copy and Bullet Points (7 cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                The Engineering Edge
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2.5">
                Built by Engineers.<br />Focused on Revenue.
              </h2>
              <p className="text-slate-500 text-sm sm:text-base font-medium mt-4 leading-relaxed">
                Unlike generic marketing agencies that rely on basic ad-buy templates, Skillsjump Digital combines software engineering, QA automation, AI workflows, and product systems to build reliable business growth infrastructure.
              </p>
            </div>

            <div className="space-y-6">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200/50 flex items-center justify-center text-brand-600 shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-slate-950">{bullet.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed font-medium">
                      {bullet.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Mock Code Editor / IDE visualization (6 cols) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-150px' }}
              className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-left font-mono text-xs text-slate-400"
            >
              {/* Tab Bar */}
              <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('flow')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-semibold tracking-wide transition-colors ${
                      activeTab === 'flow'
                        ? 'bg-slate-800 text-slate-100 border border-slate-700'
                        : 'hover:text-slate-200 text-slate-500'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-blue-500" /> system-diagram.json
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-semibold tracking-wide transition-colors ${
                      activeTab === 'code'
                        ? 'bg-slate-800 text-slate-100 border border-slate-700'
                        : 'hover:text-slate-200 text-slate-500'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 text-emerald-500" /> missed_call_trigger.ts
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></span>
                </div>
              </div>

              {/* IDE Content Area */}
              <div className="p-5 sm:p-6 overflow-x-auto min-h-[260px] bg-slate-950/80 leading-normal text-[11px] sm:text-xs">
                {activeTab === 'flow' ? (
                  <div className="space-y-4">
                    {/* Visual workflow logger */}
                    <div className="flex items-center gap-3">
                      <span className="text-slate-600">01</span>
                      <span className="text-blue-400">Incoming call missed</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-slate-300">Webhook received</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-slate-600">02</span>
                      <div className="space-y-1">
                        <span className="text-purple-400">Validation stage</span>
                        <p className="text-[10px] text-slate-500 leading-tight">
                          - Check CRM if client is active<br />
                          - Verify dispatch availability
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-600">03</span>
                      <span className="text-emerald-400">Auto-SMS response initiated</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-slate-300">Sent via Twilio API</span>
                    </div>
                    <div className="border-t border-slate-800 pt-4 mt-4">
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/80">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span>QA Health Check: 100% path coverage. Uptime: 99.99%</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <pre className="text-slate-300 overflow-x-auto">
                    <code>
{`import { CRM, AI, SMS } from '@skillsjump/sdk';

export async function onMissedCall(call: CallEvent) {
  // 1. Verify caller status in CRM database
  const client = await CRM.findOrCreateClient(call.from);
  
  if (client.hasActiveBooking()) {
    return await SMS.send(call.from, "Hey " + client.name + ", saw we missed you! We're preparing for your job at " + client.nextJobTime + ".");
  }
  
  // 2. Query dispatch scheduler availability
  const slots = await AI.getAvailableSlots(new Date());
  
  // 3. Initiate immediate AI chatbot response
  await AI.startBookingThread({
    phone: call.from,
    template: 'missed-call-textback',
    suggestedSlots: slots
  });
}`}
                    </code>
                  </pre>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Differentiator;
