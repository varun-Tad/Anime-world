import React from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const LazyHomepage = React.lazy(() => import("./Routes/Homepage/Homepage"));
const LazySinglepage = React.lazy(() =>
  import("./Routes/Singlepage/Singlepage")
);
const LazyWishpage = React.lazy(() => import("./Routes/Wishpage/Wishpage"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="Loading...">
              <LazyHomepage />
            </React.Suspense>
          }
        />
        <Route
          path="/singlepage/:pageid"
          element={
            <React.Suspense fallback="Loading...">
              <LazySinglepage />
            </React.Suspense>
          }
        />
        <Route
          path="/wishlist"
          element={
            <React.Suspense fallback="Loading...">
              <LazyWishpage />
            </React.Suspense>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
