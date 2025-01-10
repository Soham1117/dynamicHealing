import Section from "./section.jsx";
import section1Img from "../assets/section1.png";
import section2Img from "../assets/section2.jpeg";
import logo from "../assets/logo_sil.svg";
import graphic from "../assets/in14.webp";

function Subsections() {
  const sectionInfo = [
    {
      img: section1Img,
      title: "Dynamic Healing Session",
      text: "Release energy blockages, restore balance, and experience deep healing with our transformative session designed to rejuvenate your body and elevate your well-being.",
      id: "dhs",
    },
    {
      img: section2Img,
      title: "Spinal Manipulation",
      text: "Spinal Manipulation is a non - invasive diagnosis and hands on therapy. Find out how it works. ",
      id: "spinalManipulation",
    },
  ];

  return (
    <div
      className="flex flex-col justify-start shadow-lg relative lg:flex-row lg:flex-wrap lg:gap-10 gap-4 items-center bg-[#F1F2F2] rounded-3xl 
    lg:items-start lg:justify-evenly ml-4 mr-4 mt-12 mb-24 min-h-[100vh] font-poppins pb-36"
    >
      <div className="lg:flex hidden absolute right-0">
        <img
          src={graphic}
          alt="Example"
          className="w-full h-full rounded-3xl"
        />
      </div>
      <div className="flex lg:hidden absolute top-0 left-0">
        <img
          src={graphic}
          alt="Example"
          className="w-full h-full rounded-3xl"
        />
      </div>
      <div className="lg:flex hidden absolute left-0 bottom-0 rotate-180 ">
        <img
          src={graphic}
          alt="Example"
          className="w-full h-full rounded-3xl"
        />
      </div>
      <div className="flex lg:hidden absolute left-0 bottom-0 rotate-180 ">
        <img
          src={graphic}
          alt="Example"
          className="w-full h-full rounded-3xl"
        />
      </div>
      <div className="lg:flex hidden flex-col items-start justify-start w-full ml-24 mr-24 mt-24 gap-6">
        <div className="flex flex-row items-center justify-start gap-2 ">
          <div>
            <img src={logo} alt="Example" className="w-10 h-10 rounded-full" />
          </div>
          <div>
            <span className="text-lg font-normal text-[#68747A]">
              We Provide the Best Service for your Health
            </span>
          </div>
        </div>
        <div>
          <span className="text-5xl  font-semibold text-wrap text-[#051b2e]">
            Our Services
          </span>
        </div>
        <div>
          <span className="text-lg font-normal text-wrap text-[#68747A] ">
            Combining advanced healing methods to nurture, restore, and
            rejuvenate your body.
          </span>
        </div>
      </div>
      <div className="flex lg:hidden flex-col items-center justify-center w-full gap-6 mt-20 px-2">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <div>
            <img src={logo} alt="Example" className="w-10 h-10 rounded-full" />
          </div>
          <div>
            <span className="text-md font-normal text-[#68747A]">
              We Provide the Best Service for your Health
            </span>
          </div>
        </div>
        <div>
          <span className="text-4xl font-semibold text-wrap text-[#051b2e]">
            Our Services
          </span>
        </div>
        <div>
          <span className="text-md font-normal text-wrap text-[#68747A] ">
            Combining advanced healing methods to nurture, restore, and
            rejuvenate your body.
          </span>
        </div>
      </div>
      <div className="lg:flex hidden flex-row gap-16 ml-24 mr-24 h-auto">
        {sectionInfo.map((section) => (
          <Section key={section.title} section={section} />
        ))}
      </div>
      <div className="flex lg:hidden flex-col gap-4 px-2 h-auto">
        {sectionInfo.map((section) => (
          <Section key={section.title} section={section} />
        ))}
      </div>
    </div>
  );
}

export default Subsections;
