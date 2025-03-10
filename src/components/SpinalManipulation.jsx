import { FaBox, FaCogs, FaGift } from "react-icons/fa";
import logo from "../assets/logo_sil.svg";
import graphic from "../assets/bl10.webp";
import graphic2 from "../assets/h1-12.webp";
import smBg from "../assets/sm.jpg";
import graphic3 from "../assets/h1-11.webp";
import React from "react";

const SpinalManipulation = () => {
  return (
    <div className="w-full min-h-screen p-4 md:p-6 lg:p-8">
      {/* Main container with responsive padding and margin */}
      <div className="relative w-full max-w-[2000px] mx-auto mt-12 sm:mt-24 lg:mt-32 mb-8 bg-[#F1F2F2] rounded-3xl border border-[#DADEE2] shadow-lg">
        {/* Background graphics */}
        <div className="absolute top-0 left-0 w-1/4 opacity-50 pointer-events-none">
          <img src={graphic} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-1/4 opacity-50 pointer-events-none">
          <img src={graphic} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col w-full gap-8 p-6 md:p-8 lg:p-12">
          {/* Header section */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center lg:items-start">
            <div className="flex flex-col gap-6 flex-1">
              {/* Logo and tagline */}
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
                <span className="text-base text-[#051b2e]">
                  Your Health is Our Top Goal
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#051b2e]">
                Spinal Manipulation
              </h1>

              {/* Description */}
              <p className="text-base text-[#051B2E]">
                Spinal manipulation, a common chiropractic treatment, is a
                passive technique where a therapist applies a targeted manual
                impulse or thrust to a joint, typically near the end of its
                passive range of motion.
              </p>
            </div>

            {/* Main image */}
            <div className="w-full lg:w-1/2 xl:w-1/4">
              <img
                src={smBg}
                alt="Spinal Manipulation"
                className="w-full h-auto rounded-3xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              />
            </div>
          </div>
          <div className="w-full h-px bg-[#c1dcff]" />
          {/* Additional description */}
          <p className="text-base text-[#051B2E] max-w-full">
            This often results in an audible "crack," which is widely attributed
            to the cavitation of spinal facet joints. Cavitation occurs when gas
            bubbles form in the joint due to lower-than-normal pressure, and the
            subsequent rise in pressure causes the bubble to implode.
          </p>

          {/* Cards section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {/* Mechanism Card */}
            <div className="relative bg-[#ffcb53e2] rounded-3xl p-6 md:p-8 shadow-md min-h-[24rem] group">
              <div className="absolute right-0 bottom-0 pointer-events-none">
                <img
                  src={graphic3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#051B2E]">
                  Mechanism
                </h3>
                <div className="bg-[#051B2E] w-14 h-14 rounded-xl flex items-center justify-center">
                  <FaCogs className="text-2xl text-white group-hover:animate-bounce" />
                </div>
              </div>
              <div className="h-px bg-[#a973317f] mb-4" />
              <p className="text-base text-[#051B2E] z-10 relative">
                The primary characteristic of spinal manipulation techniques is
                achieving the popping or cracking sound in synovial joints. This
                audible release is thought to result from the implosion of gas
                bubbles within the joint, a phenomenon known as cavitation.
              </p>
            </div>

            {/* Treatment Package Card */}
            <div className="relative bg-[#051B2E] rounded-3xl p-6 md:p-8 shadow-md min-h-[24rem] group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Treatment Package
                </h3>
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center">
                  <FaBox className="text-2xl text-[#051B2E] group-hover:animate-bounce" />
                </div>
              </div>
              <div className="h-px bg-[#c1dcff] mb-4" />
              <p className="text-base text-white">
                Treatment plans can be tailored to individual needs, with
                multiple-session packages available for addressing chronic
                conditions effectively.
              </p>
            </div>

            {/* Benefits Card */}
            <div className="relative bg-[#d7e9f3] rounded-3xl p-6 md:p-8 shadow-md min-h-[24rem] group md:col-span-2 lg:col-span-1">
              <div className="absolute right-0 bottom-0 pointer-events-none">
                <img
                  src={graphic2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#051B2E]">
                  Benefits
                </h3>
                <div className="bg-[#051B2E] w-14 h-14 rounded-xl flex items-center justify-center">
                  <FaGift className="text-2xl text-white group-hover:animate-bounce" />
                </div>
              </div>
              <div className="h-px bg-[#a973317f] mb-4" />
              <div className="relative z-10">
                <p className="text-base text-[#051B2E] mb-4">
                  Spinal manipulations can provide significant relief from back
                  pain by:
                </p>
                <ul className="space-y-3">
                  {[
                    "Reducing pressure on sensitive nerves",
                    "Increasing joint range of motion",
                    "Restoring blood flow",
                    "Reducing muscle tension",
                    "Stimulating the release of endorphins",
                  ].map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-[#051B2E]"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinalManipulation;
