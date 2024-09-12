import React from 'react';

const Dropdown = ({ options, value, onChange }) => {
  return (
    <div className="dropdown-container">
      <select
        className="dropdown"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;