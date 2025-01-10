import home from "../assets/homebg2.jpg";
import graphic from "../assets/h1-5.webp";
import Calendar from "./Calendar";

function Home() {
  return (
    <div className="flex flex-col shadow-lg gap-3 justify-start font-poppins lg:h-screen lg:min-h-[88vh] mb-3 mx-2 rounded-xl">
      <div className="px-4">
        <div className="bg-[#c1dcff] w-full h-[1px]"></div>
      </div>
      <div className="relative lg:w-full lg:h-full overflow-hidden rounded-xl">
        <img
          src={home}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl blur-sm"
          alt="Dynamic Healing Home"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#daeeff] to-[#685d44] mix-blend-multiply backdrop-blur-[1px]" />
        <img
          src={graphic}
          className="absolute top-[70%] left-[86%] scale-90"
          alt="Dynamic Healing Home"
        />
        <div className="relative w-full h-full flex">
          <div className="flex lg:flex-row flex-col items-start">
            <div className="flex flex-col items-start lg:w-1/2 w-full lg:mt-40 mt-20 lg:ml-36 p-10 gap-5">
              <span className="lg:text-xl text-sm text-wrap font-normal border border-white p-2 pl-10 pr-10 rounded-full text-white">
                Dynamic Healing
              </span>
              <span className="lg:text-7xl text-4xl text-wrap font-extrabold text-white">
                Nothing is more important than your health!
              </span>
              <span className="lg:text-xl text-md text-wrap font-medium text-white">
                Break free from energy imbalances and blockages, revitalizing
                your health and restoring harmony for lasting well-being.
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 lg:w-1/2 w-full lg:mt-40 lg:ml-36 p-10">
              <span className="text-center border border-white p-2 rounded-3xl lg:rounded-full lg:w-[65%] w-full text-lg lg:text-2xl font-bold text-[#FFFFFF]">
                Next Healing Sessions
              </span>
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
