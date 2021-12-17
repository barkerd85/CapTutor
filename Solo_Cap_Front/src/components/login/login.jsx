import React from 'react';
import useState from 'react'
import axios from 'axios';




export default class Login extends React.Component {
    state = {
        userName: '',
        password: '',
    }
    

            
        
handleChange = event => {    
    this.setState({     
        [event.target.name] : event.target.value        
    });
}
              
        
handleSubmit = async event => {
    event.preventDefault();
             
        
await axios ({
    method:"post", 
    url:"https://localhost:44394/api/authentication/login",
    data:{          
        "userName": this.state.userName,
        "password": this.state.password,                               
    }
    })
    .then(response => localStorage.setItem('token', response.data.token));
    window.location="/home"
}

render(){
    return (
    <div>
        <body>
            <center><h3>Login</h3></center>
            <form onSubmit={this.handleSubmit}>
            <center><label for="userName">User Name:</label><input name="userName" type="text" value={this.state.userName} onChange={this.handleChange}></input></center>
            <center><label for="password">Password:</label><input name="password" type="password" value={this.state.password} onChange={this.handleChange}></input></center>
            <center><button type="submit">Login</button></center>
            </form>
        </body>
    </div>
         )
    }
             
}