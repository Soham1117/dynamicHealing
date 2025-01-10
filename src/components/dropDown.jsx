import { useState } from "react";

const Dropdown = ({ setSymptoms }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleAddOption = (option) => {
    if (option && !selectedOptions.includes(option)) {
      const updatedOptions = [...selectedOptions, option];
      setSelectedOptions(updatedOptions);
      setSymptoms(updatedOptions);
    }
  };

  const handleRemoveOption = (option) => {
    const updatedOptions = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(updatedOptions);
    setSymptoms(updatedOptions);
  };

  const options = [
    "Diabetes",
    "Thyroid",
    "Stress",
    "Insomnia",
    "PCOD",
    "Prostate",
    "Constipation",
    "Blood Pressure",
  ];

  return (
    <div className="flex flex-col items-start space-y-4 ">
      <div className="flex flex-wrap gap-2">
        {selectedOptions.map((option) => (
          <div
            key={option}
            className="flex items-center space-x-2 text-sm bg-white border px-3 py-1 rounded-full "
          >
            <span>{option}</span>
            <button
              className="text-red-500 hover:text-red-700 focus:outline-none"
              onClick={() => handleRemoveOption(option)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Dropdown Selector */}
      <div className="relative ">
        <select
          className="bg-white border border-gray-300 text-gray-400 rounded-2xl p-4 transition-all duration-300 ease-in-out focus:border-black  hover:border-black"
          onChange={(e) => handleAddOption(e.target.value)}
        >
          <option value="" disabled selected>
            Select Symptoms
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
