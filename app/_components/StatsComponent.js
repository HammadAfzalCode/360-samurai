import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function StatsComponent() {
  const statsRef = useRef(null);

  useGSAP(() => {
    const statElements = statsRef.current.querySelectorAll("[data-stat-value]");

    statElements.forEach((el) => {
      const value = el.dataset.statValue;
      const suffix = el.dataset.statSuffix || "";

      gsap.to(el, {
        textContent: value,
        duration: 4,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play none none none"
        },
        onUpdate: function () {
          this.targets()[0].innerHTML =
            Math.ceil(this.targets()[0].textContent) + suffix;
        },
      });
    });
  }, []);

  return (
    <div
      ref={statsRef}
      className="w-fit mt-8 sm:mt-20 px-10 py-4 border border-gray-500 rounded-lg flex gap-8 flex-wrap items-center">
      <div className="text-3xl font-semibold">
        <div
          className="text-secondary"
          data-stat-value="2000"
          data-stat-suffix="+">
          2000+
        </div>
        Projects
      </div>
      <div className="text-3xl font-semibold">
        <div
          className="text-secondary"
          data-stat-value="100"
          data-stat-suffix="+">
          100+
        </div>
        Clients
      </div>
      <div className="text-3xl font-semibold">
        <div
          className="text-secondary"
          data-stat-value="22"
          data-stat-suffix="+ Years">
          22+ Years
        </div>
        of Experience
      </div>
      <div className="text-3xl font-semibold">
        <div className="text-secondary">24/7</div>
        Support
      </div>
    </div>
  );
}
