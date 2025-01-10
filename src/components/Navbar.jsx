import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";

// Shared navigation data
const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "dhs", label: "Dynamic Healing Session" },
  { id: "spinalManipulation", label: "Spinal Manipulation" },
  { id: "successStories", label: "Success Stories" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

// eslint-disable-next-line react/prop-types
const NavLinksVertical = ({ onItemClick }) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleClick = (id) => {
    setActiveItem(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    if (onItemClick) onItemClick();
  };

  return (
    <div className="flex flex-col items-start w-full pt-6 gap-6  ">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`relative w-full transition-colors duration-300 rounded-lg
            ${
              activeItem === item.id
                ? "bg-[#242733] text-[#f7fbff]"
                : "hover:bg-[#242733]/10"
            }`}
        >
          <button
            onClick={() => handleClick(item.id)}
            className="w-full px-6 py-4 text-left font-poppins font-medium"
          >
            {item.label}
          </button>
        </div>
      ))}
    </div>
  );
};

// Main Navbar Component
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
      setIsTop(currentScrollY === 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  function openFunc() {
    console.log(open);
    setOpen(!open);
  }

  return (
    <nav
      className={`sticky top-0 transition-all duration-300 ease-in-out 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${!isTop ? "bg-white/80 shadow-lg backdrop-blur-xl" : "bg-transparent"}
         py-3 z-50 rounded-2xl border border-gray-100/20`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-20">
          <img
            src="src/assets/logo_blue_2.png"
            alt="DH logo"
            className="h-16 drop-shadow-sm"
          />

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 hover:bg-gray-100/20 rounded-lg transition-colors"
          >
            {open ? <Menu size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 backdrop-blur-sm md:hidden transition-opacity duration-300
            ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => openFunc()}
        >
          <div
            className={`absolute right-0 top-0 h-screen w-80 bg-white transform transition-opacity duration-700 ease-in-out
              ${open ? "opacity-100" : "opacity-0"}`}
            onClick={() => openFunc()}
          >
            <div className="p-6 flex flex-col items-end mt-4 gap-8">
              <div className="flex flex-row justify-between w-full items-center">
                <img
                  src="src/assets/logo_blue_2.png"
                  alt="DH logo"
                  className="h-12 drop-shadow-sm"
                />
                <X size={35} onClick={() => setOpen(false)} />
              </div>
              <div className="bg-[#c1dcff] w-full h-[1px]"></div>
              <NavLinksVertical onItemClick={() => setOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
