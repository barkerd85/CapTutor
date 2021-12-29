import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import axios from 'axios';
import { Navbar, Nav, Dropdown, NavItem, NavLink, NavbarBrand, NavDropdown } from 'react-bootstrap';




function Header(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.warn(user)
    return (
    <div class="navbar">
    <a class="active" href="/home">🏠&nbsp;&nbsp; Home</a>
    <a href="/login">🔓&nbsp;&nbsp; Login </a>
    <a href="/contact">📠&nbsp;&nbsp; Contact</a>
    <a href="/logout">🔒 &nbsp;&nbsp;Logout </a>
    
    </div>
    );
}

export default Header; 
      
    
  
  
                  
                 
                      
                    
                

                

           
                 
                 
                
               

            