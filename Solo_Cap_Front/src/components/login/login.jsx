import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './login.css'




// user login method
export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }
    

            
        
handleChange = event => {    
    this.setState({     
        [event.target.name] : event.target.value        
    });
}
              
        
handleSubmit = async event => {
    event.preventDefault();
             
//  request tested on postman to log in a created user succesfully       
await axios ({
    method:'post',
    url:"http://127.0.0.1:8000/api/auth/login/",
    data:{          
        "username": this.state.username,
        "password": this.state.password,                               
    }
    })
    .then(response => localStorage.setItem('token', response.data.token));

    window.location="/home"
}

render(){
    return (
        <body>
    <center>    
        <div className="form-group">
            <br />
        
        
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                <legend>&nbsp;&nbsp; Login &nbsp;&nbsp;</legend>
            <center><label for="username" className='user'>User Name:</label>&nbsp;&nbsp;<input name="username" type="text" value={this.state.username} onChange={this.handleChange}></input></center>
            <br />
            <center><label for="password" className='pass'>Password:</label>&nbsp;&nbsp;<input name="password" type="password" value={this.state.password} onChange={this.handleChange}></input></center>
            <br />
            <center><button  type="submit" className='btn'>Login</button></center></fieldset>
            <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br /><br /><br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <footer>© 2021 JD Schools</footer>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
            </form>
        
    </div>
    
    </center>
     </body>
         )
    }
            
}