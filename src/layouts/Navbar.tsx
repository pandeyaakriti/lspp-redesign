import React from 'react';
import lfLogo from '../assets/leapfrog-logo.svg';

const Navbar: React.FC = () => {


  const navLinks = [
    { label: 'Perks', href: '#perks' },
    { label: 'Partners', href: '#partners' },
    { label: 'Mentors', href: '#mentors'},
    { label: 'Resources', href: '#resources'},
    { label: 'Highlights', href: '#highlights'},
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 group justify-self-start"
          aria-label="Leapfrog Student Partner Program"
        >
    
          <img
            src={lfLogo}
            alt="Leapfrog logo"
            className="h-6 w-auto object-contain"
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center justify-center gap-8 justify-self-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-leapfrog-green transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-leapfrog-green rounded-full transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

      </nav>

    </header>
  );
};

export default Navbar;