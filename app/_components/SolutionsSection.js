"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const tabContent = {
  it: {
    title: "IT Infrastructure",
    subtitle: "Major Expense",
    description: "IT Solutions for Every Business",
    content:
      "One of the biggest expenses for companies and enterprises is investing in the right IT equipment. We can help you if you're a start-up, a large company, or an organization moving to the cloud. Our services include:",
    listItems: [
      "Technical IT infrastructure auditing",
      "IT Infrastructure Architecture and Development",
      "Legacy Platform Migration",
      "IT Infrastructure Management Auditing",
      "IT System Optimization Solutions",
      "Data Center Security Services",
      "Cloud Migration and Integration",
    ],
    buttonText: "Start Project",
    imageSrc: "/bg2.png",
  },
  cyber: {
    title: "Cybersecurity",
    subtitle: "Protect Your",
    description: "Comprehensive Cybersecurity Solutions",
    content:
      "In today's digital landscape, robust cybersecurity is crucial. We offer cutting-edge solutions to safeguard your business against evolving threats.",
    listItems: [
      "Network Security",
      "Data Encryption",
      "Security Audits and Compliance",
      "Employee Security Training",
      "Cloud Security",
    ],
    buttonText: "Secure Your Business",
    imageSrc: "/cybersecurity.jpg",
  },
  digital: {
    title: "Digital Transformation",
    subtitle: "Revolutionize",
    description: "Embrace the Digital Future",
    content:
      "Stay ahead of the competition with our digital transformation services. We help businesses leverage cutting-edge technologies to optimize operations and drive growth.",
    listItems: [
      "AI and Machine Learning Integration",
      "IoT Solutions",
      "Business Process Automation",
      "Data Analytics and Insights",
      "Digital Strategy Consulting",
      "Legacy System Modernization",
    ],
    buttonText: "Start Your Transformation",
    imageSrc: "/digital-transformation.jpg",
  },
};

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("it");

  useGSAP(() => {
    gsap.from("#solutions-title", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#solutions-title",
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
    });
    
  }, []);

  useGSAP(() => {
    gsap.from("#content *", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#content",
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reset play reverse"
      },
    });
  }, [activeTab]);

  const {
    title,
    subtitle,
    description,
    content,
    listItems,
    buttonText,
    imageSrc,
  } = tabContent[activeTab];

  return (
    <section
      id="solutions-section"
      className="container mx-auto py-14 bg-white text-primary space-y-10">
      <div className="bg-white py-4 space-y-6">
        <div id="solutions-title" className="text-center">
          <span className="line w-20 mr-2 bg-primary"></span>
          EXCELLENCE ACROSS MULTIPLE DISCIPLINES
          <div className="font-neuro text-4xl font-bold">
            <span className="text-secondary">Secure Your</span> Business With us
          </div>
          <div className="text-3xl font-semibold">
            Your preferred IT solution
          </div>
        </div>
        <div
          id="solutions-buttons"
          className="flex justify-center flex-wrap gap-4">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeTab === tab ? "bg-secondary text-white" : ""
              }`}>
              {tabContent[tab].title}
            </button>
          ))}
        </div>
      </div>

      <div id="content">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14">
          <div className="space-y-10 lg:w-1/2">
            <div>
              <span className="line w-20 mr-2 bg-primary"></span>
              {title}
              <div className="font-neuro text-4xl font-bold">
                <span className="text-secondary">
                  {subtitle}
                </span>{" "}
                {activeTab === "it" ? "for Companies" : "Your Business"}
              </div>
              <div className="text-3xl font-semibold">{description}</div>
            </div>
            <p>{content}</p>

            <ul className="space-y-3 px-14 md:px-6 py-3 md:columns-2 ">
              {listItems.map((item, index) => (
                <li key={index} className="list-item p-1  break-words">
                  {item}
                </li>
              ))}
            </ul>

            <button className="px-4 py-2 rounded-md transition-all duration-300 bg-primary hover:bg-primary/80 text-white">
              {buttonText}
            </button>
          </div>
          <Image
            src={imageSrc}
            width={800}
            height={800}
            className="h-full lg:w-1/2 aspect-square object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
