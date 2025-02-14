import { FaLocationDot, FaThreads, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import Dropdown from "./dropDown";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";
import graphic from "../assets/vr10.jpg";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    mainSymptoms: "",
    symptoms: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.symptoms = formData.symptoms.join(", ");
    emailjs
      .send(
        "service_7kiy48f",
        "template_zmkiitc",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          age: formData.age,
          address: formData.address,
          mainSymptoms: formData.mainSymptoms,
          symptoms: formData.symptoms,
        },
        "TPs-SVzVhm_hE72mT"
      )
      .then(() => {
        alert("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          address: "",
          mainSymptoms: "",
          symptoms: [],
        });
      })
      .catch((error) => {
        alert("Failed to send email.");
        console.error(error);
      });
  };

  const setSymptoms = (symptoms) => {
    setFormData((prevData) => ({ ...prevData, symptoms }));
  };

  return (
    <div>
      <div className="hidden lg:flex border border-[#DADEE2] shadow-lg rounded-3xl flex-col gap-4 items-start justify-between min-h-[80vh] font-poppins p-8 relative mb-4">
        <div className="absolute inset-0">
          <img
            src={graphic}
            alt="Background"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-row items-start justify-between w-full gap-4">
          <div className="flex flex-col gap-8 z-10 items-start">
            <div className="flex text-4xl font-bold text-[#011954] items-start justify-start">
              <span>Request An Appointment!</span>
            </div>
            <div className="flex text-base text-[#68747A] items-start justify-start">
              <span>
                We are always ready to help you at any time, let’s talk
                together.
              </span>
            </div>
            <div className="flex flex-col gap-8 justify-start">
              <div className="flex flex-row items-start">
                <div className="flex flex-row gap-6 items-center w-1/2">
                  <div className="text-4xl text-[#011954]">
                    <FaLocationDot />
                  </div>
                  <div className="flex flex-col text-wrap gap-4">
                    <span className="text-xl font-semibold text-[#011954]">
                      Address
                    </span>
                    <span className="text-base text-[#68747A] text-warp">
                      SF-18B, Lotus Aura, Sama-Savli Rd, Vadodara, Gujarat
                    </span>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-center w-1/2">
                  <div className="text-4xl text-[#011954]">
                    <FaPhone />
                  </div>
                  <div className="flex flex-col text-wrap gap-4">
                    <span className="text-xl font-semibold text-[#011954]">
                      Contact With Us
                    </span>
                    <span className="text-base text-[#68747A]">
                      +91 98250 25020
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="flex flex-row gap-6 items-center w-1/2">
                  <div className="text-4xl text-[#011954]">
                    <MdEmail />
                  </div>
                  <div className="flex flex-col text-wrap gap-4">
                    <span className="text-xl font-semibold text-[#011954]">
                      Email Address
                    </span>
                    <span className="text-base text-[#68747A]">
                      dynamichealing @gmail.com
                    </span>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-center w-1/2">
                  <div className="text-4xl text-[#011954]">
                    <FaClock />
                  </div>
                  <div className="flex flex-col text-wrap gap-4">
                    <span className="text-xl font-semibold text-[#011954]">
                      Working Time
                    </span>
                    <span className="text-base text-[#68747A]">
                      Mon - Friday: <br /> 10:30 AM - 06:00 PM
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-12 items-end">
                <div className="flex text-[#011954]">Follow Us:</div>
                <div className="flex flex-col items-center text-2xl gap-2 text-[#011954] group">
                  <div
                    onClick={() =>
                      window.open("https://www.facebook.com/DrDivij/", "_blank")
                    }
                    className="scale-0 transition-all duration-300 ease-in-out group-hover:scale-100 cursor-pointer"
                  >
                    <FaFacebook />
                  </div>
                  <span className="text-base">Facebook</span>
                </div>
                <div className="flex flex-col items-center text-2xl gap-2 text-[#011954] group">
                  <div
                    onClick={() =>
                      window.open("https://www.instagram.com/drdivij", "_blank")
                    }
                    className="scale-0 transition-all duration-300 ease-in-out group-hover:scale-100 cursor-pointer"
                  >
                    <FaInstagram />
                  </div>
                  <span className="text-base">Instagram</span>
                </div>
                <div className="flex flex-col items-center text-2xl gap-2 text-[#011954] group">
                  <div
                    onClick={() =>
                      window.open("https://www.threads.net/@drdivij", "_blank")
                    }
                    className="scale-0 transition-all duration-300 ease-in-out group-hover:scale-100 cursor-pointer"
                  >
                    <FaThreads />
                  </div>
                  <span className="text-base">Threads</span>
                </div>
                <div className="flex flex-col items-center text-2xl gap-2 text-[#011954] group">
                  <div
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@divijtanna",
                        "_blank"
                      )
                    }
                    className="scale-0 transition-all duration-300 ease-in-out group-hover:scale-100 cursor-pointer"
                  >
                    <FaYoutube />
                  </div>
                  <span className="text-base">Youtube</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 w-1/2 z-10 ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
              <div className="flex flex-row gap-6 ">
                <input
                  type="text"
                  onChange={handleChange}
                  required
                  name="name"
                  className="flex-1 border  border-gray-300 rounded-2xl p-5 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
                  placeholder="*Full Name"
                />
                <input
                  type="email"
                  onChange={handleChange}
                  required
                  name="email"
                  className="flex-1 border border-gray-300 rounded-2xl p-5 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
                  placeholder="*Email Address"
                />
              </div>
              <div className="flex flex-row gap-6">
                <input
                  type="text"
                  onChange={handleChange}
                  required
                  name="phone"
                  className="flex-1 border border-gray-300 rounded-2xl p-5 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
                  placeholder="*Phone"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  required
                  name="age"
                  className="flex-1 border border-gray-300 rounded-2xl p-5 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
                  placeholder="*Age"
                />
              </div>
              <div className="flex">
                <input
                  type="text"
                  onChange={handleChange}
                  required
                  name="address"
                  className="flex-1 border border-gray-300 rounded-2xl p-5 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
                  placeholder="*Address"
                />
              </div>
              <div className="flex">
                <input
                  type="text"
                  onChange={handleChange}
                  required
                  name="mainSymptoms"
                  className="flex-1 border border-gray-300 rounded-2xl p-5 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
                  placeholder="*Main Symptoms"
                />
              </div>
              <div className="flex flex-row gap-6 justify-between items-center">
                <Dropdown setSymptoms={setSymptoms} />

                <button
                  type="submit"
                  className="flex flex-row gap-2 relative overflow-hidden bg-[#051b2e] text-white p-5 rounded-xl group"
                >
                  <span className="relative z-10">Request An Appointment</span>
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
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center w-full z-10">
          <div className="flex">
            <span className="text-xl font-semibold text-[#011954]">
              Disclaimer
            </span>
          </div>
          <span className="text-sm font-extralight text-wrap text-slate-600">
            Treatment sessions are meant to address energetic blockages that may
            have an impact on wellness, facilitating the body&apos;s natural
            ability to bring itself to homeostasis, which may have an impact on
            health & well-being. We have no intention to replace your medical
            doctor or medical treatments. We do not claim to treat, cure or
            diagnose disease but to promote energetic balance within the body.
          </span>
        </div>
      </div>
      <div className="flex mx-6 lg:hidden flex-col border border-[#DADEE2] shadow-lg rounded-3xl lg:flex-row lg:flex-wrap gap-4 items-center lg:items-start lg:justify-evenly mt-12  min-h-[60vh] font-poppins p-4 relative mb-8">
        <div className="absolute inset-0">
          <img
            src={graphic}
            alt="Background"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-8 z-10 items-center justify-center">
          <div className="flex text-2xl font-semibold text-[#011954] items-start justify-start">
            <span>Request An Appointment!</span>
          </div>
          <div className="flex text-base text-[#68747A] items-start justify-start">
            <span>
              We are always ready to help you at any time, let’s talk together.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full z-10 ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
            <input
              type="text"
              onChange={handleChange}
              required
              name="name"
              className="flex-1 border  border-gray-300 rounded-2xl p-5 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
              placeholder="*Full Name"
            />
            <input
              type="email"
              onChange={handleChange}
              required
              name="email"
              className="flex-1 border border-gray-300 rounded-2xl p-5 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
              placeholder="*Email Address"
            />
            <input
              type="text"
              onChange={handleChange}
              required
              name="phone"
              className="flex-1 border border-gray-300 rounded-2xl p-5 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
              placeholder="*Phone"
            />
            <input
              type="text"
              onChange={handleChange}
              required
              name="age"
              className="flex-1 border border-gray-300 rounded-2xl p-5 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
              placeholder="*Age"
            />
            <input
              type="text"
              onChange={handleChange}
              required
              name="address"
              className="flex-1 border  border-gray-300 rounded-2xl p-5 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
              placeholder="*Address"
            />
            <input
              type="text"
              onChange={handleChange}
              required
              name="mainSymptoms"
              className="flex-1 border border-gray-300 rounded-2xl p-5 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
              placeholder="*Main Symptoms"
            />
            <div className="flex flex-col gap-6 justify-center items-start w-full">
              <Dropdown setSymptoms={setSymptoms} />

              <button
                type="submit"
                className="flex w-full flex-row gap-2 relative overflow-hidden bg-[#051b2e] text-white p-5 rounded-xl group"
              >
                <span className="relative z-10">Request An Appointment</span>
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
          </form>
        </div>
        <div className="flex flex-col gap-8 z-10 w-full items-center justify-center mt-12">
          <div className="flex text-2xl font-semibold text-[#011954] items-start justify-start">
            <span>Contact Us</span>
          </div>
        </div>
        <div className="flex flex-col gap-8 z-20">
          <div className="flex flex-row gap-6 items-center w-full">
            <div className="text-4xl text-[#011954]">
              <FaLocationDot />
            </div>
            <div className="flex flex-col text-wrap gap-4">
              <span className="text-lg font-semibold text-[#011954]">
                Address
              </span>
              <span className="text-base text-[#68747A] text-warp">
                SF-18B, Lotus Aura, Sama-Savli Rd, Vadodara, Gujarat
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center w-full">
            <div className="text-4xl text-[#011954]">
              <FaPhone />
            </div>
            <div className="flex flex-col text-wrap gap-4">
              <span className="text-lg font-semibold text-[#011954]">
                Contact With Us
              </span>
              <span className="text-base text-[#68747A]">+91 98250 25020</span>
            </div>
          </div>

          <div className="flex flex-row gap-6 items-center w-full">
            <div className="text-4xl text-[#011954]">
              <MdEmail />
            </div>
            <div className="flex flex-col text-wrap gap-4">
              <span className="text-lg font-semibold text-[#011954]">
                Email Address
              </span>
              <span className="text-base text-[#68747A]">
                dynamichealing.in@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center w-full">
            <div className="text-4xl text-[#011954]">
              <FaClock />
            </div>
            <div className="flex flex-col text-wrap gap-4">
              <span className="text-xl font-semibold text-[#011954]">
                Working Time
              </span>
              <span className="text-lg text-[#68747A]">
                Mon - Friday: 10:30 AM - 06:00 PM
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-6 items-center text-3xl">
            <div className="flex text-[#011954] text-base">Follow Us:</div>
            <div
              onClick={() =>
                window.open("https://www.facebook.com/DrDivij/", "_blank")
              }
              className="scale-100 transition-all duration-300 ease-in-out group-hover:scale-100 cursor-pointer"
            >
              <FaFacebook />
            </div>
            <div
              onClick={() =>
                window.open("https://www.instagram.com/drdivij", "_blank")
              }
              className="scale-100 transition-all duration-300 ease-in-out group-hover:scale-100 cursor-pointer"
            >
              <FaInstagram />
            </div>
            <div
              onClick={() =>
                window.open("https://www.threads.net/@drdivij", "_blank")
              }
              className="scale-100 transition-all duration-300 ease-in-out group-hover:scale-100 cursor-pointer"
            >
              <FaThreads />
            </div>

            <div
              onClick={() =>
                window.open("https://www.youtube.com/@divijtanna", "_blank")
              }
              className="scale-100 transition-all duration-300 ease-in-out group-hover:scale-100 cursor-pointer"
            >
              <FaYoutube />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold text-[#011954]">
              Disclaimer
            </span>
            <div className="z-10">
              <span className="text-sm font-extralight text-wrap text-slate-600">
                Treatment sessions are meant to address energetic blockages that
                may have an impact on wellness, facilitating the body&apos;s
                natural ability to bring itself to homeostasis, which may have
                an impact on health & well-being. We have no intention to
                replace your medical doctor or medical treatments. We do not
                claim to treat, cure or diagnose disease but to promote
                energetic balance within the body.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
