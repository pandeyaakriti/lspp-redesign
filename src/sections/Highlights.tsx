import React from 'react';
import hlone from "../assets/highlights/2025_1.webp"
import hltwo from "../assets/highlights/2025_2.webp"
import hlthree from "../assets/highlights/2025_3.webp"
import hlfour from "../assets/highlights/2025_4.webp"
import hlfive from "../assets/highlights/2025_5.webp"
import hlsix from "../assets/highlights/2025_6.webp"
import hlseven from "../assets/highlights/2025_7.webp"
interface HighlightImage {
  id: number;
  src: string;
  alt: string;
  gridClass: string;
}

const highlightsData: HighlightImage[] = [
  { id: 1, src: hlone, alt: "2025 Highlight 1", gridClass: "md:col-span-2 md:row-span-1" },
  { id: 2, src: hltwo, alt: "2025 Highlight 2", gridClass: "md:col-span-1 md:row-span-1" },
  { id: 3, src: hlthree, alt: "2025 Highlight 3", gridClass: "md:col-span-1 md:row-span-1" },
  { id: 4, src: hlfour, alt: "2025 Highlight 4", gridClass: "md:col-span-1 md:row-span-2" }, 
  { id: 5, src: hlfive, alt: "2025 Highlight 5", gridClass: "md:col-span-1 md:row-span-1" },
  { id: 6, src: hlsix, alt: "2025 Highlight 6", gridClass: "md:col-span-2 md:row-span-1" },
  { id: 7, src: hlseven, alt: "2025 Highlight 7", gridClass: "md:col-span-1 md:row-span-1" }
];

export const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="bg-white text-slate-900 py-24 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-header text-slate-900">
            Pixel-Perfect{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-leapfrog-green to-emerald-600">
              Highlights.
            </span>
          </h2>
          <p className="font-sans font-medium text-slate-500 text-base md:text-lg mt-4">
            Some nostalgic memoREELs from the Student Partnership Program.
          </p>
        </div>

        {/* Asymmetric Mosaic Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[16rem] md:auto-rows-[18rem] group/gallery">
          {highlightsData.map((img) => (
            <div 
              key={img.id}
              className={`relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-sm transition-all duration-500 ease-out hover:scale-[1.015] hover:shadow-xl hover:opacity-100 group-hover/gallery:opacity-75 ${img.gridClass}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                loading="lazy"
              />
              {/* Subtle inner linear shadow to blend layout edges cleanly */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Highlights;