"use client";
import { logos } from "@/app/constants";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function StackSection() {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#stack-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reset play reset"
      },
    });

    tl.from(".stack-title", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    })
      .from(
        ".stack-content",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        "-=0.5"
      )
      
  }, []);

  return (
    <section id="stack-section" className="container mx-auto py-14 space-y-16">
      <div className="text-right">
        <div className="stack-title text-3xl lg:text-5xl">Excellence</div>
        <div className="stack-title text-3xl lg:text-6xl">and Innovation</div>
        <div className="stack-title text-4xl lg:text-7xl text-secondary font-neuro">
          Shaping Tomorrow
        </div>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-8">
        <div className="stack-content space-y-6">
          <div className="text-gray-300 uppercase">
            <span className="line w-16 bg-white mr-2"></span> Our Partners
          </div>
          <h2 className="text-3xl sm:text-4xl  ">
            <div className="font-neuro">
              <span className="text-secondary mr-3">Our</span>
              Stack Partners
            </div>
            to grow your buisness
          </h2>
        </div>
        <div className="stack-content w-full max-w-md">
          From small businesses to industry giants, we provide tailored
          solutions that fit your unique needs. Our expertise spans diverse
          sectors, ensuring personalized service and robust support. Trust us to
          help you grow and thrive in an ever-evolving market.
        </div>
      </div>

      <div className="logo-grid grid grid-cols-2 md:grid-cols-4 gap-6">
        {logos.map(({ id, name, url }) => (
          <div
            className="logo-item w-full px-6 py-4 border-2 border-zinc-800 hover:border-white hover:bg-zinc-900 rounded-lg cursor-pointer transition-all duration-300"
            key={id}>
            <Image
              layout="responsive"
              src={url}
              alt={name}
              className="max-h-12 object-contain object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
