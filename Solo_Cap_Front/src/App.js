import React, { Component } from 'react';
import Header from './components/header/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewUserLogin from './components/newuserlogin/newuserlogin';
import Login from './components/login/login';
import HomePage from './components/homepage/homepage';
import Logout from './components/logout/logout';
import Contact from './components/contact/contact';
import {MultipleChoiceOne, MultipleChoiceTwo, MultipleChoiceThree, MultipleChoiceFour, MultipleChoiceFive, MultipleChoiceSix, MultipleChoiceSeven, MultipleChoiceEight, MultipleChoiceNine, MultipleChoiceTen} from './components/multiplechoice/multiplechoice';
import { FlashCardsOne, FlashCardsTwo, FlashCardsThree, FlashCardsFour, FlashCardsFive, FlashCardsSix, FlashCardsSeven, FlashCardsEight, FlashCardsNine, FlashCardsTen } from './components/flashcard/flashcards';















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

// logout = () => {
//   localStorage.clear();
//   window.location="/login";
// }


render() {
  const user = this.state.user;
  return (
    <div >
        <Header />
      <Routes>
        <Route path="/" exact={true} element={<NewUserLogin/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" exact element={<Logout/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/mc/js/1" exact={true} element={<MultipleChoiceOne/>} />
        <Route path="/mc/js/2" exact={true} element={<MultipleChoiceTwo/>} />
        <Route path="/mc/js/3" exact={true} element={<MultipleChoiceThree/>} />
        <Route path="/mc/js/4" exact={true} element={<MultipleChoiceFour/>} />
        <Route path="/mc/js/5" exact={true} element={<MultipleChoiceFive/>} />
        <Route path="/mc/py/1" exact={true} element={<MultipleChoiceSix/>}/>
        <Route path="/mc/py/2" exact={true} element={<MultipleChoiceSeven/>}/>
        <Route path="/mc/py/3" exact={true} element={<MultipleChoiceEight/>}/>
        <Route path="/mc/py/4" exact={true} element={<MultipleChoiceNine/>}/>
        <Route path="/mc/py/5" exact={true} element={<MultipleChoiceTen/>}/>
        <Route path="/fc/js/1" exact={true} element={<FlashCardsOne/>}/>
        <Route path="/fc/js/2" exact={true} element={<FlashCardsTwo/>}/>
        <Route path="/fc/js/3" exact={true} element={<FlashCardsThree/>}/>
        <Route path="/fc/js/4" exact={true} element={<FlashCardsFour/>}/>
        <Route path="/fc/js/5" exact={true} element={<FlashCardsFive/>}/>
        <Route path="/fc/py/1" exact={true} element={<FlashCardsSix/>}/>
        <Route path="/fc/py/2" exact={true} element={<FlashCardsSeven/>}/>
        <Route path="/fc/py/3" exact={true} element={<FlashCardsEight/>}/>
        <Route path="/fc/py/4" exact={true} element={<FlashCardsNine/>}/>
        <Route path="/fc/py/5" exact={true} element={<FlashCardsTen/>}/>

        
        
        
        </Routes>
    </div>
  );
}
}

export default App;
      

        