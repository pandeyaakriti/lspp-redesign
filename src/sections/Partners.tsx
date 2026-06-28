import React, { useState } from 'react';
import PartnerCard, { type Partner } from '../components/PartnerCard';
import aakritiImg from '../assets/aakriti.jpeg';
import mj from '../assets/mj.jpg';

type YearKey = '2023' | '2024' | '2025' | '2026';

const partnersByYear: Record<YearKey, Partner[]> = {
  
  '2023': [
    //2023 partners here
  ],
  '2024': [
    // 2024 partners here
  ],
  '2025': [
    // 2025 partners here
  ],
  '2026': [
    {
      name: 'Aakriti Pandey',
      university: 'Kathmandu University',
      batch: 'LSPP 2026',
      description:
        'A Computer Engineering student at KU with a passion for AI, product design, and entrepreneurship. Beyond coding and building ideas, she enjoys writing poetry, exploring philosophy and engaging in long tea-fueled conversations. An adventure seeker at heart, recharging through hiking and chasing adrenaline.',
      image: aakritiImg
    },
    {
      name: 'Arekh Shrestha',
      university: 'KU School of Engineering',
      batch: 'LSPP 2026',
      description:
        'A Computer Engineering student passionate about design and visual storytelling, focused on building visually engaging and functional digital products. Has developed platforms like wePay, Lekha, and Sangam, and enjoy blending creativity with technology to craft meaningful user experiences and support impactful ideas.',
      image: mj, 
    },
    {
      name: 'Nirika Lamichhane',
      university: 'IOE, Thapathali Campus',
      batch: 'LSPP 2026',
      description:
        'Focused on collaboration and communication, making the program feel welcoming to every new member.',
      image: mj,
    },
    {
      name: 'Sworna Dhan Tuladhar',
      university: 'Islington College',
      batch: 'LSPP 2026',
      description:
        'Translated mentorship into steady progress by keeping small goals visible and achievable for peers.',
      image: mj,
    },
  ],
};

const YEARS: YearKey[] = [ '2023', '2024', '2025', '2026'];

// ─── Section ──────────────────────────────────────────────────────────────────
const Partners: React.FC = () => {
  const [activeYear, setActiveYear] = useState<YearKey>('2026');
  const partners = partnersByYear[activeYear];

  return (
    <section id="partners" className="relative overflow-hidden bg-slate-50/50 py-24 lg:py-32 border-t border-b border-slate-100">
      {/* Green glow*/}
      <div
        className="absolute -left-32 bottom-0 w-96 h-96 rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle,#2FCC71 0%,transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Glows */}
      <div
        className="absolute -left-24 -bottom-16 w-96 h-96 rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle,#2FCC71 0%,transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 top-16 w-64 h-64 rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle,#2FCC71 0%,transparent 70%)' }}
        aria-hidden="true"
      />

      

        {/* ── Header row ─────────────────────────────────── */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-5">
          
        {/* Section header */}
        <div className="lg:mb-4 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
          </div>
          <h2 className="font-leapfrog font-black text-slate-900 text-3xl lg:text-5xl tracking-tight leading-[1.05] mb-3">
        Real students.{' '}
        <span className="text-transparent bg-clip-text bg-leapfrog-green">
          Real impact.
        </span>
      </h2>
        </div>

          {/* Year filter pill tabs */}
          <div
            className="flex items-center gap-1.5 rounded-full justify-center border border-slate-200 bg-slate-50 p-1 self-start sm:self-auto"
            role="tablist"
            aria-label="Filter partners by year"
          >
            {YEARS.map((year) => (
              <button
                key={year}
                role="tab"
                aria-selected={activeYear === year}
                onClick={() => setActiveYear(year)}
                className={`rounded-full px-4 py-1.5 text-[11px] font-semibold transition-all duration-200
                  ${
                    activeYear === year
                      ? 'bg-white text-slate-800 border border-leapfrog-green shadow-sm'
                      : 'text-slate-400 hover:text-slate-600 border border-transparent'
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* ── Partner grid ───────────────────────────────── */}
        {partners.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {partners.map((p) => (
              <PartnerCard key={`${p.name}-${activeYear}`} partner={p} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <span className="text-slate-400 text-xl">·</span>
            </div>
            <p className="text-sm font-semibold text-slate-500">
              Partners for {activeYear} coming soon
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Check back once the cohort is announced.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Partners;