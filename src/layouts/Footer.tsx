import React, { useState } from 'react';
import leapfrogLogo from '../assets/leapfrog-logo.svg';
export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed:', email);
  };

  return (
    <footer className="bg-leapfrog-dark text-slate-400 py-16 px-6 lg:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Ambient Glow (Keeps the green vibe alive in the dark footer) */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Top Section: Newsletter Box */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div className="max-w-md text-left">
            <h3 className="font-sans font-bold text-white text-xl md:text-2xl tracking-tight mb-2">
              Join our newsletter
            </h3>
            <p className="font-sans font-medium text-slate-400 text-sm leading-relaxed">
              Sign up to stay updated with the latest insights, news, and student stories.
            </p>
          </div>

          {/* Re-engineered Input Capsule Form */}
          <form onSubmit={handleSubmit} className="w-full md:max-w-md">
            <div className="p-1.5 flex items-center bg-white/3 border border-emerald-500/50 rounded-2xl focus-within:border-emerald-500/50 focus-within:ring-2 focus-within:ring-emerald-500/10 transition-all duration-300">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full bg-transparent px-4 py-2.5 font-sans text-sm text-white placeholder-slate-500 outline-none"
              />
              <button
                type="submit"
                className="bg-#2E7D32 bg-leapfrog-green hover:bg-[#276a2a] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-emerald-900/20 active:scale-95 transition-all duration-200 cursor-pointer select-none shrink-0"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Section: Meta Data & Logo */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 font-sans text-xs font-medium text-slate-500">
          
          {/* Copyright & Legal links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Leapfrog Technology Inc. Redesigned by Aakriti Pandey</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors duration-200">Privacy Policy</a>
              <span className="text-white/10 text-xs">|</span>
              <a href="#" className="hover:text-emerald-500 transition-colors duration-200">Data Subject Policy</a>
            </div>
          </div>

          {/* Minimalist Corporate Branding Logo */}
          <div className="flex items-center gap-1.5 select-none opacity-80 hover:opacity-100 transition-opacity duration-300">
           
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <use href={leapfrogLogo} />
            </svg>
            <span className="text-white font-bold text-lg tracking-tight">
              leapfrog
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;