import React from 'react';
import './newuserlogin.css';
import axios from 'axios';



export default class NewUserLogin extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
        phoneNumber: '',
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
            url:"http://127.0.0.1:8000/api/auth/login/",
            data:{          
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "userName": this.state.userName,
                "password": this.state.password,
                "email": this.state.email,
                "phoneNumber": this.state.phoneNumber
            }
        })
        window.location="/login"
      }
    
render(){
return (
            <div>
                <body>
                <center><h3>Create New User</h3></center>
                    <form onSubmit={this.handleSubmit}>
                    <center><label for="firstName">Enter First Name:</label><input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange}></input></center>
                    <center><label for="lastName">Enter Last Name:</label><input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange}></input></center>
                    <center><label for="userName">Enter User Name:</label><input name="userName" type="text" value={this.state.userName} onChange={this.handleChange}></input></center>
                    <center><label for="password">Create Password:</label><input name="password" type="password" value={this.state.password} onChange={this.handleChange}></input></center>
                    <center><label for="email">Enter Email Address:</label><input name="email" type="text" value={this.state.email} onChange={this.handleChange}></input></center>
                    <center><label for="phoneNumber">Enter Phone Number:</label><input name="phoneNumber" type="text" value={this.state.phoneNumber} onChange={this.handleChange}></input></center>
                    <center><button type="submit">Submit</button></center>
                    </form>
                    </body>
            </div>
        )
    }    
}
