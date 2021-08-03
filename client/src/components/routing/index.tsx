import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "../../pages/admin";
import CreatePostPage from "../../pages/create";
import Login from "../../pages/login";
import PostPage from "../../pages/post";
import PostsPage from "../../pages/posts";
import Register from "../../pages/register";
import SubredditPage from "../../pages/subreddit";
import Template from "../../pages/template";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<PostsPage />} />
          <Route path="/r/all" element={<PostsPage />} />
          <Route path="/r/popular" element={<PostsPage />} />
          <Route path="/r/:name" element={<SubredditPage />} />
          <Route path="/r/:name/:_id" element={<PostPage />} />
        </Route>
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
