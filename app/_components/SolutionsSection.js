"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionsSection() {
  const containerRef = useRef();

  const [itRef, itInView] = useInView({ threshold: 0.3, root: containerRef.current });
  const [cyberRef, cyberInView] = useInView({ threshold: 0.3, root: containerRef.current });
  const [digitalRef, digitalInView] = useInView({ threshold: 0.3, root: containerRef.current });


  useGSAP(() => {
    gsap.from("#content *", {
      opacity: 0,
      y: 20,
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

  }, []);

  return (
    <>
      <section
        ref={containerRef}
        id="solutions-section"
        className="-m-6 px-20 min-h-[500px] max-h-[105vmin]  overflow-y-auto bg-white text-primary space-y-16">
        <div className="bg-white py-10 space-y-8 sticky top-0 z-50">
          <div id="solutions-title" className="text-center">
            <span className="line w-20 mr-2 bg-primary"></span>
            EXCELLENCE ACROSS MULTIPLE DISCIPLINES
            <div className="font-neuro text-4xl font-bold">
              <span className="text-secondary">Secure Your</span> Business With
              us
            </div>
            <div className="text-3xl font-semibold">
              Your prefered IT solution
            </div>
          </div>
          <div
            id="solutions-buttons"
            className="flex justify-center flex-wrap gap-4">
            <div
              data-active={itInView}
              className={`px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${
                itInView && !cyberInView ? "bg-secondary text-white" : ""
              }`}>
              IT Infrastructure
            </div>
            <div
              data-active={cyberInView}
              className={`px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${
                cyberInView && !digitalInView ? "bg-secondary text-white" : ""
              }`}>
              Cybersecurity
            </div>
            <div
              data-active={digitalInView}
              className={`px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${
                digitalInView ? "bg-secondary text-white" : ""
              }`}>
              Digital Transformation
            </div>
          </div>
        </div>

        <div id="content" className="overflow-y-auto h-full">
          <div
            ref={itRef}
            className="h-full flex flex-col-reverse lg:flex-row gap-14">
            <div className="space-y-10 lg:w-1/2">
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
                start-up, a large company, or an organization moving to the
                cloud. Our services inculde.
              </p>

              <ul className="space-y-3 px-14 md:px-5 md:columns-2">
                <li className="list-item">
                  Technical IT infrastructure auditing
                </li>
                <li className="list-item">
                  IT Infrastructure Architecture and Development
                </li>
                <li className="list-item">Legacy Platform Migration</li>
                <li className="list-item">
                  IT Infrastructure Management Auditing
                </li>
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

          <div
            ref={cyberRef}
            className="h-full pt-20 flex flex-col-reverse lg:flex-row gap-14">
            <div id="cybersecurity-content" className="space-y-10 lg:w-1/2">
              <div>
                <span className="line w-20 mr-2 bg-primary"></span>
                Cybersecurity
                <div className="font-neuro text-4xl font-bold">
                  <span className="text-secondary">Protect Your</span> Digital
                  Assets
                </div>
                <div className="text-3xl font-semibold">
                  Comprehensive Cybersecurity Solutions
                </div>
              </div>
              <p>
                In today's digital landscape, robust cybersecurity is crucial.
                We offer cutting-edge solutions to safeguard your business
                against evolving threats.
              </p>
              <ul className="space-y-3 px-14 md:px-5 md:columns-2">
                <li className="list-item">Network Security</li>
                <li className="list-item">Data Encryption</li>
                <li className="list-item">Threat Detection and Response</li>
                <li className="list-item">Security Audits and Compliance</li>
                <li className="list-item">Employee Security Training</li>
                <li className="list-item">Cloud Security</li>
              </ul>
              <button className="px-4 py-2 rounded-md transition-all duration-300 bg-primary hover:bg-primary/80 text-white">
                Secure Your Business
              </button>
            </div>
            <Image
              id="cybersecurity-image"
              src="/cybersecurity.jpg"
              width={800}
              height={800}
              className="h-full lg:w-1/2 aspect-[2/1] lg:aspect-auto object-cover object-center rounded-lg"
            />
          </div>

          <div
            ref={digitalRef}
            className={`h-full py-20 flex flex-col-reverse lg:flex-row gap-14`}>
            <div
              id="digital-transformation-content"
              className="space-y-10 lg:w-1/2">
              <div>
                <span className="line w-20 mr-2 bg-primary"></span>
                Digital Transformation
                <div className="font-neuro text-4xl font-bold">
                  <span className="text-secondary">Revolutionize</span> Your
                  Business
                </div>
                <div className="text-3xl font-semibold">
                  Embrace the Digital Future
                </div>
              </div>
              <p>
                Stay ahead of the competition with our digital transformation
                services. We help businesses leverage cutting-edge technologies
                to optimize operations and drive growth.
              </p>
              <ul className="space-y-3 px-14 md:px-5 md:columns-2">
                <li className="list-item">
                  AI and Machine Learning Integration
                </li>
                <li className="list-item">IoT Solutions</li>
                <li className="list-item">Business Process Automation</li>
                <li className="list-item">Data Analytics and Insights</li>
                <li className="list-item">Digital Strategy Consulting</li>
                <li className="list-item">Legacy System Modernization</li>
              </ul>
              <button className="px-4 py-2 rounded-md transition-all duration-300 bg-primary hover:bg-primary/80 text-white">
                Start Your Transformation
              </button>
            </div>
            <Image
              id="digital-transformation-image"
              src="/digital-transformation.jpg"
              width={800}
              height={800}
              className="h-full lg:w-1/2 aspect-[2/1] lg:aspect-auto object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </section>
      <div className="p-10"></div>
    </>
  );
}
