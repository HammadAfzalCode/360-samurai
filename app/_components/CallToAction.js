"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export default function CallToAction() {
  useGSAP(() => {
    gsap.from(".cta-element", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#call-to-action",
        start: "top 80%",
      },
    });

    gsap.from(".cta-button", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#call-to-action",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section
      id="call-to-action"
      className="container mx-auto py-24 space-y-10 flex flex-col justify-center items-center">
      <div className="text-center">
        <span className="cta-element line w-20 mr-2 bg-primary"></span>
        <span className="cta-element">Elevate you</span>
        <div className="cta-element font-neuro text-4xl font-bold">
          <span className="text-secondary">Ready To</span> Evaluate Your
        </div>
        <div className="cta-element text-3xl font-semibold">
          Digital Strategy
        </div>
      </div>
      <p className="cta-element max-w-3xl text-center">
        We want your campaigns to thrive. Digital Remedy connects the right data
        to the highest performing channels to nail your dream KPIs—so you can
        feel confident your media spend is worth every penny.
      </p>
      <button className="cta-button px-4 py-2 rounded-md transition-all duration-300 bg-primary hover:bg-primary/80 text-white">
        Book Consultation
      </button>
    </section>
  );
}
