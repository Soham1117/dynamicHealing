import { FaClinicMedical } from "react-icons/fa";
import about from "../assets/about_1.jpg";
import graphic from "../assets/h1-5.webp";
import logo from "../assets/logo_sil.svg";
const About = () => {
  function handleClick() {
    document.getElementById("dhs").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap gap-10 items-center lg:items-start lg:justify-evenly lg:ml-24 lg:mr-24 mt-36 min-h-full font-poppins lg:mb-48 mb-96 mx-6">
      <div className="lg:flex hidden items-start ">
        <div className="block relative group">
          <div className="absolute top-0 z-20 w-[30rem] h-[36rem] drop-shadow-xl group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-300 ease-in-out ">
            <img
              src={about}
              alt="Example"
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="w-48 h-48 relative top-96 left-0 z-30 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-300 ease-in-out ">
            <img
              src={graphic}
              alt="Example"
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-12 w-64 h-80 bg-[#09243c] rounded-3xl p-5 relative top-36 -left-20 z-30 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out">
            <div className="p-2">
              <FaClinicMedical className="text-white text-5xl" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-start justify-start">
                <span className="text-8xl font-medium text-[#ffcc53] ">15</span>
                <span className="text-4xl font-normal text-[#ffcc53] ">+</span>
              </div>
              <div>
                <span className="text-xl font-normal text-white">
                  Years of Experience in the Medical Field.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex w-full flex-col items-center justify-start gap-4">
        <div className="flex flex-col items-center justify-center gap-6 h-full">
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <img
                src={logo}
                alt="Example"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div>
              <span className="text-md font-normal text-[#68747A]">
                Welcome to Dynamic Healing
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <span className="text-3xl font-semibold text-wrap text-[#051b2e]">
              Empower Your Health, Transform Your Life
            </span>
          </div>
          <div className="flex flex-row gap-6 items-center ">
            <div className="bg-[#ffcc53] w-3 h-24"></div>
            <div>
              <span className="text-md font-normal text-wrap text-[#051B2E]">
                Staying healthy is almost as important as staying alive, as life
                loses its charm without physical and mental health and
                well-being.
              </span>
            </div>
          </div>
          <div>
            <span className="text-md font-normal text-wrap text-[#68747A]">
              Dynamic Healing, developed by Dr. Divij Tanna, N.D., RMP, combines
              science with energy healing to restore balance and optimize
              health. By addressing energy imbalances, it promotes harmony in
              the body and mind.
            </span>
          </div>
          <div>
            <span className="text-md font-normal text-wrap text-[#68747A]">
              Tailored to your unique needs, each session clears blockages,
              activates healing, and supports lasting wellness, guiding you on a
              personalized journey to vibrant health and balance.
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="flex flex-row items-center gap-2 relative overflow-hidden bg-[#051b2e] text-white px-8 py-4 rounded-xl group"
          >
            <span className="relative z-10 text-sm">View More About Us</span>
            <div
              className="absolute inset-0 w-0 bg-gradient-to-r from-transparent 
              via-white/30 to-transparent group-hover:w-[700%] transition-all 
              duration-[2000ms] ease-in-out -skew-x-[30deg] group-hover:translate-x-full"
            ></div>
            <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
              {" "}
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
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="lg:hidden flex">
        <div className="flex items-start justify-center group">
          <div className="absolute flex w-[90%] aspect-[4/5] drop-shadow-xl group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
            <img src={about} className="w-full h-full rounded-3xl" />
          </div>
          <div className="flex flex-col gap-2 w-40 aspect-[4/3] bg-[#09243c] rounded-3xl px-4 pt-6 pb-3 relative top-[14rem] left-14 z-30">
            <div className="flex flex-col gap-8">
              <div className="flex flex-row items-start justify-start">
                <span className="text-3xl font-medium text-[#ffcc53] ">15</span>
                <span className="text-3xl font-normal text-[#ffcc53] ">+</span>
              </div>
              <div>
                <span className="text-sm font-normal text-white">
                  Years of Experience in the Medical Field.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden gap-10 w-full lg:w-1/2">
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="flex flex-col items-start justify-start gap-4 h-[54vh]">
            <div className="flex flex-row ml-20 items-center justify-start gap-2">
              <div>
                <img
                  src={logo}
                  alt="Example"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <span className="text-lg font-normal text-[#68747A]">
                  Welcome to Dynamic Healing
                </span>
              </div>
            </div>
            <div className="ml-20 w-3/4">
              <span className="text-5xl  font-semibold text-wrap text-[#051b2e]">
                Empower Your Health, Transform Your Life
              </span>
            </div>
            <div className="flex flex-row ml-20 gap-6 items-center ">
              <div className="bg-[#ffcc53] w-3 h-20"></div>
              <div>
                <span className="text-lg font-normal text-wrap text-[#051B2E]">
                  Staying healthy is almost as important as staying alive, as
                  life loses its charm without physical and mental health and
                  well-being.
                </span>
              </div>
            </div>
            <div className="ml-20">
              <span className="text-lg font-normal text-wrap text-[#68747A]">
                Dynamic Healing, developed by Dr. Divij Tanna, N.D., RMP,
                combines science with energy healing to restore balance and
                optimize health. By addressing energy imbalances, it promotes
                harmony in the body and mind.
              </span>
            </div>
            <div className="ml-20">
              <span className="text-lg font-normal text-wrap text-[#68747A]">
                Tailored to your unique needs, each session clears blockages,
                activates healing, and supports lasting wellness, guiding you on
                a personalized journey to vibrant health and balance.
              </span>
            </div>
          </div>
          <div className="ml-20">
            <button
              onClick={handleClick}
              className="flex flex-row gap-2 relative overflow-hidden bg-[#051b2e] text-white px-8 py-4 rounded-xl group"
            >
              <span className="relative z-10">View More About Us</span>
              <div
                className="absolute inset-0 w-0 bg-gradient-to-r from-transparent 
              via-white/30 to-transparent group-hover:w-[700%] transition-all 
              duration-[2000ms] ease-in-out -skew-x-[30deg] group-hover:translate-x-full"
              ></div>
              <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                {" "}
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
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
