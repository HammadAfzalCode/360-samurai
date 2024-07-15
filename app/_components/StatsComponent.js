"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function StatsComponent() {
  const containerRef = useRef(null);

 useGSAP(() => {
   if (containerRef.current) {
     const statElements = containerRef.current.querySelectorAll("[data-value]");
     statElements.forEach((el) => {
       if (el.dataset.value) {
         const value = parseInt(el.dataset.value);
         gsap.to(el, {
           textContent: value,
           duration: 3,
           ease: "power1.inOut",
           modifiers: {
             textContent: (value) => `${Math.ceil(parseInt(value))}${el.dataset.suffix || ""}`,
           },
           scrollTrigger: {
             trigger: el,
             start: "top bottom",
             end: "bottom 2%",
             toggleActions: "play reset play reverse",
           },
         });
       }
     });
   }
 }, []);


  return (
    <div
      ref={containerRef}
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
