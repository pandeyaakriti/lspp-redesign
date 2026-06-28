import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Data extracted from image_4173c5.png
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Why Student Partnership Program?",
    answer: "The program bridges the gap between academic theory and industry reality. Partners get hands-on experience working directly with senior software engineers, building production-ready apps, and hosting large-scale tech community events."
  },
  {
    id: 2,
    question: "What are the key dates for application?",
    answer: "Applications open globally twice a year. Keep an eye on our official communication channels and LinkedIn page ('Look at the Byte Side') for the upcoming cohort timeline."
  },
  {
    id: 3,
    question: "Who can participate?",
    answer: "Any active university student passionate about software engineering, community building, and knowledge sharing. No matter your year or major, if you can build and love to help others grow, you belong here."
  },
  {
    id: 4,
    question: "What are the traits we value?",
    answer: "Curiosity, consistency, accountability, and empathy. We heavily value self-starters who take initiative to build internal tools and organize impactful workshops for their peers."
  }
];

const AccordionItem: React.FC<{ faq: FAQItem; isOpen: boolean; onToggle: () => void }> = ({ faq, isOpen, onToggle }) => {
  return (
    <div 
      className={`bg-white border rounded-2xl transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen 
          ? 'border-emerald-500/30 shadow-md shadow-emerald-500/5 bg-linear-to-br from-white to-slate-50/50' 
          : 'border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 font-sans font-bold text-slate-900 text-base md:text-lg tracking-tight select-none cursor-pointer group"
      >
        <span className={`transition-colors duration-200 ${isOpen ? 'text-leapfrog-green' : 'group-hover:text-slate-700'}`}>
          {faq.question}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border bg-slate-50 border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-all ${isOpen ? 'rotate-180 border-emerald-100 bg-emerald-50 text-leapfrog-green' : 'text-slate-500'}`}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2.5" 
            stroke="currentColor" 
            className="w-4 h-4 transition-transform duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>

      {/* Animated Dropdown Area */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 md:px-7 pb-6 font-sans text-sm md:text-base font-medium text-slate-500 leading-relaxed max-w-3xl">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── Main FAQ Section Component ───────────────────────────────────────────────
export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-slate-50 text-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Sticky Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-12 text-left">
            <h2 className="section-header text-slate-900 mb-4">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-leapfrog-green">
                Questions.
              </span>
            </h2>
          </div>

          {/* Right Accordion List Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;