import { Mail, MapPin, Sparkles } from 'lucide-react';
import Logo from '../ui/Logo';

export const Footer = () => {
  const quickLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'Our Solution', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Why Us', href: '#why-us' }
  ];

  const industries = [
    { label: 'HVAC Contractors', href: '#audit' },
    { label: 'Plumbing & Drainage', href: '#audit' },
    { label: 'Roofing Services', href: '#audit' },
    { label: 'Med Spas & Wellness', href: '#audit' },
    { label: 'Dental Practices', href: '#audit' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-left">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Logo & Positioning (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Logo size={34} className="shadow-sm border border-slate-700/50" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-base tracking-tight leading-none">⚡️killsjump</span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Digital</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-sm leading-relaxed">
              We build AI-powered growth systems and customer communication infrastructure for local businesses. More calls, more bookings, and less manual office work.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">Quick Links</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries (2.5 cols) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">Industries Served</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {industries.map((ind) => (
                <li key={ind.label}>
                  <a href={ind.href} className="hover:text-white transition-colors">
                    {ind.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts (2.5 cols) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">Get In Touch</h4>
            <ul className="space-y-3 text-xs font-semibold">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="mailto:growth@skillsjump.co" className="hover:text-white transition-colors">
                  growth@skillsjump.co
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Austin, Texas</span>
              </li>
              <li className="flex items-center gap-1.5 text-[10px] text-slate-500 bg-slate-950 p-2 rounded-lg border border-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Custom blueprints in 24 hrs</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub Footer */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] font-medium text-slate-500 gap-4">
          <p>© 2026 ⚡️killsjump Digital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <span className="text-slate-600">Built by Engineers</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
