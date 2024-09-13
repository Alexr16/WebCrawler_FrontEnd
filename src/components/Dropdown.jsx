import React from 'react';
import './Dropdown.css';

const Dropdown = ({ options, value, onChange }) => {
  return (
    <div className="filter-dropdown">
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
