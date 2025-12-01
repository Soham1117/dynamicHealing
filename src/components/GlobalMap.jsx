import { WorldMap } from "./ui/world-map";
import { motion } from "motion/react";
import logo from "../assets/logo_sil.svg";

const GlobalMap = () => {
  const patientConnections = [
    {
      start: { lat: 20.5937, lng: 78.9629, label: "India" }, // India
      end: { lat: 23.4241, lng: 53.8478, label: "UAE" }, // UAE
    },
    {
      start: { lat: 23.4241, lng: 53.8478, label: "UAE" }, // UAE
      end: { lat: 51.1657, lng: 10.4515, label: "Germany" }, // Germany (center)
    },
    {
      start: { lat: 51.1657, lng: 10.4515, label: "Germany" }, // Germany
      end: { lat: 46.2276, lng: 2.2137, label: "France" }, // France
    },
    {
      start: { lat: 46.2276, lng: 2.2137, label: "France" }, // France
      end: { lat: 51.5074, lng: -0.1278, label: "UK" }, // UK (London)
    },
    {
      start: { lat: 51.5074, lng: -0.1278, label: "UK" }, // UK
      end: { lat: 37.0902, lng: -95.7129, label: "USA" }, // USA
    },
    {
      start: { lat: 37.0902, lng: -95.7129, label: "USA" }, // USA
      end: { lat: -25.2744, lng: 133.7751, label: "Australia" }, // Australia (center)
    },
    {
      start: { lat: -25.2744, lng: 133.7751, label: "Australia" }, // Australia
      end: { lat: -40.9006, lng: 174.886, label: "New Zealand" }, // New Zealand (center)
    },
  ];

  return (
    <div>
      {/* Desktop Version */}
      <div className="lg:flex hidden flex-col mx-24 gap-2 items-center mt-12 justify-center min-h-[80vh] mb-20 font-poppins">
        <div className="bg-[#c1dcff] w-full h-[1px]"></div>
        <div className="flex flex-col items-center justify-center gap-10 w-full py-16">
          <div className="flex flex-col items-center gap-5 max-w-4xl">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div>
                <img
                  src={logo}
                  alt="Dynamic Healing"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <span className="text-lg font-normal text-[#68747A]">
                  Healing Lives Across Continents
                </span>
              </div>
            </div>

            {/* Animated Title */}
            <div className="text-center">
              <p className="font-bold text-5xl text-[#051b2e]">
                Global{" "}
                <span className="text-[#4A90E2]">
                  {"Reach".split("").map((letter, idx) => (
                    <motion.span
                      key={idx}
                      className="inline-block"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.04 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-[#68747A] max-w-2xl text-center leading-relaxed">
              Our healing sessions transcend borders, bringing transformative
              wellness to patients across India, UAE, Germany, France, UK, USA,
              Australia, and New Zealand. Distance is no barrier to healing.
            </p>
          </div>

          {/* World Map */}
          <div className="w-full max-w-6xl mt-8">
            <WorldMap dots={patientConnections} lineColor="#4A90E2" />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex lg:hidden flex-col mx-6 gap-16 items-center mt-12 justify-center min-h-[80vh] mb-20 font-poppins">
        <div className="bg-[#c1dcff] w-full h-[1px]"></div>
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <div className="flex flex-col items-center gap-5">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div>
                <img
                  src={logo}
                  alt="Dynamic Healing"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <span className="text-base font-normal text-[#68747A]">
                  Healing Lives Across Continents
                </span>
              </div>
            </div>

            {/* Animated Title */}
            <div className="text-center">
              <p className="font-bold text-2xl text-[#051b2e]">
                Global{" "}
                <span className="text-[#4A90E2]">
                  {"Reach".split("").map((letter, idx) => (
                    <motion.span
                      key={idx}
                      className="inline-block"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.04 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-[#68747A] text-center leading-relaxed">
              Our healing sessions transcend borders, bringing transformative
              wellness to patients across India, UAE, Germany, France, UK, USA,
              Australia, and New Zealand.
            </p>
          </div>

          {/* World Map */}
          <div className="w-full mt-4">
            <WorldMap dots={patientConnections} lineColor="#4A90E2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMap;
