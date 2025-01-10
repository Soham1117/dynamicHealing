import { NavLink } from "react-router-dom";

function NavLinksVertical() {
  return (
    <div className="flex flex-col items-center w-[90%] justify-start mt-5 ml-5 p-10 gap-12 text-2xl bg-[#081b18] shadow-lg shadow-slate-950 bg-opacity-80 backdrop-blur-md min-h-screen rounded-lg md:hidden">
      <NavLink
        className="hover:text-[rgb(45,157,146)] hover:underline hover:underline-offset-8"
        to="/about"
      >
        01. About
      </NavLink>
      <NavLink
        className="hover:text-[rgb(45,157,146)] hover:underline hover:underline-offset-8"
        to="/experience"
      >
        02. Experience
      </NavLink>
      <NavLink
        className="hover:text-[rgb(45,157,146)] hover:underline hover:underline-offset-8"
        to="/work"
      >
        03. Work
      </NavLink>
      <NavLink
        className="hover:text-[rgb(45,157,146)] hover:underline hover:underline-offset-8"
        to="/contact"
      >
        04. Contact
      </NavLink>

      <div className="flex justify-center">
        <button
          className="border-2 border-[#EEEEEE] text-[#EEEEEE] rounded-md p-2 pl-3 pr-3 
                    hover:shadow-[4px_4px_0px_rgb(151,255,244)] hover:translate-y-[-3px] hover:translate-x-[-3px] 
                    transition-transform duration-200 hover:border-[rgb(45,157,146)]"
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default NavLinksVertical;
