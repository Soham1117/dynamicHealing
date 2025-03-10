import { useState } from "react";
import { Play } from "lucide-react";
import dhsyt from "../assets/dhs.png";
const YoutubeBg = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="relative lg:flex hidden">
        <div
          className="relative cursor-pointer group "
          onClick={() => setIsOpen(true)}
        >
          <div
            className={`relative w-full h-[70vh] bg-gray-200 overflow-hidden rounded-3xl 
            hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out 
            shadow-[0px_8px_0px_rgba(0,0,0,0.20)]`}
          >
            <img
              src={dhsyt}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 "></div>

            <div className="absolute inset-0 flex flex-col items-center  justify-center gap-6">
              <div className="border border-white bg-opacity-50 p-4 rounded-full transform transition-transform duration-150 ease-in group-hover:translate-y-1">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl mx-4">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                Close
              </button>

              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/O7Zd040GwpA?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="relative lg:hidden flex">
        <div
          className="relative cursor-pointer group "
          onClick={() => setIsOpen(true)}
        >
          <div
            className={`relative w-full h-full bg-gray-200 overflow-hidden rounded-3xl 
          hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out 
          shadow-[0px_8px_0px_rgba(0,0,0,0.20)]`}
          >
            <img
              src={dhsyt}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 "></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div className="border border-white bg-opacity-50 p-2 rounded-full transform transition-transform duration-150 ease-in group-hover:translate-y-1">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative w-full max-w-xl mx-4">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                Close
              </button>

              <div className="aspect-video bg-black flex items-center w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/O7Zd040GwpA?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YoutubeBg;
