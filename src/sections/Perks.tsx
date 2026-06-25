import React from 'react';

interface Perk {
  num: string;
  icon: React.JSX.Element;
  title: string;
  tagline: string;
  bullets: string[];
  styles: {
    bg: string;
    border: string;
    text: string;
    iconBg: string;
    bulletIcon: string;
  };
}

const perks: Perk[] = [
  {
    num: '01',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
      </svg>
    ),
    title: 'Lead & Empower',
    tagline: 'Become the person your campus looks up to for tech guidance.',
    styles: {
      bg: 'bg-[#FFF8E6]', 
      border: 'hover:border-[#eab308]/40 hover:shadow-[0_20px_40px_rgba(234,179,8,0.08)',
      text: 'text-[#713f12]',
      iconBg: 'bg-[#fef08a] text-[#ca8a04]',
      bulletIcon: 'text-[#d97706]',
    },
    bullets: [
      'Mentorship with Leapfrog experts',
      'Knowledge-sharing sessions',
      'Lead your campus community',
    ],
  },
  {
    num: '02',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    title: 'Go Pro Early',
    tagline: 'Step into professional environments before you graduate.',
    styles: {
      bg: 'bg-[#FFF8E6]', 
      border: 'hover:border-[#eab308]/40 hover:shadow-[0_20px_40px_rgba(234,179,8,0.08)',
     text: 'text-[#713f12]',
      iconBg: 'bg-[#fef08a] text-[#ca8a04]',
      bulletIcon: 'text-[#d97706]',
    },
    bullets: [
      'Professional exposure & network',
      'Connect with Leapfroggers',
      'Priority for internship openings',
    ],
  },
  {
    num: '03',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21h8M12 17v4M7 4l5 9 5-9M4 9h16" />
      </svg>
    ),
    title: 'Rewards Worth It',
    tagline: 'Tangible recognition for real work and milestones.',
    styles: {
      bg: 'bg-[#FFF8E6]', 
      border: 'hover:border-[#eab308]/40 hover:shadow-[0_20px_40px_rgba(234,179,8,0.08)',
      text: 'text-[#713f12]',
      iconBg: 'bg-[#fef08a] text-[#ca8a04]',
      bulletIcon: 'text-[#d97706]',
    },
    bullets: [
      'Curated training & resources',
      'Exclusive Leapfrog SWAG kit',
      'Official recommendation letters',
    ],
  },
  {
    num: '04',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
    title: 'Grow All-Round',
    tagline: 'Technical depth plus the essential executive soft skills.',
    styles: {
      bg: 'bg-[#FFF8E6]', 
      border: 'hover:border-[#eab308]/40 hover:shadow-[0_20px_40px_rgba(234,179,8,0.08)]',
      text: 'text-[#713f12]',
      iconBg: 'bg-[#fef08a] text-[#ca8a04]',
      bulletIcon: 'text-[#d97706]',
    },
    bullets: [
      'Guidance from senior engineers',
      'Workshops on design thinking',
      'Leadership & ownership training',
    ],
  },
];

const PerkCard: React.FC<{ perk: Perk }> = ({ perk }) => {
  return (
    <div className={`group relative border border-transparent rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${perk.styles.bg} ${perk.styles.border}`}>
      <div>
        {/* Card Header Slot */}
        <div className="flex items-center justify-between mb-5">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${perk.styles.iconBg}`}>
            {perk.icon}
          </div>
          <span className={`text-xs font-mono font-bold tracking-wider opacity-40 ${perk.styles.text}`}>
            //{perk.num}
          </span>
        </div>

        {/* Text Area */}
        <h3 className={`text-base font-bold tracking-tight mb-2 ${perk.styles.text}`}>
          {perk.title}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-5 font-medium">
          {perk.tagline}
        </p>
      </div>

      {/* Bullet Items Container */}
      <div className="border-t border-slate-900/5 pt-4 mt-auto">
        <ul className="flex flex-col gap-2.5">
          {perk.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-snug">
              <svg className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${perk.styles.bulletIcon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Perks: React.FC = () => {
  return (
   <section id="perks" className="relative bg-slate-50/50 py-24 lg:py-32 lg:px-8 overflow-hidden border-t border-b border-slate-100">
      {/* Engineered Atmospheric Ambient Lighting Grid */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none transform -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-teal-500/5 rounded-full filter blur-[100px] pointer-events-none transform translate-y-1/2" aria-hidden="true" />
        
       {/* Header Block */}
        <div className="max-w-2xl mx-auto mb-12 lg:mb-16 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            What are the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-leapfrog-green to-emerald-600">
            Perks ?
            </span>
        </h2>
        </div>

        {/* 4-Column Row Grid Configuration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {perks.map((perk) => (
            <PerkCard key={perk.num} perk={perk} />
          ))}
        </div>
    </section>
  );
};

export default Perks;