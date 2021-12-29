import ReactDOM from 'react-dom';
import React from "react";
import './multiplechoice.css'










  
export default class MultipleChoice extends React.Component{
    state = {
        val: '',
      }
    
      handleChange = event => {
        this.setState({ 
            [event.target.name] : event.target.value
        });
      }
     
     submitAnswer=async event=> {
        event.preventDefault();

        var radios = document.getElementsByName('choice');
        console.log(radios)
    
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           this.state.val = radios[i].value; 
           break;
         }
        }
    if (this.state.val == "" ) {
      alert('please select choice answer');
    } else if ( this.state.val == "Scripting" ) {
      alert('Answer is correct !');
    } else {
      alert('Answer is wrong');
    }
    }

    
    
    
  
render(){
    return(
        <div>
            <h1>1. JavaScript is ______ Language.</h1>
            
  <form >
  <input type="radio" onSubmit={this.submitAnswer} name='choice' value="Scripting"/> Scripting
  <input type="radio" onSubmit={this.submitAnswer} name='choice' value="Programming"/> Programming
  <input type="radio" onSubmit={this.submitAnswer} name='choice' value="Application"/> Application
  <input type="radio" onSubmit={this.submitAnswer} name='choice' value="None of These"/> None of These
  
  </form>
  <button onClick={this.submitAnswer}>Submit Answer</button>
        </div>
        
    )
}
}

const rootElement = document.getElementById('root')
ReactDOM.render(<MultipleChoice></MultipleChoice>, rootElement)