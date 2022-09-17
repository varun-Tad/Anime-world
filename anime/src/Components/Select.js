import "./components.css";

const Select = ({ selectChangeHandler }) => {
  return (
    <div onChange={(e) => selectChangeHandler(e)} className="select-container">
      <select className="select">
        <option>None</option>
        <option>Action</option>
        <option>Sci-Fi</option>
        <option>Drama</option>
        <option>Mystery</option>
        <option>Suspense</option>
        <option>Romance</option>
        <option>Adventure</option>
      </select>
    </div>
  );
};

export default Select;
