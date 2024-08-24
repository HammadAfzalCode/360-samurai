"use client";
import {
  Navbar,
  HeroSection,
  FeaturesSection,
  ExcellenceSection,
  SolutionsSection,
  StackSection,
  CallToAction,
  Footer,
} from "@/app/_components";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-white font-clash tracking-wide">
      <div className="*:px-4 py-4 space-y-10 relative overflow-hidden">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <div className="bg-white text-primary space-y-10">
          <ExcellenceSection />
          <SolutionsSection />
        </div>
        <StackSection />

        <div className="bg-white text-primary space-y-10">
          <CallToAction />
          <Footer />
        </div>

        <div className="text-center">
          All Rights Reserved | Copyrights &copy;2024
        </div>
      </div>
    </div>
  );
}
