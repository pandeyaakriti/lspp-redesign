import React from 'react';
import PartnerCard, { type Partner } from '../components/PartnerCard';
import aakritiImg from '../assets/aakriti.jpeg';
import partnerImg from '../assets/mj.jpg';

const partners: Partner[] = [
  {
    name: 'Aakriti Pandey',
    university: 'Kathmandu University',
    image: aakritiImg,
    description: 'Led with curiosity, turned campus momentum into practical impact, and helped the cohort stay connected.',
  },
  {
    name: 'Micheal Jackson',
    university: 'Kathmandu University',
    image: partnerImg,
    description: 'Built consistent peer support habits and helped others move from learning theory to project work.',
  },
   {
    name: 'Micheal Jackson',
    university: 'Kathmandu University',
    image: partnerImg,
    description: 'Focused on collaboration, communication, and making the program feel welcoming to new members.',
  },
 {
    name: 'Micheal Jackson',
    university: 'Kathmandu University',
    image: partnerImg,
    description: 'Translated mentorship into steady progress by keeping small goals visible and achievable.',
  },
 {
    name: 'Micheal Jackson',
    university: 'Kathmandu University',
    image: partnerImg,
    description: 'Balanced technical learning with campus leadership and built a strong feedback loop for peers.',
  },
 {
    name: 'Micheal Jackson',
    university: 'Kathmandu University',
    image: partnerImg,
    description: 'Helped shape a stronger student network through accountability, mentorship, and practical execution.',
  },
 {
    name: 'Micheal Jackson',
    university: 'Kathmandu University',
    image: partnerImg,
    description: 'Brought structure to the cohort experience and made room for confident, independent growth.',
  },

];

const Partners: React.FC = () => {
  return (
    <section id="partners" className="relative overflow-hidden bg-slate-50/50 py-24 lg:py-32 border-t border-b border-slate-100">
      {/* Green glow — bottom-left this time for variety */}
      <div
        className="absolute -left-32 bottom-0 w-96 h-96 rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle,#2FCC71 0%,transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="absolute top-0 left-1/4 w-150 h-150 bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none transform -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-teal-500/5 rounded-full filter blur-[100px] pointer-events-none transform translate-y-1/2" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-leapfrog-green" />
            <span className="text-[10px] font-bold tracking-[.18em] uppercase text-leapfrog-green">
              Meet the partners
            </span>
          </div>
          <h2 className="font-black text-slate-900 text-4xl lg:text-5xl tracking-tight leading-[1.05] mb-3">
            Real students.{' '}
            <span
              style={{ WebkitTextStroke: '1.5px #2E7D32', color: 'transparent' }}
            >
              Real impact.
            </span>
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            The faces behind the program — students who led, learned, and grew. Hover to hear their story.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
          {partners.map((p) => (
            <PartnerCard key={p.name} partner={p} />
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-sm px-6 py-5 shadow-[0_18px_50px_rgba(13,17,23,0.06)]">
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
            Interested in becoming the next Leapfrog Student Partner?{' '}
            <span className="text-leapfrog-green font-semibold">Applications are open for 2026.</span>
          </p>
          <a
            href="#apply"
            className="shrink-0 px-6 py-3 rounded-full bg-leapfrog-green text-white text-sm font-bold hover:bg-green-700 transition-colors shadow-sm"
          >
            Apply for 2026
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;