import YoutubeBg from "./YoutubeBg";
import women from "../assets/women.jpg";
import men from "../assets/mens health.jpg";
import chronic from "../assets/chronic2.jpg";
import eye from "../assets/eye.jpg";
import digestive from "../assets/disgestive.jpg";
import neurological from "../assets/neurological.jpg";
import musculoskeletal from "../assets/muskoskeletal.jpg";
import cardiovascular from "../assets/cardiovascular.jpg";
import pediatric from "../assets/pediatric.jpg";
import preventative from "../assets/preventative.jpg";
import cancer from "../assets/cancer.jpg";
import respiratory from "../assets/resp2.jpg";
import logo from "../assets/logo_sil.svg";
import rhsBg from "../assets/1.png";
import rhsBg2 from "../assets/2.png";
import youtubebg from "../assets/youtubebg.jpg";

import { useState, useRef } from "react";
import {
  FaFemale,
  FaMale,
  FaBaby,
  FaEye,
  FaLungs,
  FaBrain,
  FaRibbon,
  FaHandsHelping,
  FaDumbbell,
  FaHeart,
  FaThermometerHalf,
  FaBalanceScale,
  FaUtensils,
} from "react-icons/fa";

const options = [
  {
    label: "Women’s Health",
    image: women,
    content:
      "Menstrual Irregularities, Menopause, Conception Difficulties, Pregnancy, Childbirth, Lactation Difficulties, Postpartum, Ovarian and Uterine Problems, PCOD/PCOS.",
    icon: FaFemale,
  },
  {
    label: "Men’s Health",
    image: men,
    content: "Prostate, Infertility, and Impotence.",
    icon: FaMale,
  },
  {
    label: "Chronic and Systemic Conditions",
    image: chronic,
    content:
      "Chronic Fatigue, High Blood Pressure, Obesity, Kidney Stones, Chronic Kidney Disease (CKD).",
    icon: FaThermometerHalf,
  },
  {
    label: "Digestive and Gastrointestinal Health",
    image: digestive,
    content:
      "Indigestion, Constipation, Irritable Bowel Syndrome, Stomach Ulcers, Gallstones, Diarrhea, Nausea, Vomiting.",
    icon: FaUtensils,
  },
  {
    label: "Diseases of Eyes",
    image: eye,
    content:
      "We also have got wonderful results in vision problems, retina detachment, and other eye ailments. Certain cases where no hope was given have been cured by our treatment. Details are mentioned in our success stories.",
    icon: FaEye,
  },
  {
    label: "Respiratory and Allergic Conditions",
    image: respiratory,
    content: "Allergies, Asthma, Sinusitis, Bronchitis",
    icon: FaLungs,
  },
  {
    label: "Diseases of the Nervous System",
    image: neurological,
    content:
      "Insomnia, Anxiety, Depression, Dizziness, Stress, Nerve Paralysis, Neuralgia, Facial Paralysis/Bell’s Palsy, Headaches/Migraines.",
    icon: FaBrain,
  },
  {
    label: "Musculoskeletal and Pain Disorders",
    image: musculoskeletal,
    content:
      "Back Pain, Sciatica, Stiff Shoulders and Neck, Sprains/Strains, Painful Joints, Tennis Elbow, Carpal Tunnel Syndrome, Lumbago, Fibromyalgia, Rheumatism, Arthritis.",
    icon: FaDumbbell,
  },
  {
    label: "Cardiovascular Health",
    image: cardiovascular,
    content: "Angina, High Blood Pressure.",
    icon: FaHeart,
  },

  {
    label: "Pediatric Health",
    image: pediatric,
    content:
      "Asthma, Cough, Digestive Problems, Behavioural Problems, Ear Infections, Sleep Problems.",
    icon: FaBaby,
  },
  {
    label: "Preventative and Supportive Care",
    image: preventative,
    content:
      "Stress Management, Wellness and Prevention, Post-Operative Recovery, Palliative Care.",
    icon: FaHandsHelping,
  },
  {
    label: "Addictions and Weight Management",
    image: preventative,
    content: "Tobacco, Narcotics, Alcohol, Weight Loss.",
    icon: FaBalanceScale,
  },
  {
    label: "Cancer and Other Terminal Diseases",
    image: cancer,
    content:
      "Support with Dynamic Healing sessions to reduce side effects of chemical treatments, aid in recovery from ongoing ailments.",
    icon: FaRibbon,
  },
];

