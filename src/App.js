import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import "font-awesome/css/font-awesome.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
