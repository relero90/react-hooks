import React from "react";
import { Routes, Route } from "react-router-dom";

import "./app.css";

import NavBar from "./components/nav/NavBar";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/count" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
