import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./Routes/Homepage/Homepage";
import { Singlepage } from "./Routes/Singlepage/Singlepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/singlepage/:pageid" element={<Singlepage />} />
      </Routes>
    </div>
  );
}

export default App;
