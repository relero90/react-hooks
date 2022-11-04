import React from "react";
import { Routes, Route } from "react-router-dom";

import "./app.css";

import NavBar from "./components/nav/NavBar";
import Counter from "./components/counter/Counter";
import Dogs from "./components/dog-gallery/Dogs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/count" element={<Counter />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </div>
  );
}

export default App;
