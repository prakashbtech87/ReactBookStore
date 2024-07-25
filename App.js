import logo from './logo.svg';
import './App.css';
import NavBar from './components/partials/NavBar';
import React from 'react';
import Home from './components/Home';
import About from './components/partials/About';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}  >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />        
    </Route>
  </Routes>
  

  );
}

export default App;

