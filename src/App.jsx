import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "./components/micro/loader";

const Home = React.lazy(() => import("./page/homepage"));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
