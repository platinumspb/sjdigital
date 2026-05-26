import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Check, Sparkles, Building2, User, ChevronRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type FlowStep = 'select' | 'form' | 'auditing' | 'confirmed';

interface TimeSlot {
  time: string;
  available: boolean;
}

const dates = [
  { id: 'd1', label: 'Tomorrow', dateStr: 'Wed, May 27' },
  { id: 'd2', label: 'Day After', dateStr: 'Thu, May 28' },
  { id: 'd3', label: 'Next Monday', dateStr: 'Mon, Jun 01' },
];

const timeSlots: TimeSlot[] = [
  { time: '9:00 AM', available: true },
  { time: '10:30 AM', available: true },
  { time: '1:00 PM', available: true },
  { time: '2:30 PM', available: false },
  { time: '4:00 PM', available: true },
];

const auditSteps = [
  'Initializing growth audit protocols...',
  'Scanning website speed & core web vitals...',
  'Checking Google Map rankings & citation inconsistencies...',
  'Simulating AI SMS speed test for missed calls...',
  'Generating custom report structure...'
];

export const InteractiveScheduler = () => {
  const [step, setStep] = useState<FlowStep>('select');
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Form states
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('HVAC');
  
  // Auditing animation state
  const [activeAuditIdx, setActiveAuditIdx] = useState(0);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('form');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !company || !phone) return;
    
    setStep('auditing');
    
    // Simulate audit logging steps
    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      if (idx < auditSteps.length) {
        setActiveAuditIdx(idx);
      } else {
        clearInterval(interval);
        setStep('confirmed');
      }
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white border border-slate-200/80 rounded-2xl shadow-xl overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-slate-900 px-6 py-4 text-white flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-sm">Growth Audit Scheduler</h3>
          <p className="text-[10px] text-slate-400">Takes less than 60 seconds</p>
        </div>
        <div className="bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-blue-500/20 flex items-center gap-1">
          <Sparkles className="w-3 h-3 animate-pulse" /> 1 Slot Left Today
        </div>
      </div>

      <div className="p-6 text-left min-h-[340px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: SELECT DATE & TIME */}
          {step === 'select' && (
            <motion.div
              key="select"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-5 flex-1"
            >
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2.5">
                  1. Select a Day
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {dates.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDate(d)}
                      type="button"
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        selectedDate.id === d.id
                          ? 'border-brand-600 bg-brand-50/50 text-brand-600 font-semibold shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      <p className="text-[11px] uppercase tracking-tight text-slate-400">{d.label}</p>
                      <p className="text-xs mt-0.5 font-medium">{d.dateStr.split(', ')[1]}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2.5">
                  2. Select a Time ({selectedDate.dateStr})
                </label>
                <div className="space-y-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      disabled={!slot.available}
                      onClick={() => handleTimeSelect(slot.time)}
                      type="button"
                      className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
                        slot.available
                          ? 'border-slate-200 hover:border-brand-600 hover:bg-slate-50 text-slate-700 font-medium active:scale-[0.99]'
                          : 'border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed opacity-60'
                      }`}
                    >
                      <span className="text-xs flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {slot.time}
                      </span>
                      {slot.available ? (
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      ) : (
                        <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                          Booked
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: FILL BUSINESS DETAILS */}
          {step === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex-1"
            >
              <button 
                onClick={() => setStep('select')}
                className="text-xs text-slate-400 hover:text-slate-600 mb-4 inline-flex items-center gap-1"
              >
                ← Back to times
              </button>

              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Evgeny Kim"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:border-brand-600 focus:ring-1 focus:ring-brand-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Business Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Superb Plumbing Co."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:border-brand-600 focus:ring-1 focus:ring-brand-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:border-brand-600 focus:ring-1 focus:ring-brand-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Industry
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:border-brand-600 focus:outline-none"
                    >
                      <option value="HVAC">HVAC</option>
                      <option value="Plumbing">Plumbing</option>
                      <option value="Roofing">Roofing</option>
                      <option value="Med Spa">Med Spa</option>
                      <option value="Dental">Dental</option>
                      <option value="Other">Other SMB</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all mt-4"
                >
                  Schedule Free Audit <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 3: MOCK AUDIT PROTOCOL SCROLL */}
          {step === 'auditing' && (
            <motion.div
              key="auditing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col justify-center space-y-4"
            >
              <div className="flex flex-col items-center justify-center text-center py-2">
                <div className="w-10 h-10 border-2 border-brand-200 border-t-brand-600 rounded-full animate-spin mb-3"></div>
                <h4 className="font-semibold text-xs text-slate-700">Connecting to Skillsjump Infrastructure</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">Pre-scanning your online presence...</p>
              </div>

              {/* Console log simulator */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-[9px] text-slate-400 h-28 overflow-y-auto space-y-1.5 select-none">
                {auditSteps.slice(0, activeAuditIdx + 1).map((stepTxt, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 leading-normal">
                    <span className="text-blue-400 shrink-0">&gt;</span>
                    <span>{stepTxt}</span>
                    {idx < activeAuditIdx ? (
                      <span className="text-green-400 ml-auto shrink-0">[DONE]</span>
                    ) : (
                      <span className="text-yellow-400 ml-auto shrink-0 animate-pulse">[RUNNING]</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 4: CONFIRMATION SUCCESS SCREEN */}
          {step === 'confirmed' && (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col justify-between py-2 text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-3 shadow-sm">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-slate-800">Growth Audit Prepared!</h4>
                <p className="text-[11px] text-slate-500 max-w-xs mt-1.5 leading-relaxed">
                  We've successfully generated your custom scan roadmap. Please secure your slot on our official Calendly calendar below.
                </p>
              </div>

              {/* Booking Recap card */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 text-left space-y-2 mt-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-[10px] font-semibold text-slate-700">{company} ({industry})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-[10px] text-slate-600">{selectedDate.dateStr} @ {selectedTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-[10px] text-slate-600">{phone}</span>
                </div>
              </div>

              {/* Secure Slot on Calendly Button */}
              <a
                href="https://calendly.com/skillsjump/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3.5 w-full bg-gradient-to-r from-brand-600 to-blue-500 text-white rounded-xl py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-brand-600/10 hover:shadow-lg hover:brightness-105 active:scale-[0.99] transition-all"
              >
                <span>Secure Slot on Calendly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  setStep('select');
                  setSelectedTime(null);
                  setName('');
                  setCompany('');
                  setPhone('');
                }}
                className="text-[10px] text-slate-500 hover:text-slate-750 font-semibold underline mt-3.5"
              >
                Start booking again
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};
export default InteractiveScheduler;
