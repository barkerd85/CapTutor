import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewUserLogin from './components/newuserlogin/newuserlogin';
import Login from './components/login/login';
import HomePage from './components/homepage/homepage';
import Logout from './components/logout/logout';
import Contact from './components/contact/contact';


class App extends Component{
  state = {}

  componentDidMount(){
    const jwt = localStorage.getItem('token');
    try{
      const user = (jwt);
      this.setState({
        user
      });
    } catch {
  }
}


render() {
  const user = this.state.user;
  return (
    <div >
        <Header />
      <Routes>
        <Route path="/" exact element={<NewUserLogin/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" exact element={<Logout/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
    </div>
  );
}
}

export default App;

        