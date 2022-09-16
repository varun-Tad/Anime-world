import "./components.css";

export const Input = ({ placeholder }) => {
  return (
    <div className="input-container">
      <input placeholder={placeholder} className="input" type="search" />
    </div>
  );
};
