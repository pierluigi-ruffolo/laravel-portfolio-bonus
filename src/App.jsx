import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayouts from "./layouts/DefaultLayouts";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayouts />}>
          <Route path="/" element={<Home />} />
        </Route>{" "}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
