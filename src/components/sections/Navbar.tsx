import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'The Problem', href: '#problem' },
    { label: 'Our Solution', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Why Skillsjump', href: '#why-us' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Skillsjump Digital" className="w-8.5 h-8.5 rounded-full shadow-md" />
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-base tracking-tight leading-none">Skillsjump</span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Digital</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold text-slate-600 hover:text-brand-600 transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="primary" 
              size="sm"
              href="https://calendly.com/skillsjump/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Free Audit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-600 hover:text-slate-950 focus:outline-none p-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-xl absolute top-full left-0 right-0 py-4 px-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-semibold text-slate-700 hover:text-brand-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Button 
              variant="primary" 
              size="md"
              className="w-full"
              href="https://calendly.com/skillsjump/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Get Free Growth Audit
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
