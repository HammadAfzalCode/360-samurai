"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(1);

  useGSAP(() => {
    gsap.from("#solutions-section", {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#solutions-section",
        start: "top 80%",
      },
    });

    gsap.from("#solutions-title", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#solutions-title",
        start: "top 80%",
      },
    });

    gsap.from("#solutions-buttons", {
      scrollTrigger: {
        trigger: "#solutions-title",
        start: "top bottom",
        end: "top top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const round = Math.round(progress * 10) / 10;
          if (round > 0 && round < 0.4) {
            setActiveTab(1);
          }else if (round > 0.4 && round < 0.7) {
            setActiveTab(2);
          } else if (round > 0.8) {
            setActiveTab(3);
          }
        },
      },
    });

    gsap.from("#solutions-content > *", {
      x: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#solutions-content",
        start: "top 70%",
      },
    });

    gsap.from("#solutions-image", {
      x: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#solutions-image",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section
      id="solutions-section"
      className="container mx-auto py-14 bg-white text-primary space-y-16">
      <div id="solutions-title" className="text-center">
        <span className="line w-20 mr-2 bg-primary"></span>
        EXCELLENCE ACROSS MULTIPLE DISCIPLINES
        <div className="font-neuro text-4xl font-bold">
          <span className="text-secondary">Secure Your</span> Business With us
        </div>
        <div className="text-3xl font-semibold">Your prefered IT solution</div>
      </div>
      <div
        id="solutions-buttons"
        className="flex justify-center flex-wrap gap-4">
        <div
          className={`px-4 py-2 rounded-md transition-all duration-300 hover:bg-secondary/80 cursor-pointer ${
            activeTab == 1 && "bg-secondary text-white"
          }`}>
          IT Infrastructure
        </div>
        <div
          className={`px-4 py-2 rounded-md transition-all duration-300 hover:bg-secondary/80 cursor-pointer ${
            activeTab == 2 && "bg-secondary text-white"
          }`}>
          Cybersecurity
        </div>
        <div
          className={`px-4 py-2 rounded-md transition-all duration-300 hover:bg-secondary/80 cursor-pointer ${
            activeTab == 3 && "bg-secondary text-white"
          }`}>
          Digital Transformation
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-14">
        <div id="solutions-content" className="space-y-10 lg:w-1/2">
          <div>
            <span className="line w-20 mr-2 bg-primary"></span>
            IT Infrastructure
            <div className="font-neuro text-4xl font-bold">
              <span className="text-secondary">Major Expense</span> for
              Companies
            </div>
            <div className="text-3xl font-semibold">
              IT Solutions for Every Buisness
            </div>
          </div>
          <p>
            One of the biggest expenses for companies and enterprises is
            investing in the right IT equipment. We can help you if you're a
            start-up, a large company, or an organization moving to the cloud.
            Our services inculde.
          </p>

          <ul className="space-y-3 px-14 md:px-5 md:columns-2">
            <li className="list-item">Technical IT infrastructure auditing</li>
            <li className="list-item">
              IT Infrastructure Architecture and Development
            </li>
            <li className="list-item">Legacy Platform Migration</li>
            <li className="list-item">IT Infrastructure Management Auditing</li>
            <li className="list-item">IT System Optimization Solutions</li>
            <li className="list-item">Data Center Security Services</li>
            <li className="list-item">Cloud Migration and Integration</li>
          </ul>

          <button className="px-4 py-2 rounded-md transition-all duration-300 bg-primary hover:bg-primary/80 text-white">
            Start Project
          </button>
        </div>

        <Image
          id="solutions-image"
          src="/bg2.png"
          width={800}
          height={800}
          className="h-full lg:w-1/2 aspect-[2/1] lg:aspect-auto object-cover object-center"
        />
      </div>
    </section>
  );
}
