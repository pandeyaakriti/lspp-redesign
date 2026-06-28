import React from 'react';

export interface Partner {
  name: string;
  university: string;
  image: string;
  description: string;
  batch: string; 
}

const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => {
  return (
    <div className="group relative overflow-hidden rounded-[20px] border-[1.5px] border-slate-200 bg-[#E6EDFB] transition-all duration-300 hover:-translate-y-1.5 hover:border-leapfrog-green hover:shadow-[0_20px_52px_rgba(46,125,50,0.13)]">
      <div className="relative aspect-3/4 w-full overflow-hidden bg-slate-100"> 
        <img
          src={partner.image}
          alt={partner.name}
          className="h-full w-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105 group-hover:blur-sm group-hover:brightness-[0.35]"
        />

        <div className="absolute inset-0 bg-#0D1117 opacity-0 transition-opacity duration-300 group-hover:opacity-70 pointer-events-none" />

        <div
          className="absolute -top-15 -right-15 h-50 w-50 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2E7D32 0%, transparent 80%)' }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 translate-y-2.5 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none">

          {/* Name */}
          <h3 className="text-[18px] font-black leading-tight text-white mb-0.5">
            {partner.name}
          </h3>

          {/* University */}
          <p className="mb-2.5 flex items-center gap-1.5 text-[12px] text-slate-400">
            {partner.university}
          </p>

          {/* Description */}
          <p className="text-[12px] leading-[1.55] text-slate-300">
            {partner.description}
          </p>
        </div>
      </div>

      <div className="px-4 py-3.5 transition-opacity duration-200 group-hover:opacity-0">
        <p className="text-[16px] font-black leading-tight text-leapfrog-green mb-0.5">
          {partner.name}
        </p>
        <p className="flex items-center gap-1.5 text-[10px] font-medium text-slate-500">
          {partner.university}
        </p>
      </div>

    </div>
  );
};

export default PartnerCard;