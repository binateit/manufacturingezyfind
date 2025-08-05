import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const statistics = [
  { value: 50, label: 'Requests' },
  { value: 20, label: 'Providers' },
  { value: 45, label: 'Sales' },
];

const StatsCounter: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animate) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    const node = containerRef.current;
    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, [animate]);

  return (
    <div ref={containerRef} className="container mx-auto py-6">
      <div className="flex flex-row justify-evenly max-sm:flex-col max-sm:gap-6">
        {statistics.map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-5xl max-md:text-3xl font-extrabold text-primary">
              {animate ? (
                <CountUp start={0} end={stat.value} duration={3} separator="," />
              ) : (
                0
              )}
              K+
            </p>
            <p className="text-base mt-1 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
