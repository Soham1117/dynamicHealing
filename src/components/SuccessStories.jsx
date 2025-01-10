import { useRef } from "react";
import Story from "./Story";
import MobileVerticalCarousel from "./MobileStories";
import story1 from "../assets/4.jpeg";
import story2 from "../assets/1.jpg";
import story3 from "../assets/2.jpeg";
import story4 from "../assets/2b.jpeg";
import story5 from "../assets/2c.jpeg";
import story6 from "../assets/2d.jpeg";
import story7 from "../assets/2e.jpeg";
import story8 from "../assets/2f.jpeg";
import story9 from "../assets/2g.jpeg";
import story10 from "../assets/3.jpeg";
import story11 from "../assets/3b.jpeg";
import story12 from "../assets/3c.jpeg";
import story13 from "../assets/3d.jpeg";
import logo from "../assets/logo_sil.svg";

const SuccessStories = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;

    const storyWidth = (container.offsetWidth - 22) / 3;
    const newScrollPosition =
      container.scrollLeft + (direction === "left" ? -storyWidth : storyWidth);

    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  const stories = [
    {
      title: "Special Child Case: Delay and Hyperactivity",
      text: "Delayed child with hyperactivity in a boy of 7 and half years with anger and OCD syndrome, EEG report came to normal within 6 months of treatment.",
      img: [story1],
      number: 1,
    },
    {
      title: "Congenital Ptosis with Jaw Winking Syndrome",
      text: "Case of Congenital Ptosis of 6 years old child with Marcus Jaw winking syndrome improved after multiple sessions. Below are the image of the boy having the syndrome.",
      img: [story2],
      number: 1,
    },
    {
      title: "Skin: Psoriasis Case",
      text: "Significant improvement from psoriasis was observed which highlights the effectiveness of Dynamic Healing. Skin-related conditions often show excellent results with our personalized, holistic approach, as seen in these images.",
      img: [story3, story4, story5, story6, story7, story8, story9],
      number: 7,
    },
    {
      title: "Eye : Retina Detachment Posterior Vitreous Detachment(PVD)",
      text: "Case of Retinal Detachment Posterior Vitreous Detachment (PVD) in 56 yrs old female is cured where no hope was given by any doctor. Her vision is clearer than before. Most wonderful thing is at this miracle occurred just in one session plus one month dosage of our medicines.",
      img: [story10, story11, story12, story13],
      number: 4,
    },
  ];

  return (
    <div className="flex flex-col mx-4 lg:mx-24 gap-6 items-center lg:items-center lg:justify-evenly mt-20 min-h-[70vh] font-poppins">
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <div>
          <img src={logo} alt="Example" className="w-10 h-10 rounded-full" />
        </div>
        <div>
          <span className="lg:text-lg text-md font-normal text-[#68747A]">
            Read our success stories
          </span>
        </div>
        <div className="flex w-full items-center justify-center">
          <span className="lg:text-5xl text-3xl font-semibold text-wrap text-[#051b2e]">
            Success Stories
          </span>
        </div>

        <div className="lg:flex hidden relative w-full">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-30 bg-[#051b2e] rounded-full p-4 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="grid grid-flow-col auto-cols-[calc((100%-60px)/3)] gap-6 overflow-x-hidden scrollbar-hide pb-6 scroll-smooth"
          >
            {stories.map((story, index) => (
              <div key={index} className="flex justify-center">
                <Story story={story} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-30 bg-[#051b2e] rounded-full p-4 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="lg:hidden w-full">
          <MobileVerticalCarousel stories={stories} />
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
