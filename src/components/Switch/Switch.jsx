// import React from 'react';
import "./Switch.css";

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <div className="react-switch-container">
        <span>👨‍💼</span>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          style={{ background: isOn && onColor }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
        <span>🤖</span>
      </div>
    </>
  );
};

export default Switch;
