"use client"
import { useRef } from "react";
import Image from "next/image";
import StatsComponent from "./StatsComponent";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const heroContentRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: heroContentRef.current,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse"
      }
    });

    tl.from("#hero-content > *, #hero-content > h2 > *", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1.4,
      ease: "power3.out"
    });

    tl.from(imageRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");

  }, []);


  return (
    <section className="container mx-auto flex items-center overflow-x-hidden">
      <div className="py-20">
        <div id="hero-content" ref={heroContentRef} className="flex flex-col gap-6">
          <h2 className="text-xl text-gray-400 sm:text-2xl space-y-3">
            Turning Your Challenges{" "}
            <div className="text-3xl sm:text-5xl lg:text-6xl font-neuro tracking-wide text-secondary">
              Into Innovative <span className="text-white">Solutions</span>
            </div>
            <div className=" text-2xl sm:text-3xl md:text-5xl text-white decoration-secondary underline underline-offset-8 ">
              Samurai Systems
            </div>
          </h2>
          <p className="text-lg text-gray-400 tracking-wide">
            Samurai -Team of solution architects, developers and consultants
            having only one aim in mind{" "}
            <span className="text-white ml-1 lg:block">
              “deliver the best, nothing else”
            </span>
          </p>
          <div
            className="flex items-center flex-wrap gap-3 font-semibold tracking-wide">
            {/* <button className="px-4 py-2 rounded-md transition-all duration-300 bg-secondary hover:bg-secondary/80">
              Get a Quote
            </button> */}
            <button className="px-4 py-2 rounded-md transition-all duration-300 hover:bg-secondary border border-secondary">
              Our Services
            </button>
          </div>
        </div>
        <StatsComponent />
      </div>
      <Image
        ref={imageRef}
        src="/assets/logo_big.svg"
        height={1100}
        width={1100}
        className="absolute -right-[20%] top-0 lg:w-3/6"
      />
    </section>
  );
}
