import home from "../assets/homebg2.jpg";
import graphic from "../assets/h1-5.webp";
import Calendar from "./Calendar";

const Home = () => {
  return (
    <div className="flex flex-col shadow-lg gap-3 justify-start font-poppins min-h-screen lg:min-h-[88vh] p-2 mb-3">
      <div className="px-4">
        <div className="bg-[#c1dcff] w-full h-px" />
      </div>

      <div className="relative w-full flex-1 overflow-hidden rounded-xl">
        <img
          src={home}
          className="absolute inset-0 w-full h-full object-cover rounded-xl blur-sm"
          alt="Dynamic Healing Home"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#daeeff] to-[#685d44] mix-blend-multiply backdrop-blur-[1px]" />

        <img
          src={graphic}
          className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain transform translate-x-1/4 translate-y-1/4"
          alt="Graphic"
        />

        <div className="relative h-full">
          <div className="flex flex-col lg:flex-row w-full min-h-full p-4 md:p-8 lg:p-12 gap-8">
            {/* Left Content */}
            <div className="flex flex-col gap-6 lg:w-1/2 pt-8 lg:pt-20">
              <span className="inline-block text-sm md:text-base lg:text-xl font-normal border border-white px-6 py-2 rounded-full text-white text-center w-fit">
                Dynamic Healing
              </span>

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                Nothing is more important than your health!
              </h1>

              <p className="text-base md:text-lg lg:text-xl font-medium text-white">
                Break free from energy imbalances and blockages, revitalizing
                your health and restoring harmony for lasting well-being.
              </p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col lg:w-1/2 gap-4 pt-4 lg:pt-20">
              <span className="text-center border border-white p-3 rounded-3xl text-lg md:text-xl lg:text-2xl font-bold text-white w-full lg:w-2/3 mx-auto">
                Next Healing Sessions
              </span>
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
