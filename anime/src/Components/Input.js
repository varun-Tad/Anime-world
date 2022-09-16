import "./components.css";

export const Input = ({ InputChangeHandler, placeholder }) => {
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
