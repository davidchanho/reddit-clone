import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePostPage from '../../pages/create-post';
import PostPage from '../../pages/post';
import PostsPage from '../../pages/posts';
import SubredditPage from '../../pages/subreddit';
import Template from '../../pages/template';

function Routing() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Template />}>
            <Route path="/" element={<PostsPage />} />
            <Route path="/r/:name" element={<SubredditPage />} />
            <Route path="/r/:name/:_id" element={<PostPage />} />
          </Route>
          <Route path="/create" element={<CreatePostPage />} />
        </Routes>
      </BrowserRouter>
    );
}

export default Routing
