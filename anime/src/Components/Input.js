import React from "react";
import "./components.css";

const Input = ({ InputChangeHandler, placeholder }) => {
  return (
    <div className="input-container">
      <input
        onChange={(e) => InputChangeHandler(e)}
        placeholder={placeholder}
        className="input"
        type="search"
      />
    </div>
  );
};

export default React.memo(Input);
