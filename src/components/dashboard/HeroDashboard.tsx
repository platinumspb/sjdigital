import { useState, useEffect } from 'react';
import { 
  Calendar, 
  TrendingUp, 
  User, 
  Clock, 
  Check, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatMessage {
  id: number;
  sender: 'system' | 'ai' | 'customer';
  text: string;
  time: string;
}

const chatScript: ChatMessage[] = [
  {
    id: 1,
    sender: 'system',
    text: '🚨 Missed Call from Evgeny K. (Plumbing Emergency Request)',
    time: '2:14 PM'
  },
  {
    id: 2,
    sender: 'ai',
    text: 'Hey Evgeny! We just missed your call. We\'re currently on a job site, but our AI assistant is here to help immediately. What service do you need today?',
    time: '2:14 PM'
  },
  {
    id: 3,
    sender: 'customer',
    text: 'Hey, I have a water heater leaking in the basement. Can you get someone out today?',
    time: '2:15 PM'
  },
  {
    id: 4,
    sender: 'ai',
    text: 'Oh no, let\'s get that sorted. 💧 I have an emergency slot open today at 4:00 PM, or tomorrow morning at 9:00 AM. Which one works best for you?',
    time: '2:15 PM'
  },
  {
    id: 5,
    sender: 'customer',
    text: '4:00 PM today works. Please confirm!',
    time: '2:16 PM'
  },
  {
    id: 6,
    sender: 'ai',
    text: 'Perfect! You are booked for today at 4:00 PM. Technician Sergey will head your way. Here is your tracking link: skillsjump.co/t/7a9x',
    time: '2:16 PM'
  },
  {
    id: 7,
    sender: 'system',
    text: '✅ Dispatch Confirmed: Sergey assigned to Basement Leak at 4:00 PM',
    time: '2:16 PM'
  }
];

export const HeroDashboard = () => {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const runScript = () => {
      if (currentIndex < chatScript.length) {
        const nextMsg = chatScript[currentIndex];
        
        if (nextMsg.sender === 'ai') {
          setIsTyping(true);
          timer = setTimeout(() => {
            setIsTyping(false);
            setVisibleMessages((prev) => [...prev, nextMsg]);
            setCurrentIndex((prev) => prev + 1);
          }, 1500); // 1.5s typing delay for AI
        } else {
          // System or customer messages show after a slight natural pause
          timer = setTimeout(() => {
            setVisibleMessages((prev) => [...prev, nextMsg]);
            setCurrentIndex((prev) => prev + 1);
          }, nextMsg.sender === 'customer' ? 1800 : 1000);
        }
      } else {
        // Wait 8 seconds at the end of script, then restart loop
        timer = setTimeout(() => {
          setVisibleMessages([]);
          setCurrentIndex(0);
          setIsTyping(false);
        }, 8000);
      }
    };

    runScript();

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="w-full max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-sans text-left">
      {/* Window Controls Header */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="text-xs text-slate-400 font-mono ml-2">skillsjump-growth-hub.v1</span>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[10px] text-slate-300 font-medium uppercase tracking-wider">AI System Online</span>
        </div>
      </div>

      {/* Main Dashboard Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        
        {/* Left Section: Live Pipeline Metrics (4 cols) */}
        <div className="lg:col-span-4 p-4 lg:p-6 bg-slate-900/50 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Live Revenue Pipeline</h3>
            </div>
            
            {/* Stats list */}
            <div className="space-y-4">
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 hover:border-slate-800 transition-all">
                <p className="text-xs text-slate-400">Total Leads Captured</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-slate-100">142</span>
                  <span className="text-xs text-green-500 font-medium flex items-center gap-0.5">
                    +24% <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 hover:border-slate-800 transition-all">
                <p className="text-xs text-slate-400">Missed Calls Recovered</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-blue-400">38</span>
                  <span className="text-xs text-blue-400 font-medium bg-blue-500/10 px-1.5 py-0.5 rounded">
                    94.7% rate
                  </span>
                </div>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 hover:border-slate-800 transition-all">
                <p className="text-xs text-slate-400">Avg. AI Response Time</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-emerald-400">42s</span>
                  <span className="text-xs text-slate-500">vs 3.4 hrs industry avg</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Active Status Alert */}
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/50 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-200">AI Auto-pilot Enabled</p>
              <p className="text-[10px] text-slate-400">Recovering lost leads 24/7</p>
            </div>
          </div>
        </div>

        {/* Middle Section: Animated SMS / Chat Feed (5 cols) */}
        <div className="lg:col-span-5 p-4 lg:p-6 flex flex-col justify-between h-[360px] lg:h-[400px]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
              <span className="text-xs font-semibold text-slate-200">Active Conversation</span>
            </div>
            <span className="text-[10px] text-slate-500">Lead Source: Smart Callback</span>
          </div>

          {/* Conversation Bubbles Scroll Area */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-none">
            <AnimatePresence initial={false}>
              {visibleMessages.map((msg) => {
                if (msg.sender === 'system') {
                  const isRed = msg.text.includes('🚨');
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-center justify-center p-2 rounded-lg text-center ${
                        isRed ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'
                      } text-[10px] font-medium mx-4`}
                    >
                      {msg.text}
                    </motion.div>
                  );
                }

                const isAI = msg.sender === 'ai';
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-2.5 ${isAI ? 'justify-start' : 'justify-end'}`}
                  >
                    {isAI && (
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white shrink-0 font-bold">
                        AI
                      </div>
                    )}
                    <div className="max-w-[80%] flex flex-col">
                      <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                        isAI 
                          ? 'bg-slate-800 text-slate-200 rounded-tl-none' 
                          : 'bg-blue-600 text-white rounded-tr-none'
                      }`}>
                        {msg.text}
                      </div>
                      <span className={`text-[9px] text-slate-500 mt-1 ${isAI ? 'text-left' : 'text-right'}`}>
                        {msg.time}
                      </span>
                    </div>
                    {!isAI && (
                      <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-slate-300 shrink-0">
                        <User className="w-3 h-3" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {isTyping && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white shrink-0 font-bold">
                  AI
                </div>
                <div className="bg-slate-800 text-slate-400 p-2.5 px-3 rounded-2xl rounded-tl-none text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
          </div>

          {/* Simulated Input Field (disabled) */}
          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[10px] text-slate-400 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-500" /> AI auto-reply sent instantly
            </span>
            <span className="text-[10px] text-slate-500">Wait: 0.1s</span>
          </div>
        </div>

        {/* Right Section: Today's AI Dispatch Calendar (3 cols) */}
        <div className="lg:col-span-3 p-4 lg:p-6 bg-slate-900/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">AI Bookings Today</h3>
              </div>
              <span className="text-[10px] text-blue-400 font-semibold bg-blue-500/10 px-1.5 py-0.5 rounded">Active</span>
            </div>

            <div className="space-y-3">
              {/* Event 1 */}
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex items-start gap-2.5">
                <div className="w-1.5 h-10 rounded-full bg-emerald-500 shrink-0"></div>
                <div className="text-[11px] leading-tight">
                  <div className="flex justify-between items-center w-full">
                    <span className="font-semibold text-slate-200">10:00 AM - Evgeny K.</span>
                    <span className="text-[8px] text-emerald-400 border border-emerald-400/20 px-1 rounded font-mono">Booked</span>
                  </div>
                  <p className="text-slate-400 mt-1">Plumbing: Basement Leak</p>
                  <p className="text-[9px] text-slate-500 mt-0.5 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" /> Assigned: Sergey M.
                  </p>
                </div>
              </div>

              {/* Event 2 */}
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex items-start gap-2.5">
                <div className="w-1.5 h-10 rounded-full bg-blue-500 shrink-0"></div>
                <div className="text-[11px] leading-tight">
                  <div className="flex justify-between items-center w-full">
                    <span className="font-semibold text-slate-200">1:30 PM - John D.</span>
                    <span className="text-[8px] text-blue-400 border border-blue-400/20 px-1 rounded font-mono">Booked</span>
                  </div>
                  <p className="text-slate-400 mt-1">Plumbing: Pipe Audit</p>
                  <p className="text-[9px] text-slate-500 mt-0.5 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" /> Assigned: Sergey M.
                  </p>
                </div>
              </div>

              {/* Event 3 - Will show when fully animated */}
              {visibleMessages.length >= 6 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-3 bg-slate-950/80 rounded-xl border border-blue-500/30 flex items-start gap-2.5 shadow-md shadow-blue-500/5"
                >
                  <div className="w-1.5 h-10 rounded-full bg-blue-600 animate-pulse shrink-0"></div>
                  <div className="text-[11px] leading-tight">
                    <div className="flex justify-between items-center w-full">
                      <span className="font-semibold text-slate-100">4:00 PM - Evgeny K.</span>
                      <span className="text-[8px] text-white bg-blue-600 px-1 rounded font-mono animate-pulse">New</span>
                    </div>
                    <p className="text-slate-300 mt-1">Plumbing: Emergency Leak</p>
                    <p className="text-[9px] text-blue-400 mt-0.5 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 animate-spin" /> Auto-Dispatched: Sergey
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div className="text-[9px] text-slate-500 text-center border-t border-slate-800/80 pt-2.5">
            Auto-synced with Housecall Pro & ServiceTitan
          </div>
        </div>

      </div>
    </div>
  );
};
export default HeroDashboard;
