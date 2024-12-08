import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from './Blog';
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/:blogId' element={<Blog/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);


