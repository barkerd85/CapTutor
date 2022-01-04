import React, { Component, useState } from 'react';
// import { Link } from 'react-router-dom';
import './header.css';
import axios from 'axios';
// import { Navbar, Nav, Dropdown, NavItem, NavLink, NavbarBrand, NavDropdown } from 'react-bootstrap';





function Header() {
 
  
    


    let user = JSON.parse(localStorage.getItem('user-info'))
    console.warn(user)
    if (localStorage.token){
        return (
        <div className="navbar">
        <a className="active" href="/home">🏠&nbsp;&nbsp; Home</a>
        <a href="/login">🔓&nbsp;&nbsp; Login </a>
        <a href="/contact">📠&nbsp;&nbsp; Contact</a>
        <center><button className="btn5" onClick={() => {
            localStorage.clear()
            alert("logged out")
            window.location='/login'
        }}>
            Log Out
        </button></center>
        
        </div>
        );
    }
    else {
        return (
            <div className="navbar">
            <a className="active" href="/home">🏠&nbsp;&nbsp; Home</a>
            <a href="/login">🔓&nbsp;&nbsp; Login </a>
            <a href="/contact">📠&nbsp;&nbsp; Contact</a>
            
            </div>
            );
    }
}

export default Header; 
      
    