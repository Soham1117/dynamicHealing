import { useState } from "react";

const Question = ({ question }) => {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col border border-[#cfcac5] rounded-2xl h-auto p-4 pl-8 
      pr-8 group cursor-pointer lg:w-2/3 w-full transition-all duration-300 ease-in-out hover:border-[#524e3e]
      ${
        isClicked
          ? "shadow-[0px_4px_0px_rgba(0,0,0,0.25)] bg-[#F1F2F2]"
          : "shadow-none"
      }`}
    >
      <div className="flex flex-row items-center justify-between group">
        <span className="text-lg font-semibold text-wrap text-[#051b2e] group">
          {question.question}
        </span>
        <span>
          {!isClicked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          )}
        </span>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden group ${
          isClicked ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <span className="block mt-2 text-[#051b2e]">{question.answer}</span>
      </div>
    </div>
  );
};

export default Question;
