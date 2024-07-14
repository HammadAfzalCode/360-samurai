"use client";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function StatsComponent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView && containerRef.current) {
      const statElements = containerRef.current.querySelectorAll("[data-value]");
      statElements.forEach((el) => {
        if (el.dataset.value) {
          const value = parseInt(el.dataset.value);

          let current = 0;
          
          const increment = value / 200;  // Calculating increment value for smooth animation and according to how big or small the value is.
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              clearInterval(timer);
              current = value;
            }
            el.textContent = Math.floor(current) + (el.dataset.suffix || "");
          }, 20);

        }
      });
    }
  }, [inView]);

  return (
    <div
      ref={(el) => {
        containerRef.current = el;
        ref(el); // a function not an actual ref
      }}
      className="w-fit mt-8 sm:mt-20 px-10 py-4 border border-gray-500 rounded-lg flex gap-8 flex-wrap items-center">
      <div className="text-3xl font-semibold">
        <div className="text-secondary" data-value="2000" data-suffix="+">
          0+
        </div>
        Projects
      </div>
      <div className="text-3xl font-semibold">
        <div className="text-secondary" data-value="100" data-suffix="+">
          0+
        </div>
        Clients
      </div>
      <div className="text-3xl font-semibold">
        <div className="text-secondary" data-value="22" data-suffix="+ Years">
          0+ Years
        </div>
        of Experience
      </div>
      <div className="text-3xl font-semibold">
        <div className="text-secondary" data-static="true">
          24/7
        </div>
        Support
      </div>
    </div>
  );
}
