import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  id: number;
  value: string;
  label: string;
}

export const statsData: StatItem[] = [
  { id: 1, value: "95", label: "Student Partners Enrolled" },
  { id: 2, value: "80+", label: "Knowledge Sharing Sessions Delivered" },
  { id: 3, value: "5", label: "Student Parteners Hired" },
  { id: 4, value: "2100+", label: "Students Impacted by LSPs" }
];

// ─── Animated counter hook ────────────────────────────────────────────────────
function useCountUp(target: number, triggered: boolean, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3); // cubic ease-out
      setCount(Math.round(ease * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [triggered, target, duration]);

  return count;
}

const StatCard: React.FC<{ stat: StatItem; triggered: boolean }> = ({ stat, triggered }) => {
  const count = useCountUp(parseInt(stat.value), triggered);
  const suffix = stat.value.includes('+') ? '+' : '';

  return (
    <div className="bg-[#1fa857] border border-white/15 rounded-3xl p-8 text-left h-45 flex flex-col justify-center">
      <span className="text-3xl md:text-4xl font-bold text-white block mb-2">
        {count}{suffix}
      </span>
      <span className="text-green-100 text-base font-medium">
        {stat.label}
      </span>
    </div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
const Stats: React.FC = () => {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#169948] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-leapfrog text-white text-4xl lg:text-5xl tracking-tight leading-[1.05] mb-3">
            Building it. Bit by Bit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;