import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePostPage from "./pages/create-post";
import PostPage from "./pages/post";
import PostsPage from "./pages/posts";
import SubredditPage from "./pages/subreddit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/posts/:_id" element={<PostPage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/subreddit/:_id" element={<SubredditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
