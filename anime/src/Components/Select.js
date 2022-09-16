import "./components.css";

export const Select = () => {
  return (
    <div className="select-container">
      <select className="select">
        <option>None</option>
        <option>Action</option>
        <option>Sci-Fi</option>
        <option>Drama</option>
        <option>Mystery</option>
        <option>Suspense</option>
        <option>Adventure</option>
      </select>
    </div>
  );
};
