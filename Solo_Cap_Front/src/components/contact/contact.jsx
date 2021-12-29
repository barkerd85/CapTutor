import React from 'react';
import './contact.css';
import axios from 'axios';




// contact us tab tested succesfully in postman
class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://127.0.0.1:8000/api/auth/login/contact",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
    window.location="/home"
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
    
  }

  render() {
    return(
        <center>
      <div className="form-group">
          <br />
          <br />
          <br />
          <br />
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <fieldset>
            <legend>&nbsp;&nbsp; Contact Us 📞 &nbsp;&nbsp;</legend>
            <br />
          <div className="form-group">
              <label className='name'>Name:</label>
              <br />
              <input type="text" className="form-control" rows="8" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              
          </div>
          <br />
          <div className="form-group">
              <label className='email'>Email Address:</label>
              <br />
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <br />
          <div className="form-group">
              <label className='message'>Message:</label>
              <br />
              <textarea className="form-control" rows="8" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <br />
          <br />
          <button type="submit" className="btn">Submit</button></fieldset>
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
                    <footer>© 2021 JD Schools</footer>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
        </form>
      </div>
      </center>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default Contact;
                   
                    
                    
                    