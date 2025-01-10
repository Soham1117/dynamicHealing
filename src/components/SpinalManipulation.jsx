import { FaBox, FaCogs, FaGift } from "react-icons/fa";

const SpinalManipulation = () => {
  return (
    <div>
      <div
        className="lg:flex hidden flex-col border shadow-lg border-[#DADEE2] bg-[#F1F2F2] rounded-3xl lg:flex-row lg:flex-wrap gap-6 
    items-center lg:items-start lg:justify-evenly ml-4 mr-4 mt-48  min-h-[110vh] font-poppins p-8 relative mb-8"
      >
        <div className="flex absolute top-0 left-0">
          <img
            src="src\assets\bl10.webp"
            alt="Example"
            className="w-full h-full opacity-50"
          />
        </div>
        <div className="flex absolute bottom-0 right-0">
          <img
            src="src\assets\bl10.webp"
            alt="Example"
            className="w-full h-full opacity-50"
          />
        </div>
        <div className="flex flex-row gap-6 items-end justify-start pr-24">
          <div className="flex flex-col gap-8 z-10 pl-24  py-8">
            <div className="flex flex-row items-center justify-start gap-2">
              <div>
                <img
                  src="src\assets\logo_sil.svg"
                  alt="Example"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <span className="text-lg font-normal text-[#051b2e]">
                  Your Health is Our Top Goal
                </span>
              </div>
            </div>
            <div>
              <span className="text-5xl  font-semibold text-wrap text-[#051b2e]">
                Spinal Manipulation
              </span>
            </div>
            <div className="w-full">
              <span className="text-lg font-normal text-wrap text-[#051B2E] ">
                Spinal manipulation, a common chiropractic treatment, is a
                passive technique where a therapist applies a targeted manual
                impulse or thrust to a joint, typically near the end of its
                passive range of motion.
              </span>
            </div>
            <div className="bg-[#c1dcff] w-full h-[1px]"></div>
          </div>
          <div className="z-10">
            <img
              src="src\assets\sm.jpg"
              alt="Example"
              className="w-[100%] h-[100%] rounded-3xl z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.10)] 
            hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="w-full z-10 pl-24 pr-24">
          <span className="text-lg font-normal text-wrap text-[#051B2E] ">
            This often results in an audible &quot;crack,&quot; which is widely
            attributed to the cavitation of spinal facet joints. Cavitation
            occurs when gas bubbles form in the joint due to lower-than-normal
            pressure, and the subsequent rise in pressure causes the bubble to
            implode.
          </span>
        </div>
        <div className="flex flex-row w-full z-10 px-24 items-center justify-center gap-12">
          <div className="flex flex-col items-start justify-start relative gap-6 bg-[#ffcb53e2] h-[50vh] w-1/3 rounded-[2.5rem] pt-8 px-12 group shadow-[0px_5px_0px_rgba(0,0,0,0.25)]">
            <div className="flex absolute right-0 bottom-0">
              <img
                src="src\assets\h1-11.webp"
                alt="Example"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-2">
              <span className="text-3xl font-semibold text-wrap text-[#051B2E]">
                Mechanism
              </span>
              <div className="bg-[#051B2E] w-16 h-16 rounded-2xl flex items-center justify-center">
                <FaCogs className="text-3xl text-[#FFFFFF] group-hover:animate-upAndDown" />
              </div>
            </div>
            <div className="bg-[#a973317f] w-full h-[1px]"></div>
            <div className="w-full h-[30vh]">
              <span className="text-md font-normal text-wrap text-[#051B2E] z-10">
                The primary characteristic of spinal manipulation techniques is
                achieving the popping or cracking sound in synovial joints. This
                audible release is thought to result from the implosion of gas
                bubbles within the joint, a phenomenon known as cavitation.
              </span>
            </div>{" "}
          </div>
          <div className="flex flex-col items-start justify-start relative gap-6 bg-[#051B2E] h-[50vh] w-1/3 rounded-[2.5rem] pt-8 px-12 group shadow-[0px_5px_0px_rgba(0,0,0,0.25)]">
            <div className="flex flex-row items-center justify-between w-full gap-2">
              <span className="text-2xl font-semibold text-wrap text-[#ffffff]">
                Treatment Package
              </span>
              <div className="bg-[#ffffff] w-16 h-16 rounded-2xl flex items-center justify-center">
                <FaBox className="text-3xl text-[#051B2E] group-hover:animate-upAndDown" />
              </div>
            </div>
            <div className="bg-[#c1dcff] w-full h-[1px]"></div>
            <div className="w-full h-[30vh]">
              <span className="z-10 text-md font-normal text-wrap text-[#ffffff]">
                Treatment plans can be tailored to individual needs, with
                multiple-session packages available for addressing chronic
                conditions effectively.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start relative gap-6 bg-[#d7e9f3] h-[50vh] w-1/3 rounded-[2.5rem] pt-8 px-12 group shadow-[0px_5px_0px_rgba(0,0,0,0.25)]">
            <div className="flex absolute right-0 bottom-0">
              <img
                src="src\assets\h1-12.webp"
                alt="Example"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-2">
              <span className="text-3xl font-semibold text-wrap text-[#051B2E]">
                Benefits
              </span>
              <div className="bg-[#051B2E] w-16 h-16 rounded-2xl flex items-center justify-center">
                <FaGift className="text-3xl text-[#FFFFFF] group-hover:animate-upAndDown" />
              </div>
            </div>
            <div className="bg-[#a973317f] w-full h-[1px]"></div>
            <div className="flex flex-col gap-4 text-md">
              <span>
                {" "}
                Spinal manipulations can provide significant relief from back
                pain by:
              </span>
              <div className="z-10 flex flex-col items-start justify-start gap-2 text-[#051B2E] text-md h-[22vh]">
                <span className="flex flex-row gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>Reducing pressure on sensitive nerves</span>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>Increasing joint range of motion</span>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>Restoring blood flow</span>
                </span>

                <span className="flex flex-row gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>Reducing muscle tension</span>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>Stimulating the release of endorphins</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex lg:hidden flex-col justify-center border shadow-lg border-[#DADEE2] bg-[#F1F2F2] rounded-3xl gap-6 
        items-start t-48  min-h-[110vh] font-poppins mx-2 p-4 relative mb-8 pb-24"
      >
        <div className="flex absolute top-0 left-0">
          <img
            src="src\assets\bl10.webp"
            alt="Example"
            className="w-full h-full opacity-50"
          />
        </div>
        <div className="flex absolute bottom-0 right-0">
          <img
            src="src\assets\bl10.webp"
            alt="Example"
            className="w-full h-full opacity-50"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-8 z-10 py-8 items-center justify-start">
            <div className="flex flex-col items-center justify-center gap-2">
              <div>
                <img
                  src="src\assets\logo_sil.svg"
                  alt="Example"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <span className="text-md font-normal text-[#051b2e]">
                  Your Health is Our Top Goal
                </span>
              </div>
            </div>
            <div>
              <span className="text-3xl font-semibold text-wrap text-[#051b2e]">
                Spinal Manipulation
              </span>
            </div>
            <div className="w-full">
              <span className="text-md font-normal text-wrap text-[#051B2E] ">
                Spinal manipulation, a common chiropractic treatment, is a
                passive technique where a therapist applies a targeted manual
                impulse or thrust to a joint, typically near the end of its
                passive range of motion.
              </span>
            </div>
          </div>
          <div className="z-10">
            <img
              src="src\assets\sm.jpg"
              alt="Example"
              className="w-[100%] h-[100%] rounded-3xl z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.10)] 
      hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="w-full z-10">
          <span className="text-md font-normal text-wrap text-[#051B2E] ">
            This often results in an audible &quot;crack,&quot; which is widely
            attributed to the cavitation of spinal facet joints. Cavitation
            occurs when gas bubbles form in the joint due to lower-than-normal
            pressure, and the subsequent rise in pressure causes the bubble to
            implode.
          </span>
        </div>
        <div className="flex flex-col w-full z-10 items-start justify-center gap-12">
          <div className="flex flex-col items-start justify-start relative gap-6 bg-[#ffcb53e2] h-[26rem] w-full rounded-[2.5rem] pt-8 px-12 group shadow-[0px_5px_0px_rgba(0,0,0,0.25)]">
            <div className="flex absolute right-0 bottom-0">
              <img
                src="src\assets\h1-11.webp"
                alt="Example"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-2">
              <span className="text-3xl font-semibold text-wrap text-[#051B2E]">
                Mechanism
              </span>
              <div className="bg-[#051B2E] w-16 h-16 rounded-2xl flex items-center justify-center">
                <FaCogs className="text-3xl text-[#FFFFFF] group-hover:animate-upAndDown" />
              </div>
            </div>
            <div className="bg-[#a973317f] w-full h-[1px]"></div>
            <div className="w-full h-[30vh]">
              <span className="text-md font-normal text-wrap text-[#051B2E] z-10">
                The primary characteristic of spinal manipulation techniques is
                achieving the popping or cracking sound in synovial joints. This
                audible release is thought to result from the implosion of gas
                bubbles within the joint, a phenomenon known as cavitation.
              </span>
            </div>{" "}
          </div>
          <div className="flex flex-col items-start justify-start relative gap-6 bg-[#051B2E] h-[24rem] w-full rounded-[2.5rem] pt-8 px-12 group shadow-[0px_5px_0px_rgba(0,0,0,0.25)]">
            <div className="flex flex-row items-center justify-between w-full gap-2">
              <span className="text-2xl font-semibold text-wrap text-[#ffffff]">
                Treatment Package
              </span>
              <div className="bg-[#ffffff] w-16 h-16 rounded-2xl flex items-center justify-center">
                <FaBox className="text-3xl text-[#051B2E] group-hover:animate-upAndDown" />
              </div>
            </div>
            <div className="bg-[#c1dcff] w-full h-[1px]"></div>
            <div className="w-full h-[30vh]">
              <span className="z-10 text-md font-normal text-wrap text-[#ffffff]">
                Treatment plans can be tailored to individual needs, with
                multiple-session packages available for addressing chronic
                conditions effectively.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start relative gap-6 bg-[#d7e9f3] h-[32rem] w-full rounded-[2.5rem] pt-8 px-12 group shadow-[0px_5px_0px_rgba(0,0,0,0.25)]">
            <div className="flex absolute right-0 bottom-0">
              <img
                src="src\assets\h1-12.webp"
                alt="Example"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-2">
              <span className="text-3xl font-semibold text-wrap text-[#051B2E]">
                Benefits
              </span>
              <div className="bg-[#051B2E] w-16 h-16 rounded-2xl flex items-center justify-center">
                <FaGift className="text-3xl text-[#FFFFFF] group-hover:animate-upAndDown" />
              </div>
            </div>
            <div className="bg-[#a973317f] w-full h-[1px]"></div>
            <div className="flex flex-col gap-4 text-md">
              <span>
                {" "}
                Spinal manipulations can provide significant relief from back
                pain by:
              </span>
              <div className="z-10 flex flex-col items-start justify-start gap-2 text-[#051B2E] text-md h-[22vh]">
                <span className="flex flex-row gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>Reducing pressure on sensitive nerves</span>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>Increasing joint range of motion</span>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>Restoring blood flow</span>
                </span>

                <span className="flex flex-row gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>Reducing muscle tension</span>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>Stimulating the release of endorphins</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinalManipulation;
