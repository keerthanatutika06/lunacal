// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './components/Home';
import Todos from './components/Todos';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path = "/todos" element = {<Todos />} />
    </Routes>
  </BrowserRouter>
);

export default App;
