import React from 'react';
import heroImage from '../assets/hero_image.webp';
import lspplogo from '../assets/student-partnership-logo.svg';
const stats = [
  { value: '500+', label: 'Student Partners' },
  { value: '120+', label: 'KSS Sessions' },
  { value: '60+', label: 'Partners Hired' },
  { value: '5000+', label: 'Students Impacted' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white/95">

      {/* Green radial glow — left */}
      <div
        className="absolute -left-50 top-1/4 w-150 h-150 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, #2FCC71 10%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6">
            {/* Headline — the signature typographic split */}
            <div className="space-y-1">
              <img src={lspplogo} alt="LSPP Logo" className="w-45 h-auto mb-4" />
              <h1 className="font-leapfrog font-black text-leapfrog-green leading-[1.05] text-5xl lg:text-7xl tracking-tight">
                Learn.
                <br />
                Lead.
              </h1>
              <h1
                className="font-leapfrog font-black leading-[1.05] text-5xl lg:text-7xl tracking-tight"
                style={{
                  WebkitTextStroke: '2px #2E7D32',
                  color: 'transparent',
                }}
              >
                Grow.
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
            Leapfrog Student Partnership Program bridges the gap between
            academia and industry — giving Nepal's best engineering students
            real skills, real mentorship, and a real career head-start.
            </p>
          </div>

          {/* Right: Image reveal card */}
          <div className="group relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(13,17,23,0.12)]">
            <div className="relative w-full overflow-hidden">
              <img
                src={heroImage}
                alt="LSPP program highlight"
                className="block h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-white transition-opacity duration-300 group-hover:opacity-0">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-white/75">
                  Hover to reveal stats
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/85">
                  Explore the program snapshot and key outcomes by hovering over the image.
                </p>
              </div>
            </div>

            <div className="absolute inset-0 translate-y-full backdrop-blur-md p-4 sm:p-5 lg:p-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <div className="absolute top-0 right-0 w-56 h-56 opacity-10 rounded-full pointer-events-none" aria-hidden="true" />

              <div className="relative h-full flex flex-col gap-4 lg:gap-5">
                <div>
                  <p className="text-[13px] font-semibold tracking-[0.3em] uppercase text-white mb-3 lg:mb-4">
                    Program at a glance
                  </p>

                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    {stats.map(({ value, label }) => (
                      <div key={label} className="flex min-w-0 flex-col gap-0.5 rounded-2xl border border-slate-200 bg-white/85 px-3 py-3 lg:px-4 lg:py-4 shadow-sm">
                        <span className="text-2xl lg:text-3xl font-black leading-none text-leapfrog-green tabular-nums">
                          {value}
                        </span>
                        <span className="text-[11px] lg:text-xs text-slate-500 leading-tight">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-3 gap-2 border-t border-slate-200 pt-4 lg:pt-5">
                  <div>
                    <p className="text-[13px] text-white">Duration</p>
                    <p className="text-xs lg:text-sm font-semibold text-white leading-tight">6 months · Apr – Sep</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-white">Commitment</p>
                    <p className="text-xs lg:text-sm font-semibold text-white leading-tight">2 sessions / month</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-white">Cost</p>
                    <p className="text-xs lg:text-sm font-semibold text-white leading-tight">Free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;