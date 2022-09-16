import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Routes/Homepage/Homepage";
import { Singlepage } from "./Routes/Singlepage/Singlepage";
import { Wishpage } from "./Routes/Wishpage/Wishpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/singlepage/:pageid" element={<Singlepage />} />
        <Route path="/wishlist" element={<Wishpage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
