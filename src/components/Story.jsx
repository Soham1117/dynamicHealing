import { useState } from "react";

const Story = ({ story }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % story.img.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + story.img.length) % story.img.length
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="flex flex-col items-start justify-start bg-[#f1f2f2] rounded-2xl p-6 z-20 font-poppins gap-6 
          shadow-[0px_5px_0px_rgba(0,0,0,0.20)] hover:-translate-y-9 hover:shadow-2xl 
          transition-all duration-500 ease-out mt-10 w-11/12 group h-[95%] border-2 border-[#dadee2]"
    >
      <div className="relative w-full">
        <div className="overflow-hidden rounded-3xl relative border border-[#dadee2]">
          <div
            className="flex transition-transform duration-500 ease-out h-80 "
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {story.img.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-80 object-cover flex-shrink-0"
              />
            ))}
          </div>

          {story.number > 1 && (
            <>
              <button
                onClick={previousImage}
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
                onClick={nextImage}
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

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {story.img.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? "bg-white w-4"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="h-[5vh]">
        <h2 className="text-xl font-medium text-[#051b2e] ml-2">
          {story.title}
        </h2>
      </div>
      <div className="bg-[#dadee2] w-full h-[1px]"></div>
      <p className="text-md text-[#68747A] ml-2">{story.text}</p>
    </div>
  );
};

export default Story;
