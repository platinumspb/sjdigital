import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import Differentiator from './components/sections/Differentiator';
import AuditSection from './components/sections/AuditSection';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-600 selection:text-white overflow-hidden">
      {/* Sticky header */}
      <Navbar />
      
      {/* Main page content sections */}
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Pricing />
        <Differentiator />
        <AuditSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
