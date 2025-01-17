import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsPage from './pages/PostsPage'; // PostsPage sahifasi
import HomePage from './pages/HomePage'; // HomePage sahifasi
import PostCreatePage from './pages/PostCreatePage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostsPage />} /> {/* Dynamic post page */}
        <Route path='/create' element={<PostCreatePage />} />
      </Routes>
      <footer  style={{paddingTop: "20px"}}>Version 1.01 created by Islomjon Kamolov</footer>
    </Router>
  );
};

export default App;