const Dhs = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const optionsRef = useRef(null);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  const handleArrowClick = () => {
    const currentIndex = options.findIndex(
      (opt) => opt.label === selectedOption.label
    );
    const nextIndex = (currentIndex + 1) % options.length;
    handleOptionChange(options[nextIndex]);

    // Scroll to the next option
    const nextElement = optionsRef.current.children[nextIndex];
    nextElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const handleOptionChange = (option) => {
    setIsTransitioning(true);
    setSelectedOption(option);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    optionsRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaY = startY - e.clientY;
    setStartY(e.clientY);
    optionsRef.current.scrollTop += deltaY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    optionsRef.current.style.cursor = "grab";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    optionsRef.current.style.cursor = "grab";
  };

  return (
    <div className="font-poppins flex flex-col gap-16 w-full">
      <div
        className="lg:flex hidden flex-col px-12 gap-6 items-center lg:items-start lg:justify-start mt-32 
                  min-h-screen lg:min-h-[100vh] font-poppins w-full"
      >
        <div className="flex flex-col items-start justify-start gap-2 mx-12">
          <div className="flex flex-row items-start justify-start gap-2">
            <div>
              <img
                src={logo}
                alt="Example"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div>
              <span className="text-lg font-normal text-[#68747A]">
                Your Path to Better Health Begins Here
              </span>
            </div>
          </div>
          <div>
            <span className="text-5xl  font-semibold text-wrap text-[#051b2e]">
              Dynamic Healing Session
            </span>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-16 px-12 w-full">
          <div>
            <YoutubeBg />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 w-full font-normal text-normal text-[#68747A] relative">
            <div className="flex flex-row items-center justify-center gap-12">
              <span
                onClick={handleClick}
                className={`flex flex-row items-center gap-2 text-xl font-semibold text-wrap text-[#051b2e] cursor-pointer 
                ${isClicked ? "opacity-50" : ""}`}
              >
                <img
                  src={logo}
                  alt="Example"
                  className="w-10 h-10 rounded-full"
                />
                Introduction
              </span>
              <span
                onClick={handleClick}
                className={`flex flex-row items-center gap-2 text-xl font-semibold text-wrap text-[#051b2e] cursor-pointer 
              ${!isClicked ? "opacity-50" : ""}`}
              >
                <img
                  src={logo}
                  alt="Example"
                  className="w-10 h-10 rounded-full"
                />
                Purpose
              </span>
            </div>
            <div
              className={`flex flex-col gap-4 absolute top-16 transition-all duration-700 ease-in-out ${
                !isClicked
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[1%] opacity-0"
              }`}
            >
              <div className="flex flex-row gap-6 items-center ">
                <div className="bg-[#ffcc53] w-1 h-14"></div>
                <div className="w-11/12">
                  <span className=" font-normal text-wrap text-[#051B2E]">
                    Staying healthy is almost as important as staying alive, as
                    life loses its charm without physical and mental health and
                    well-being.
                  </span>
                </div>
              </div>
              <div className="bg-[#c1dcff] w-11/12 h-[1px]"></div>
              <div className="flex flex-col gap-6 w-11/12">
                <span className=" font-normal text-wrap text-[#68747A]">
                  Dynamic Healing Session is a combination of various
                  alternative therapies backed by a very solid scientific
                  foundation and covers different forms of treatment such as
                </span>{" "}
                <div className="flex flex-row items-center justify-start gap-16 text-[#051B2E] ">
                  <div className="flex flex-col gap-4">
                    <span className="flex flex-row gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-normal">Energy supplements</span>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-normal">Essential oils</span>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-normal">Homeopathy</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="flex flex-row gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-normal">Naturopathy</span>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-normal">Sujok</span>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-normal">Color Therapy</span>
                    </span>
                  </div>
                </div>
                <span>
                  This mode of treatment checks the global energy balance and
                  finds out the areas where the energies are blocked or
                  imbalanced and treats them accordingly to overcome the
                  complications. These energies are balanced using scientific
                  and metaphysical approaches.
                </span>
              </div>
            </div>
            <div
              className={`flex flex-col gap-6 absolute top-16 transition-all duration-700 ease-in-out text-base ${
                isClicked
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[1%] opacity-0"
              }`}
            >
              <div className="flex flex-row gap-6 items-center ">
                <div className="bg-[#ffcc53] w-1 h-16"></div>
                <div className="flex flex-col gap-6 w-11/12">
                  <span className="font-normal text-wrap text-[#68747A]">
                    In a world where we meticulously maintain our devices but
                    often neglect our own bodies, Dynamic Healing reminds us of
                    the importance of personal wellness maintenance.
                  </span>
                </div>
              </div>
              <div className="bg-[#c1dcff] w-11/12 h-[1px]"></div>
              <div className="flex flex-col gap-6 w-11/12">
                <span className="text-base text-wrap text-[#68747A]">
                  In today’s environment, where pollution and stress are
                  unavoidable, our health faces constant challenges. When
                  illness strikes, heavy medications often feel like the
                  quickest solution, but they can compromise the body’s natural
                  strength over time. Instead of waiting for problems to
                  escalate, the key lies in prevention—building a stronger, more
                  resilient foundation for health.
                </span>
                <span className="text-base text-wrap text-[#68747A]">
                  Dynamic Healing focuses on empowering the body to heal
                  naturally and thrive. Regular sessions boost immunity, restore
                  balance, and reduce dependence on medication. By investing in
                  your health today, you ensure a future built on strength,
                  vitality, and lasting wellness.
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden flex-col justify-center gap-6 items-center mt-32 min-h-[60vh] font-poppins mb-[36rem]">
        <div className="flex flex-col items-center justify-center gap-2 px-2">
          <div>
            <img src={logo} alt="Example" className="w-10 h-10 rounded-full" />
          </div>
          <div>
            <span className="text-base font-normal text-[#68747A]">
              Your Path to Better Health Begins Here
            </span>
          </div>
        </div>
        <div className="w-full px-2">
          <span className="text-3xl  font-semibold text-wrap text-[#051b2e]">
            Dynamic Healing Session
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 px-2">
          <div>
            <YoutubeBg />
          </div>
          <div
            className="flex flex-col items-start justify-center gap-6 w-full font-normal mt-6 
            text-lg text-[#68747A] relative px-2"
          >
            <div className="flex flex-row items-center justify-center gap-12">
              <span
                onClick={handleClick}
                className={`flex flex-row items-center gap-2 text-xl font-semibold text-wrap text-[#051b2e] cursor-pointer 
                ${isClicked ? "opacity-50" : ""}`}
              >
                <img
                  src={logo}
                  alt="Example"
                  className="w-10 h-10 rounded-full"
                />
                Introduction
              </span>
              <span
                onClick={handleClick}
                className={`flex flex-row items-center gap-2 text-xl font-semibold text-wrap text-[#051b2e] cursor-pointer 
              ${!isClicked ? "opacity-50" : ""}`}
              >
                <img
                  src={logo}
                  alt="Example"
                  className="w-10 h-10 rounded-full"
                />
                Purpose
              </span>
            </div>
            <div
              className={`flex flex-col gap-6  items-start absolute top-16 transition-all duration-700 ease-in-out px-2 ${
                !isClicked
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[1%] opacity-0"
              }`}
            >
              <div className="flex flex-row gap-6 items-center justify-start px-2">
                <div className="bg-[#ffcc53] w-1 h-28"></div>
                <div className="w-full">
                  <span className="text-base font-normal text-wrap text-[#051B2E]">
                    Staying healthy is almost as important as staying alive, as
                    life loses its charm without physical and mental health and
                    well-being.
                  </span>
                </div>
              </div>
              <div className="bg-[#c1dcff] w-full h-[1px]"></div>
              <div className="flex flex-col gap-6 w-full">
                <span className="text-base font-normal text-wrap text-[#68747A]">
                  Dynamic Healing Session is a combination of various
                  alternative therapies backed by a very solid scientific
                  foundation and covers different forms of treatment such as
                </span>{" "}
                <div className="flex flex-row items-center justify-start gap-8 text-[#051B2E] text-sm">
                  <div className="flex flex-col gap-4">
                    <span className="flex flex-row gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span>Energy supplements</span>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span>Essential oils</span>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span>Homeopathy</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="flex flex-row gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span>Naturopathy</span>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span>Sujok</span>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span>Color Therapy</span>
                    </span>
                  </div>
                </div>
                <span className="text-base">
                  This mode of treatment checks the global energy balance and
                  finds out the areas where the energies are blocked or
                  imbalanced and treats them accordingly to overcome the
                  complications. These energies are balanced using scientific
                  and metaphysical approaches.
                </span>
              </div>
            </div>
            <div
              className={`flex flex-col items-start justify-start gap-6 absolute top-16 transition-all duration-700 ease-in-out px-2 ${
                isClicked
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[1%] opacity-0"
              }`}
            >
              <div className="flex flex-row gap-6 items-center ">
                <div className="bg-[#ffcc53] w-1 h-36"></div>
                <div className="w-full">
                  <span className="text-base font-normal text-wrap text-[#051B2E]">
                    In a world where we meticulously maintain our devices but
                    often neglect our own bodies, Dynamic Healing reminds us of
                    the importance of personal wellness maintenance.
                  </span>
                </div>
              </div>
              <div className="bg-[#c1dcff] w-full h-[1px]"></div>
              <div className="text-base flex flex-col gap-6 w-full">
                <span className="font-normal text-wrap text-[#68747A]">
                  In today’s environment, where pollution and stress are
                  unavoidable, our health faces constant challenges. When
                  illness strikes, heavy medications often feel like the
                  quickest solution, but they can compromise the body’s natural
                  strength over time. Instead of waiting for problems to
                  escalate, the key lies in prevention—building a stronger, more
                  resilient foundation for health.
                </span>
                <span className="font-normal text-wrap text-[#68747A]">
                  Dynamic Healing focuses on empowering the body to heal
                  naturally and thrive. Regular sessions boost immunity, restore
                  balance, and reduce dependence on medication. By investing in
                  your health today, you ensure a future built on strength,
                  vitality, and lasting wellness.
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex hidden flex-row gap-12 items-start justify-between px-24">
        <div className="flex flex-col gap-8 items-start justify-center w-[50%]">
          <span className="text-lg font-normal text-wrap text-[#051B2E] w-full">
            Dynamic healing is not just about treating an illness through
            medicines. Its sole purpose is reaching to the root of an illness
            and working towards the permanent elimination of the illness from an
            individual&apos;s body.
          </span>

          <div
            ref={optionsRef}
            className="flex flex-col gap-6 items-start text-3xl text-[#b9c2c6] font-bold overflow-hidden"
            style={{
              maxHeight: "400px",
              cursor: "grab",
              userSelect: "none",
              overflowY: "auto",
              scrollbarWidth: "none",
              scrollBehavior: "smooth",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {options.map((option) => (
              <span
                key={option.label}
                className={`cursor-pointer ${
                  selectedOption.label === option.label
                    ? "text-[#051B2E] font-bold"
                    : ""
                }`}
                onClick={() => handleOptionChange(option)}
              >
                {option.label}
              </span>
            ))}
          </div>
          <div>
            <div
              onClick={handleArrowClick}
              className="cursor-pointer hover:text-[#051B2E] transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex relative group w-full min-h-[90vh] ">
          <div className="absolute top-0 left-[50%] z-20 w-[40%] h-[80%] drop-shadow-xl group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
            <img
              key={selectedOption.label}
              src={selectedOption.image}
              alt={selectedOption.label}
              className={`w-full h-full rounded-2xl ${
                isTransitioning ? "animate-fadeIn" : ""
              }`}
            />
          </div>
          <div className="flex flex-col gap-6 rounded-3xl w-1/2 h-1/2 bg-[#09243c] p-5 absolute top-1/2 left-[16%] z-30 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out">
            <div className="p-2">
              <selectedOption.icon
                className={`text-white text-5xl ${
                  isTransitioning ? "animate-fadeIn" : ""
                }`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-start justify-start">
                <span
                  key={`text-${selectedOption.label}`}
                  className={`text-lg mx-4 text-wrap font-normal text-white ${
                    isTransitioning ? "animate-fadeIn" : ""
                  }`}
                >
                  {selectedOption.content}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden flex-col gap-12 items-center justify-start my-20 mx-6">
        <div className="flex flex-col gap-8 items-start justify-center w-full">
          <span className="text-lg font-normal text-wrap text-[#051B2E] w-full">
            Dynamic healing is not just about treating an illness through
            medicines. Its sole purpose is reaching to the root of an illness
            and working towards the permanent elimination of the illness from an
            individual&apos;s body.
          </span>
          <div
            ref={optionsRef}
            className="flex flex-row gap-4 items-start text-lg text-[#b9c2c6] font-bold w-full overflow-x-auto"
            style={{
              maxHeight: "400px",
              cursor: "grab",
              userSelect: "none",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {options.map((option) => (
              <span
                key={option.label}
                className={`cursor-pointer whitespace-nowrap ${
                  selectedOption.label === option.label
                    ? "text-[#051B2E] font-bold"
                    : ""
                }`}
                onClick={() => handleOptionChange(option)}
              >
                {option.label}
              </span>
            ))}
          </div>
          <div>
            <div
              onClick={handleArrowClick}
              className="cursor-pointer hover:text-[#051B2E] transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center min-h-96 w-full">
          <div className="absolute flex items-center justify-center inset-0 z-20">
            <img
              key={selectedOption.label}
              src={selectedOption.image}
              alt={selectedOption.label}
              className={`w-full h-full object-cover rounded-2xl ${
                isTransitioning ? "animate-fadeIn" : ""
              }`}
            />
          </div>
          <div className="absolute flex flex-col items-start justify-center gap-8 inset-0 bg-[#09243c]/70 rounded-2xl p-5 z-30">
            <div className="p-2">
              <selectedOption.icon
                className={`text-white text-6xl ${
                  isTransitioning ? "animate-fadeIn" : ""
                }`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-start justify-start">
                <span
                  key={`text-${selectedOption.label}`}
                  className={`text-lg mx-4 text-wrap font-normal text-white ${
                    isTransitioning ? "animate-fadeIn" : ""
                  }`}
                >
                  {selectedOption.content}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex hidden flex-col items-center justify-center">
        <span className="text-3xl font-semibold text-wrap text-black">
          {" "}
          Remote Dynamic Healing Session
        </span>
        <div className="hidden lg:flex flex-row items-center justify-center gap-8 min-h-[60vh] w-full">
          <div
            className="flex flex-col relative gap-6 w-1/3 min-h-[40vh] bg-[#051B2E] 
        p-10 rounded-r-3xl text-white shadow-3xl overflow-hidden group"
          >
            <div className="flex absolute bottom-0 left-0 mix-blend-overlay">
              <img
                src={rhsBg}
                alt="Example"
                className="w-1/2 h-1/2 group-hover:rotate-180 transition-all duration-1000 ease-in-out"
              />
            </div>

            <span className="text-base">
              Dynamic Healing also offers remote healing sessions, ensuring
              accessibility for those unable to visit in person. In these
              sessions, patients are asked to provide a photograph, which is
              used to assess their energy readings. Since energy transcends
              physical boundaries, remote healing is just as effective as
              in-person sessions.
            </span>
          </div>
          <div className="w-1/3 h-[40vh]  drop-shadow-3xl relative">
            <img
              src={youtubebg}
              alt="Example"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>
          <div className="flex flex-col relative gap-6 w-1/3 min-h-[40vh] bg-[#051B2E] p-10 rounded-l-3xl text-white  shadow-3xl overflow-hidden group">
            <div className="flex absolute bottom-0 left-0 mix-blend-overlay">
              <img
                src={rhsBg2}
                alt="Example"
                className="w-1/2 h-1/2 group-hover:rotate-180 transition-all duration-1000 ease-in-out"
              />
            </div>
            <span className="text-base">
              Once the energy assessment is complete, personalized remedies and
              medicines are prepared and couriered directly to the patient.
              However, for optimal results, it is highly recommended to have at
              least one in-person session to fully experience the transformative
              power of Dynamic Healing.
            </span>
          </div>
        </div>
      </div>

      <div className="flex lg:hidden flex-col items-center justify-start gap-0 min-h-[80vh] mb-20">
        <div className="flex flex-col relative gap-6 w-full bg-[#051B2E] p-6  text-white h-full shadow-3xl overflow-hidden group pb-12">
          <span className="text-3xl font-semibold text-wrap text-[#ffffff] ">
            {" "}
            Remote Dynamic Healing Session
          </span>
          <div className="flex absolute -top-16 -right-32 rotate-180 mix-blend-overlay">
            <img
              src={rhsBg}
              alt="Example"
              className="w-full h-full -scale-50 group-hover:rotate-180 transition-all duration-1000 ease-in-out"
            />
          </div>
          <div className="bg-[#62626272] text-base w-full h-[1px] z-20 "></div>
          <span>
            Dynamic Healing also offers remote healing sessions, ensuring
            accessibility for those unable to visit in person. In these
            sessions, patients are asked to provide a photograph, which is used
            to assess their energy readings. Since energy transcends physical
            boundaries, remote healing is just as effective as in-person
            sessions.
          </span>
        </div>
        <div className="w-full h-full drop-shadow-3xl relative">
          <img
            src={youtubebg}
            alt="Example"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col relative gap-6 w-full bg-[#051B2E] p-6 text-white h-full shadow-3xl overflow-hidden group pb-12">
          <div className="flex absolute -top-16 -right-32 rotate-180 mix-blend-overlay">
            <img
              src={rhsBg2}
              alt="Example"
              className="w-full h-full -scale-50 group-hover:rotate-180 transition-all duration-1000 ease-in-out"
            />
          </div>
          <span>
            Once the energy assessment is complete, personalized remedies and
            medicines are prepared and couriered directly to the patient.
            However, for optimal results, it is highly recommended to have at
            least one in-person session to fully experience the transformative
            power of Dynamic Healing.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dhs;
