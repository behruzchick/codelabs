import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
import Home from './components/HomeComponent/HomePage/Home';
import Services from './components/HomeComponent/Services/Services';
import About from './components/HomeComponent/About/About';
import Portfolio from './components/HomeComponent/Portfolio/Portfolio';
import Header from './components/HomeComponent/Navbar/Navbar';
import city from './img/city.jpg'
import ServiceCreator from './components/ServiceCreator/ServiceCreator';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/service/systems/:systemName' element={<ServiceCreator/>}/>
      </Routes>
    </div>
  );
}

export default App;
