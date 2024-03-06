// MultiSelectDropdown.js
import { useState } from 'react';

const MultiSelectDropdown = ({ options, data, setFilterData, index }) => {

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionToggle = (option) => {
    let newFilterData = [...data];
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
      newFilterData[index].value = selectedOptions.filter((item) => item !== option);
    } else {
      setSelectedOptions([...selectedOptions, option]);
      newFilterData[index].value = [...selectedOptions, option];


    }
    setFilterData(newFilterData);
  };

  return (
    <div className="multi-select-dropdown">
      {options.map((option, index) => (

        <label key={index} className="option">
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionToggle(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default MultiSelectDropdown;
