"use client";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExcellenceSection() {
  useGSAP(() => {
    gsap.from("#excellence-section", {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#excellence-section",
        start: "top 80%",
      },
    });

    gsap.from("#left-column > div", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#left-column",
        start: "top 70%",
      },
    });

    gsap.from("#right-column *", {
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#right-column",
        start: "top 70%",
      },
    });
  }, []);
  return (
    <section
      id="excellence-section"
      className="container mx-auto py-14 space-y-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-14 md:*:w-1/2 ">
        <div id="left-column" className="space-y-20">
          <div className="space-y-8">
            <div>
              <div>
                <span className="line bg-secondary w-16 bg-gray mr-2"></span>
                Cybersecurity
              </div>
              <div className="text-2xl font-semibold">
                GRC Consultation & Implementation
              </div>
            </div>
            <div className="text-xl text-gray-700">
              Investing in Governance, Risk, and Compliance (GRC) is critical to
              long-term growth, value, and sustainability. However, right-sizing
              your effort to meet regulations...
            </div>
            <div>
              <Link
                href="/cybersecurity"
                className="text-secondary hover:text-secondary/80 font-semibold">
                Explore more
              </Link>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <div>
                <span className="line bg-secondary w-16 bg-gray mr-2"></span>
                Digital Transformation
              </div>
              <div className="text-2xl font-semibold">
                Digital Led Strategic Transformation
              </div>
            </div>
            <div className="text-xl text-gray-700">
              Investing in Governance, Risk, and Compliance (GRC) is critical to
              long-term growth, value, and sustainability. However, right-sizing
              your effort to meet regulations...
            </div>
          </div>
        </div>
        <div id="right-column" className="space-y-10">
          <div>
            <div>
              <span className="line w-20 mr-2 bg-primary"></span>
              EXCELLENCE ACROSS MULTIPLE DISCIPLINES
            </div>
            <div className="text-4xl font-bold">
              <div className="font-neuro ">
                <span className="text-secondary mr-3">Solutions To</span>
                Your Needs
              </div>
              to grow your buisness
            </div>
          </div>
          <p className="text-balance">
            From small businesses to industry giants, we provide tailored
            solutions that fit your unique needs. Our expertise spans diverse
            sectors, ensuring personalized service and robust support. Trust us
            to help you grow and thrive in an ever-evolving market.
          </p>
          <div>
            <button
              className="block px-4 py-2 rounded-md transition-all duration-300 bg-primary hover:bg-primary/80 text-white"
              style={{ display: "inline-block", opacity: 1, translate: "50px" }}>
              Start Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
