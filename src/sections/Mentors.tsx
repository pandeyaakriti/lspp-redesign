import React from 'react';
import mj from '../assets/mj.jpg';
interface Mentor {
  id: number;
  name: string;
  role: string;
  image: string;
}

// Simulated data based on image_408b9c.jpg
const mentorsData: Mentor[] = [
  { id: 1, name: "Adarsha Regmi", role: "Senior Software Engineer", image: mj },
  { id: 2, name: "Ayush Bajracharya", role: "Senior Software Engineer", image: mj },
  { id: 3, name: "Bijen Shrestha", role: "Software Engineer", image: mj },
  { id: 4, name: "Dimple Saraogi", role: "Software Engineer", image: mj }
];

const MentorCard: React.FC<{ mentor: Mentor }> = ({ mentor }) => {
  return (
    <div className="group relative bg-[#E7F5ED] border border-slate-100 rounded-3xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col h-full">
     
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-5 bg-slate-50">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-full object-cover object-center grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
        />
        {/* Subtle decorative subtle overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info Area */}
      <div className="px-2 pb-2 flex flex-col grow text-left">
        <h3 className="font-sans font-bold text-[18px] leading-tight text-leapfrog-green mb-0.5">
            {mentor.name}
          </h3>
        <h3 className="text-[15px] font-bold leading-tight text-slate-700 mb-0.5">
            {mentor.role}
          </h3>
        
        {/* Optional decorative bottom line that stretches on card hover */}
        <div className="w-8 h-0.5 bg-slate-200 mt-4 rounded-full group-hover:w-16 group-hover:bg-leapfrog-green transition-all duration-300" />
      </div>
    </div>
  );
};

// ─── Main Section Component ───────────────────────────────────────────────────
export const Mentors: React.FC = () => {
  return (
    <section id="mentors" className="relative bg-slate-50 text-slate-900 py-24 px-6 overflow-hidden border-t border-b border-slate-100">
      {/* Greenish Atmospheric Glow */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none transform -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-teal-500/5 rounded-full filter blur-[100px] pointer-events-none transform translate-y-1/2" aria-hidden="true" />
        
      <div className="max-w-6xl mx-auto">
        
        {/* Unified Design Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-header text-slate-900">
            Meet our{' '}
            <span className="text-transparent bg-clip-text bg-leapfrog-green">
              mentors.
            </span>
          </h2>
        </div>

        {/* Improved responsive mentor grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {mentorsData.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mentors;