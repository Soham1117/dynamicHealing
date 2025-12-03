import { useState, useEffect } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch("/config.json")
      .then((response) => response.json())
      .then((data) => {
        setLocation(data.location);
      })
      .catch((error) => {
        console.error("Error loading config:", error);
      });
  }, []);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentDate.setMonth(currentDate.getMonth() - 1)
    );
    setCurrentDate(new Date(prevMonth));
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentDate.setMonth(currentDate.getMonth() + 1)
    );
    setCurrentDate(new Date(nextMonth));
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    console.log("Rendering days for:", year, month);
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();
    const days = [];
    let thirdFriday = new Date(year, month, 1);

    while (thirdFriday.getDay() !== 5) {
      thirdFriday.setDate(thirdFriday.getDate() + 1);
    }

    thirdFriday.setDate(thirdFriday.getDate() + 14);

    if (thirdFriday.getDate() <= 18) {
      thirdFriday.setDate(thirdFriday.getDate() + 7);
    }
    const weekend = {
      saturday: new Date(thirdFriday.getTime()),
      sunday: new Date(thirdFriday.getTime()),
    };

    weekend.saturday.setDate(thirdFriday.getDate() + 1);
    weekend.sunday.setDate(thirdFriday.getDate() + 2);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-gray-400"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      let isThirdFriday = day === thirdFriday.getDate();
      let isThirdSaturday = day === weekend.saturday.getDate();
      let isThirdSunday = day === weekend.sunday.getDate();

      if (month == 11) {
        isThirdFriday = day === 20;
        isThirdSaturday = day === 21;
        isThirdSunday = day === 22;
      }
      const isSpecialDay = isThirdFriday || isThirdSaturday || isThirdSunday;

      days.push(
        <div
          key={day}
          className={`relative group flex items-center justify-center h-8 w-8 lg:h-12 lg:w-12 rounded-lg ${
            isSpecialDay ? "cursor-pointer bg-[#d5e8f2] text-blue-700" : ""
          }`}
        >
          {day}
          {isSpecialDay && (
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-[#011954] text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {location || "Loading..."}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="p-4 max-w-md mx-auto border border-white text-white rounded-3xl shadow-black">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="transition-all delay-100 ease-in-out hover:text-blue-300"
        >
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
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="transition-all delay-100 ease-in-out hover:text-blue-300"
        >
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
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 ">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-semibold font-mon">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
