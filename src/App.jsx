import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayouts from "./layouts/DefaultLayouts";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Route>{" "}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
