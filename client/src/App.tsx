import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
