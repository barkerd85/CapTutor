import React from 'react';
import axios from 'axios';
import './logout.css';
import Alert from 'react'



function Logout() {

    

   window.location="/login"; 
   localStorage.clear();
   alert("Logged out")





    return (
        <Alert severity="success"> Logged Out </Alert>
        
    )
}            

         
export default Logout