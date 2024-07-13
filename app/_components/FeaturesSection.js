"use client"
import { featuresList, partners } from "@/app/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function FeaturedSection() {

  useGSAP(() => {
     gsap.from("#features-section", {
       opacity: 0,
       duration: 2,
       scrollTrigger: {
         trigger: "#features-section",
         start: "top 90%",
       },
     });

     gsap.from("#features-title", {
       y: 50,
       opacity: 0,
       duration: 1.5,
       scrollTrigger: {
         trigger: "#features-title",
         start: "top 90%",
       },
     });

     gsap.from("#features-list > div", {
       y: 50,
       opacity: 0,
       duration: 0.8,
       stagger: 0.5,
       scrollTrigger: {
         trigger: "#features-list",
         start: "top 80%",
       },
     });
   
  },[])

  return (
    <div
      id="features-section"
      className="container mx-auto  border border-[#1a1a1a] py-8 rounded-lg bg-gradient-to-tr from-primary to-[#131313] space-y-24">
      <div
        id="features-title"
        className="flex items-start justify-between flex-wrap gap-8  px-12">
        <div className="space-y-6">
          <div className="text-gray-300 uppercase">
            <span className="line w-16 bg-white mr-2"></span> What sets us
            apart?
          </div>
          <h2 className="text-3xl sm:text-4xl  ">
            <div className="font-neuro">
              <span className="text-secondary">Bridging The Gap</span> Between
            </div>
            you and your audience
          </h2>
        </div>

        <div className="w-full max-w-md">
          We not only deliver high quality enterprise solutions but also provide
          seamless integration with back office system and mobile interface as a
          single stack.
        </div>
      </div>

      <div
        id="features-list"
        className="px-16 flex justify-center md:justify-evenly flex-wrap gap-x-8 gap-y-20">
        {featuresList.map(({ id, title, description }) => (
          <div key={id}>
            <div className="w-full max-w-72 relative z-10">
              <div className="absolute -z-10 -top-10 -left-16 text-8xl font-sans font-bold text-[#2d2d2d]/50 ">
                {id < 10 ? `0${id}` : id}
              </div>
              <div className="space-y-8">
                <div className="font-semibold text-2xl">{title}</div>
                <div className="text-sm text-gray-300">{description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="overflow-hidden relative ">
        <div id="partners" className="flex gap-4 animate-carousel">
          {[...partners, ...partners].map(({ id, name, url }, index) => (
            <div
              className="flex-shrink-0 w-1/2 md:w-1/5 border-2 px-6 py-4 border-zinc-800 hover:border-white hover:bg-zinc-900 rounded-lg cursor-pointer transition-all duration-300"
              key={`${id}#${index}`}>
              <Image
                width={200}
                height={100}
                src={url}
                alt={name}
                className="max-h-12 object-contain object-center"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zinc-900/50 via-transparent to-zinc-900/50"></div>
      </div>
    </div>
  );
}
