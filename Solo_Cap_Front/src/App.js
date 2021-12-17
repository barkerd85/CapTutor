import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewUserLogin from './components/newuserlogin/newuserlogin';
import Login from './components/login/login';




function App() {
  return (
    <div className="App">
        <NavBar />
      <Routes>
        <Route path="/" exact element={<NewUserLogin/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </div>
  );
}
      

export default App;
        