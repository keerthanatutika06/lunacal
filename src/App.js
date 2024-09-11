// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './components/Home';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
