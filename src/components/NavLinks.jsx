import { useState, useRef, useEffect } from "react";

const NavLinks = () => {
  const [rect, setRect] = useState({ width: 0, left: 0 });
  const [selectedRect, setSelectedRect] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState("home");
  const containerRef = useRef(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "dhs", label: "Dynamic Healing Session" },
    { id: "spinalManipulation", label: "Spinal Manipulation" },
    { id: "successStories", label: "Success Stories" },
    { id: "faq", label: "FAQs" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    }, options);

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      // Cleanup
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const selectedElement = document.querySelector(
        `[data-id="${activeItem}"]`
      );
      if (selectedElement) {
        const itemRect = selectedElement.getBoundingClientRect();
        const newRect = {
          width: itemRect.width,
          left: itemRect.left - containerRect.left,
        };
        setSelectedRect(newRect);
        setRect(newRect);
      }
    }
  }, [activeItem]);

  const handleMouseEnter = (event, index) => {
    const itemRect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    setHoveredItem(index);
    setRect({
      width: itemRect.width + 18,
      left: itemRect.left - containerRect.left - 9,
    });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    if (selectedRect) {
      setRect(selectedRect);
    }
  };

  const scrollToSection = (elementId) => {
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (event, id) => {
    const itemRect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const newRect = {
      width: itemRect.width,
      left: itemRect.left - containerRect.left,
    };
    setSelectedRect(newRect);
    setRect(newRect);
    setActiveItem(id);
    scrollToSection(id);
  };

  return (
    <div
      className="relative flex items-center justify-center text-[#051b2e]"
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute bg-[#242733] transition-all duration-300 ease-in-out rounded-3xl"
        style={{
          left: rect.left,
          width: rect.width,
          height: "60%",
        }}
      />

      <div className="flex flex-row md:gap-2 lg:gap-2 items-center">
        {navItems.map((item, index) => (
          <div
            key={item.id}
            data-id={item.id}
            className={`relative px-6 py-3 text-wrap transition-colors duration-300 font-poppins font-medium cursor-pointer ${
              activeItem === item.id
                ? hoveredItem === index || hoveredItem === null
                  ? "text-[#f7fbff]"
                  : "text-[#051b2e]"
                : hoveredItem === index
                ? "text-[#f7fbff]"
                : "text-[#051b2e] hover:text-[#f7fbff]"
            }`}
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onClick={(e) => handleClick(e, item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
