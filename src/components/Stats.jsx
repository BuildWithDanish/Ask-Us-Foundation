import { useEffect, useState } from "react";

const CountUp = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  { num: 500, suffix: "+", label: "Lives Impacted" },
  { num: 5, suffix: "", label: "Active Wings" },
  { num: 3, suffix: "+", label: "Years of Service" },
  { num: 100, suffix: "+", label: "Volunteers" },
];

export default function Stats() {
  return (
    <div className="py-10 md:py-12 bg-[#1A150D]">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-playfair text-4xl md:text-5xl font-bold text-[#F99B2A]">
              <CountUp end={s.num} suffix={s.suffix} />
            </p>
            <p className="text-xs md:text-sm mt-1 tracking-wide text-white/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}