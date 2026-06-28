import React from 'react';
import image from "../assets/images.jpg"
interface ResourceItem {
  id: number;
  title: string;
  description: string;
  actionText: string;
  link: string;
  image: string; 
 
}

const resourcesData: ResourceItem[] = [
  {
    id: 1,
    title: "Event & Insights videos",
    description: "Deep dive into our program frameworks, keynotes, and student panels.",
    actionText: "Watch on YouTube",
    link: "#",
    image: image, 
  },
  {
    id: 2,
    title: "Workshops",
    description: "Recorded hands-on technical sessions led by engineering leads.",
    actionText: "Checkout recordings",
    link: "#",
    image: image,
}, 
{
    id: 3,
    title: "Projects by Partners",
    description: "Explore the live production-ready applications built entirely by our active LSPs.",
    actionText: "Checkout latest projects",
    link: "#",
    image: image,
   
  },
  {
    id: 4,
    title: "Look at the Byte Side",
    description: "Stay in the loop with our bite-sized engineering updates, updates, and student stories on LinkedIn.",
    actionText: "Read on LinkedIn",
    link: "#",
    image:image,
  }
];

export const Resources: React.FC = () => {
  return (
    <section id="resources" className="bg-white text-slate-900 py-24 px-6">
         {/* Greenish Atmospheric Glow */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none transform -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-teal-500/5 rounded-full filter blur-[100px] pointer-events-none transform translate-y-1/2" aria-hidden="true" />
        
      <div className="max-w-6xl mx-auto">
        
        {/* Global Styled Header Area */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-header text-leapfrog-green">
            Resources {' '}
            <span className="text-slate-900">
              for Growth.
            </span>
          </h2>
        </div>

        {/* Creative Editorial Bento-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[22rem]">
          
          {/* Card 1: Event & Insights Videos -> Matched to Green Token [04] */}
  <div className="md:col-span-7 bg-[#E7F5ED] border border-emerald-100/50 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-lg transition-all duration-300">
    <div className="max-w-sm z-10">
      <h3 className="text-2xl font-sans font-bold text-slate-900 tracking-tight mb-2">
        {resourcesData[0].title}
      </h3>
      <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4">
        {resourcesData[0].description}
      </p>
      <a 
        href={resourcesData[0].link} 
        className="inline-flex items-center gap-1 text-sm font-bold text-[#8BD2A7] hover:text-[#5fa87c] hover:gap-2 transition-all duration-200"
      >
        {resourcesData[0].actionText} <span className="text-base">→</span>
      </a>
    </div>
    {/* Asset positioning */}
    <div className="absolute right-0 bottom-0 w-1/2 h-4/5 translate-x-4 translate-y-6 group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-300 ease-out">
      <img src={resourcesData[0].image} alt="" className="w-full h-full object-contain object-bottom drop-shadow-lg" />
    </div>
  </div>

  {/* Card 2: Workshops -> Matched to Red/Pink Token [01] */}
  <div className="md:col-span-5 bg-[#FCE9E9] border border-rose-100/50 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-lg transition-all duration-300">
    <div className="z-10">
      <h3 className="text-2xl font-sans font-bold text-slate-900 tracking-tight mb-2">
        {resourcesData[1].title}
      </h3>
      <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4">
        {resourcesData[1].description}
      </p>
      <a 
        href={resourcesData[1].link} 
        className="inline-flex items-center gap-1 text-sm font-bold text-[#e69f9f] hover:text-[#c47c7c] hover:gap-2 transition-all duration-200"
      >
        {resourcesData[1].actionText} <span className="text-base">→</span>
      </a>
    </div>
    <div className="absolute -right-4 -bottom-10 w-3/5 h-1/2 group-hover:scale-105 transition-transform duration-300 ease-out">
      <img src={resourcesData[1].image} alt="" className="w-full h-full object-contain object-bottom drop-shadow-md" />
    </div>
  </div>

  {/* Card 3: Projects by Partners -> Matched to Blue Token [03] */}
  <div className="md:col-span-5 bg-[#E6EDFB] border border-blue-100/50 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-lg transition-all duration-300">
    <div className="z-10">
      <h3 className="text-2xl font-sans font-bold text-slate-900 tracking-tight mb-2">
        {resourcesData[2].title}
      </h3>
      <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4">
        {resourcesData[2].description}
      </p>
      <a 
        href={resourcesData[2].link} 
        className="inline-flex items-center gap-1 text-sm font-bold text-[#4276DF] hover:text-[#2857b8] hover:gap-2 transition-all duration-200"
      >
        {resourcesData[2].actionText} <span className="text-base">→</span>
      </a>
    </div>
    <div className="absolute -right-6 -bottom-6 w-1/2 h-1/2 group-hover:scale-105 transition-transform duration-300 ease-out">
      <img src={resourcesData[2].image} alt="" className="w-full h-full object-contain object-bottom drop-shadow-md" />
    </div>
  </div>

  {/* Card 4: Look at the Byte Side -> Matched to Yellow/Gold Token [02] */}
  <div className="md:col-span-7 bg-[#FFF8E6] border border-amber-100/50 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-lg transition-all duration-300">
    <div className="max-w-sm z-10">
      <h3 className="text-2xl font-sans font-bold text-slate-900 tracking-tight mb-2">
        {resourcesData[3].title}
      </h3>
      <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4">
        {resourcesData[3].description}
      </p>
      <a 
        href={resourcesData[3].link} 
        className="inline-flex items-center gap-1 text-sm font-bold text-[#FFB004] hover:text-[#d48f00] hover:gap-2 transition-all duration-200"
      >
        {resourcesData[3].actionText} <span className="text-base">→</span>
      </a>
    </div>
    <div className="absolute right-4 bottom-0 w-2/5 h-4/5 translate-y-4 group-hover:translate-y-1 transition-transform duration-300 ease-out">
      <img src={resourcesData[3].image} alt="" className="w-full h-full object-contain object-bottom drop-shadow-lg" />
    </div>
  </div>

        </div>
      </div>
    </section>
  );
};

export default Resources;