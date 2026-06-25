import React from 'react';

export interface Partner {
  name: string;
  university: string;
  image: string;
  description: string;
}

const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_rgba(13,17,23,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-leapfrog-green/40 hover:shadow-[0_28px_72px_rgba(46,125,50,0.14)]">
      {/* Image */}
      <div className="relative aspect-4/5 w-full overflow-hidden">
        <img
          src={partner.image}
          alt={partner.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div
          className="absolute top-0 right-0 h-36 w-36 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2FCC71 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-white opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-white/70">
            Student partner
          </p>
          <h3 className="mt-2 text-lg font-black leading-tight text-white">
            {partner.name}
          </h3>
          <p className="mt-1 text-xs text-white/75 flex items-center gap-1.5">
            <span className="inline-block h-1 w-1 rounded-full bg-leapfrog-green" />
            {partner.university}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-white/85">
            {partner.description}
          </p>
        </div>
      </div>

      {/* Info below image */}
      <div className="px-4 py-4">
        <p className="text-[15px] font-black text-slate-900 leading-tight mb-0.5">
          {partner.name}
        </p>
        <p className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
          <span className="inline-block w-1 h-1 rounded-full bg-leapfrog-green" />
          {partner.university}
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;