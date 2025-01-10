import React, { useState } from "react";

const MobileVerticalCarousel = ({ stories }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(
    Array(stories.length).fill(0)
  );

  const handleScroll = (e) => {
    const container = e.currentTarget;
    const slideHeight = container.clientHeight;
    const newIndex = Math.round(container.scrollTop / slideHeight);

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const handleImageScroll = (storyIndex, direction) => {
    setActiveImageIndex((prevState) => {
      const newState = [...prevState];
      const newIndex =
        direction === "left"
          ? prevState[storyIndex] - 1
          : prevState[storyIndex] + 1;
      newState[storyIndex] =
        (newIndex + stories[storyIndex].img.length) %
        stories[storyIndex].img.length;
      return newState;
    });
  };

  return (
    <div className="w-full px-4 rounded-2xl py-8">
      <div className="relative w-full border border-gray-300 rounded-xl bg-white shadow-sm">
        <div
          className="w-full h-[500px] overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
          onScroll={handleScroll}
        >
          {stories.map((story, storyIndex) => (
            <div
              key={storyIndex}
              className="w-full h-[500px] snap-start snap-always p-4 flex items-center"
            >
              <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col">
                {/* Horizontal Image Slider inside each story */}
                <div className="w-full h-48 relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${
                        activeImageIndex[storyIndex] * 100
                      }%)`,
                    }}
                  >
                    {story.img.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`Story ${storyIndex + 1} - Image ${imgIndex + 1}`}
                        className="w-full h-48 object-cover flex-shrink-0"
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows for the image slider */}
                  {story.img.length > 1 && (
                    <>
                      <button
                        onClick={() => handleImageScroll(storyIndex, "left")}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </button>

                      <button
                        onClick={() => handleImageScroll(storyIndex, "right")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Story Title and Description */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <h3 className="text-xl font-semibold text-[#051b2e] mb-3">
                    {story.title}
                  </h3>
                  <p className="text-gray-600">
                    {story.text || "No description available"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Story Navigation Dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          {stories.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#051b2e] h-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileVerticalCarousel;
