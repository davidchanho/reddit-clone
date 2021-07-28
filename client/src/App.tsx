import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "./pages/post";
import PostsPage from "./pages/posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/posts/:_id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
