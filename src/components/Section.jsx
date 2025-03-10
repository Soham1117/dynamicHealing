const Section = ({ section }) => {
  function handleClick(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="flex flex-col items-start justify-start bg-white rounded-2xl p-6 z-20 font-poppins gap-6 
        shadow-[0px_4px_0px_rgba(0,0,0,0.20)] hover:-translate-y-9 hover:shadow-2xl 
        transition-all duration-500 ease-out mt-10 w-full group"
    >
      <img
        src={section.img}
        alt="Example"
        className="w-full h-80 rounded-3xl object-cover relative group-hover:scale-105 transition-all duration-500 ease-in-out"
      />
      <h2 className="text-2xl font-medium text-[#051b2e] ml-2">
        {section.title}
      </h2>
      <p className="text-base text-[#68747A] ml-2">{section.text}</p>
      <button
        onClick={() => handleClick(section.id)}
        className="flex flex-row gap-3 text-base text-[#051b2e] ml-2 group"
      >
        Read More
        <div className="group-hover:translate-x-1 transition-all duration-300 ease-in-out">
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
        </div>
      </button>
    </div>
  );
};

export default Section;
