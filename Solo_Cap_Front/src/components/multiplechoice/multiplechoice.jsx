import ReactDOM from 'react-dom';
import React from 'react';
import './multiplechoice.css'

  
export class MultipleChoiceOne extends React.Component{
  state = {
    "score": 0,
    "incorrect": []
  }    

  handleChange = event => {
    this.setState({ 
        [event.target.name] : event.target.value
    });
  }
 
 submitAnswer=async event=> {
    event.preventDefault();

    var q1 = document.getElementsByName('q1'); 
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');
    for(let i=0;i<q1.length;i++){
      if (q1[i].checked){
        if (q1[i].value == 0){
          this.state.incorrect.push(1)
        }
        else{
        this.state.score += parseInt(q1[i].value)
        }
      }
      if (q2[i].checked){
        if (q2[i].value == 0){
          this.state.incorrect.push(2)
        }
        else{
        this.state.score += parseInt(q2[i].value)
        }
      }
      if (q3[i].checked){
        if (q3[i].value == 0){
          this.state.incorrect.push(3)
        }
        else{
        this.state.score += parseInt(q3[i].value)
        }
      }
      if (q4[i].checked){
        if (q4[i].value == 0){
          this.state.incorrect.push(4)
        }
        else{
        this.state.score += parseInt(q4[i].value)
        }
      }
      if (q5[i].checked){
        if (q4[i].value == 0){
          this.state.incorrect.push(5)
        }
        else{
        this.state.score += parseInt(q5[i].value)
        }
      }
    }


    if (this.state.score >= 4){
      alert(`Congratulations! You scored ${this.state.score}/5! You passed!`)
      console.log(this.state.score)
      window.location = '/home'
    }
    else {
      alert(`Uh oh, you missed ${5 - this.state.score} questions(${this.state.incorrect.sort()})`)
      console.log(this.state.score)
      window.location = '/fc'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. JavaScript is a ______ Language.</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> Scripting {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Programming
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Application
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These
<br />
</div>
<div className="questions">
<h1>2. Which of the following statement is False?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable names can be arbitrarily long.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> They can contain both letters and numbers.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable name can begin with underscore.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> Variable name can begin with number. {/* correct */}
</div>
<div className="questions">
<h1>3. JS ch 1.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
</div>
<div className="questions">
<h1>4. JS ch 1.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
</div>
<div className="questions">
<h1>5. JS ch 1.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
</div>
</form>
<button onClick={this.submitAnswer}>Submit Answer</button>
    </div>
    
)
}
}
export class MultipleChoiceTwo extends React.Component{
  state = {
    "score": 0
  }    

  handleChange = event => {
    this.setState({ 
        [event.target.name] : event.target.value
    });
  }
 
 submitAnswer=async event=> {
    event.preventDefault();

    var q1 = document.getElementsByName('q1'); 
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');
    for(let i=0;i<q1.length;i++){
      if (q1[i].checked){
        this.state.score += parseInt(q1[i].value)
      }
      if (q2[i].checked){
        this.state.score += parseInt(q2[i].value)
      }
      if (q3[i].checked){
        this.state.score += parseInt(q3[i].value)
      }
      if (q4[i].checked){
        this.state.score += parseInt(q4[i].value)
      }
      if (q5[i].checked){
        this.state.score += parseInt(q5[i].value)
      }
    }


    if (this.state.score >= 4){
      alert(`Congratulations! You scored ${this.state.score}/5! You passed!`)
      console.log(this.state.score)
      window.location = '/'
    }
    else {
      alert(`Uh oh, you didn't score enough to pass, please review your study materials and try again!`)
      console.log(this.state.score)
      window.location = '/fc'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. JavaScript is a ______ Language.</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> Scripting {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Programming
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Application
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These
<br />
</div>
<div className="questions">
<h1>2. Which of the following statement is False?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable names can be arbitrarily long.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> They can contain both letters and numbers.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable name can begin with underscore.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> Variable name can begin with number. {/* correct */}
</div>
<div className="questions">
<h1>3. JS ch 2.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
</div>
<div className="questions">
<h1>4. JS ch 2.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
</div>
<div className="questions">
<h1>5. JS ch 2.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
</div>
</form>
<button onClick={this.submitAnswer}>Submit Answer</button>
    </div>
    
)
}
}

export class MultipleChoiceThree extends React.Component{
  state = {
    "score": 0
  }    

  handleChange = event => {
    this.setState({ 
        [event.target.name] : event.target.value
    });
  }
 
 submitAnswer=async event=> {
    event.preventDefault();

    var q1 = document.getElementsByName('q1'); 
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');
    for(let i=0;i<q1.length;i++){
      if (q1[i].checked){
        this.state.score += parseInt(q1[i].value)
      }
      if (q2[i].checked){
        this.state.score += parseInt(q2[i].value)
      }
      if (q3[i].checked){
        this.state.score += parseInt(q3[i].value)
      }
      if (q4[i].checked){
        this.state.score += parseInt(q4[i].value)
      }
      if (q5[i].checked){
        this.state.score += parseInt(q5[i].value)
      }
    }


    if (this.state.score >= 4){
      alert(`Congratulations! You scored ${this.state.score}/5! You passed!`)
      console.log(this.state.score)
      window.location = '/'
    }
    else {
      alert(`Uh oh, you didn't score enough to pass, please review your study materials and try again!`)
      console.log(this.state.score)
      window.location = '/fc'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. JavaScript is a ______ Language.</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> Scripting {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Programming
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Application
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These
<br />
</div>
<div className="questions">
<h1>2. Which of the following statement is False?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable names can be arbitrarily long.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> They can contain both letters and numbers.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable name can begin with underscore.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> Variable name can begin with number. {/* correct */}
</div>
<div className="questions">
<h1>3. JS ch 3.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
</div>
<div className="questions">
<h1>4. JS ch 3.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
</div>
<div className="questions">
<h1>5. JS ch 3.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
</div>
</form>
<button onClick={this.submitAnswer}>Submit Answer</button>
    </div>
    
)
}
}

export class MultipleChoiceFour extends React.Component{
  state = {
    "score": 0
  }    

  handleChange = event => {
    this.setState({ 
        [event.target.name] : event.target.value
    });
  }
 
 submitAnswer=async event=> {
    event.preventDefault();

    var q1 = document.getElementsByName('q1'); 
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');
    for(let i=0;i<q1.length;i++){
      if (q1[i].checked){
        this.state.score += parseInt(q1[i].value)
      }
      if (q2[i].checked){
        this.state.score += parseInt(q2[i].value)
      }
      if (q3[i].checked){
        this.state.score += parseInt(q3[i].value)
      }
      if (q4[i].checked){
        this.state.score += parseInt(q4[i].value)
      }
      if (q5[i].checked){
        this.state.score += parseInt(q5[i].value)
      }
    }


    if (this.state.score >= 4){
      alert(`Congratulations! You scored ${this.state.score}/5! You passed!`)
      console.log(this.state.score)
      window.location = '/'
    }
    else {
      alert(`Uh oh, you didn't score enough to pass, please review your study materials and try again!`)
      console.log(this.state.score)
      window.location = '/fc'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. JavaScript is a ______ Language.</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> Scripting {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Programming
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Application
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These
<br />
</div>
<div className="questions">
<h1>2. Which of the following statement is False?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable names can be arbitrarily long.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> They can contain both letters and numbers.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable name can begin with underscore.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> Variable name can begin with number. {/* correct */}
</div>
<div className="questions">
<h1>3. JS ch 4.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
</div>
<div className="questions">
<h1>4. JS ch 4.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
</div>
<div className="questions">
<h1>5. JS ch 4.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
</div>
</form>
<button onClick={this.submitAnswer}>Submit Answer</button>
    </div>
    
)
}
}

export class MultipleChoiceFive extends React.Component{
  state = {
    "score": 0
  }    

  handleChange = event => {
    this.setState({ 
        [event.target.name] : event.target.value
    });
  }
 
 submitAnswer=async event=> {
    event.preventDefault();

    var q1 = document.getElementsByName('q1'); 
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');
    for(let i=0;i<q1.length;i++){
      if (q1[i].checked){
        this.state.score += parseInt(q1[i].value)
      }
      if (q2[i].checked){
        this.state.score += parseInt(q2[i].value)
      }
      if (q3[i].checked){
        this.state.score += parseInt(q3[i].value)
      }
      if (q4[i].checked){
        this.state.score += parseInt(q4[i].value)
      }
      if (q5[i].checked){
        this.state.score += parseInt(q5[i].value)
      }
    }


    if (this.state.score >= 4){
      alert(`Congratulations! You scored ${this.state.score}/5! You passed!`)
      console.log(this.state.score)
      window.location = '/'
    }
    else {
      alert(`Uh oh, you didn't score enough to pass, please review your study materials and try again!`)
      console.log(this.state.score)
      window.location = '/fc'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. JavaScript is a ______ Language.</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> Scripting {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Programming
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Application
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These
<br />
</div>
<div className="questions">
<h1>2. Which of the following statement is False?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable names can be arbitrarily long.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> They can contain both letters and numbers.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable name can begin with underscore.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> Variable name can begin with number. {/* correct */}
</div>
<div className="questions">
<h1>3. JS ch 5.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
</div>
<div className="questions">
<h1>4. JS ch 5.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
</div>
<div className="questions">
<h1>5. JS ch 5.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
</div>
</form>
<button onClick={this.submitAnswer}>Submit Answer</button>
    </div>
    
)
}
}


export class MultipleChoiceSix extends React.Component{
  state = {
    "score": 0
  }    

  handleChange = event => {
    this.setState({ 
        [event.target.name] : event.target.value
    });
  }
 
 submitAnswer=async event=> {
    event.preventDefault();

    var q1 = document.getElementsByName('q1'); 
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');
    for(let i=0;i<q1.length;i++){
      if (q1[i].checked){
        this.state.score += parseInt(q1[i].value)
      }
      if (q2[i].checked){
        this.state.score += parseInt(q2[i].value)
      }
      if (q3[i].checked){
        this.state.score += parseInt(q3[i].value)
      }
      if (q4[i].checked){
        this.state.score += parseInt(q4[i].value)
      }
      if (q5[i].checked){
        this.state.score += parseInt(q5[i].value)
      }
    }


    if (this.state.score >= 4){
      alert(`Congratulations! You scored ${this.state.score}/5! You passed!`)
      console.log(this.state.score)
      window.location = '/'
    }
    else {
      alert(`Uh oh, you didn't score enough to pass, please review your study materials and try again!`)
      console.log(this.state.score)
      window.location = '/fc'
    }
}

render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. Python 1/1</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> Scripting {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Programming
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Application
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These
<br />
</div>
<div className="questions">
<h1>2. Python 1/2</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable names can be arbitrarily long.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> They can contain both letters and numbers.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable name can begin with underscore.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> Variable name can begin with number. {/* correct */}
</div>
<div className="questions">
<h1>3. Python 1/3</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
</div>
<div className="questions">
<h1>4. Python 1/4</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
</div>
<div className="questions">
<h1>5. Python 1/5</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
</div>
</form>
<button onClick={this.submitAnswer}>Submit Answer</button>
    </div>
    
)
}
}

export class MultipleChoiceSeven extends React.Component{
  state = {
    "score": 0
  }    

  handleChange = event => {
    this.setState({ 
        [event.target.name] : event.target.value
    });
  }
 
 submitAnswer=async event=> {
    event.preventDefault();

    var q1 = document.getElementsByName('q1'); 
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');
    for(let i=0;i<q1.length;i++){
      if (q1[i].checked){
        this.state.score += parseInt(q1[i].value)
      }
      if (q2[i].checked){
        this.state.score += parseInt(q2[i].value)
      }
      if (q3[i].checked){
        this.state.score += parseInt(q3[i].value)
      }
      if (q4[i].checked){
        this.state.score += parseInt(q4[i].value)
      }
      if (q5[i].checked){
        this.state.score += parseInt(q5[i].value)
      }
    }


    if (this.state.score >= 4){
      alert(`Congratulations! You scored ${this.state.score}/5! You passed!`)
      console.log(this.state.score)
      window.location = '/'
    }
    else {
      alert(`Uh oh, you didn't score enough to pass, please review your study materials and try again!`)
      console.log(this.state.score)
      window.location = '/fc'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. JavaScript is a ______ Language.</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> Scripting {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Programming
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Application
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These
<br />
</div>
<div className="questions">
<h1>2. Which of the following statement is False?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable names can be arbitrarily long.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> They can contain both letters and numbers.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable name can begin with underscore.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> Variable name can begin with number. {/* correct */}
</div>
<div className="questions">
<h1>3. Python chapter 2.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
</div>
<div className="questions">
<h1>4. Python Chapter 2.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
</div>
<div className="questions">
<h1>5. Python Chapter 2.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
</div>
</form>
<button onClick={this.submitAnswer}>Submit Answer</button>
    </div>
    
)
}
}

export class MultipleChoiceEight extends React.Component{
  state = {
    "score": 0
  }    

  handleChange = event => {
    this.setState({ 
        [event.target.name] : event.target.value
    });
  }
 
 submitAnswer=async event=> {
    event.preventDefault();

    var q1 = document.getElementsByName('q1'); 
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');
    for(let i=0;i<q1.length;i++){
      if (q1[i].checked){
        this.state.score += parseInt(q1[i].value)
      }
      if (q2[i].checked){
        this.state.score += parseInt(q2[i].value)
      }
      if (q3[i].checked){
        this.state.score += parseInt(q3[i].value)
      }
      if (q4[i].checked){
        this.state.score += parseInt(q4[i].value)
      }
      if (q5[i].checked){
        this.state.score += parseInt(q5[i].value)
      }
    }


    if (this.state.score >= 4){
      alert(`Congratulations! You scored ${this.state.score}/5! You passed!`)
      console.log(this.state.score)
      window.location = '/'
    }
    else {
      alert(`Uh oh, you didn't score enough to pass, please review your study materials and try again!`)
      console.log(this.state.score)
      window.location = '/fc'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. JavaScript is a ______ Language.</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> Scripting {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Programming
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Application
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These
<br />
</div>
<div className="questions">
<h1>2. Which of the following statement is False?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable names can be arbitrarily long.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> They can contain both letters and numbers.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable name can begin with underscore.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> Variable name can begin with number. {/* correct */}
</div>
<div className="questions">
<h1>3. Python Chapter 2.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
</div>
<div className="questions">
<h1>4. Python Chapter .</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
</div>
<div className="questions">
<h1>5. Python Chapter 3.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
</div>
</form>
<button onClick={this.submitAnswer}>Submit Answer</button>
    </div>
    
)
}
}

export class MultipleChoiceNine extends React.Component{
  state = {
    "score": 0
  }    

  handleChange = event => {
    this.setState({ 
        [event.target.name] : event.target.value
    });
  }
 
 submitAnswer=async event=> {
    event.preventDefault();

    var q1 = document.getElementsByName('q1'); 
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');
    for(let i=0;i<q1.length;i++){
      if (q1[i].checked){
        this.state.score += parseInt(q1[i].value)
      }
      if (q2[i].checked){
        this.state.score += parseInt(q2[i].value)
      }
      if (q3[i].checked){
        this.state.score += parseInt(q3[i].value)
      }
      if (q4[i].checked){
        this.state.score += parseInt(q4[i].value)
      }
      if (q5[i].checked){
        this.state.score += parseInt(q5[i].value)
      }
    }


    if (this.state.score >= 4){
      alert(`Congratulations! You scored ${this.state.score}/5! You passed!`)
      console.log(this.state.score)
      window.location = '/'
    }
    else {
      alert(`Uh oh, you didn't score enough to pass, please review your study materials and try again!`)
      console.log(this.state.score)
      window.location = '/fc'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. JavaScript is a ______ Language.</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> Scripting {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Programming
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Application
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These
<br />
</div>
<div className="questions">
<h1>2. Which of the following statement is False?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable names can be arbitrarily long.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> They can contain both letters and numbers.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable name can begin with underscore.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> Variable name can begin with number. {/* correct */}
</div>
<div className="questions">
<h1>3. Python Chapter 4.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
</div>
<div className="questions">
<h1>4. Python Chapter 4.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
</div>
<div className="questions">
<h1>5. Python Chapter 4.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
</div>
</form>
<button onClick={this.submitAnswer}>Submit Answer</button>
    </div>
    
)
}
}

export class MultipleChoiceTen extends React.Component{
  state = {
    "score": 0
  }    

  handleChange = event => {
    this.setState({ 
        [event.target.name] : event.target.value
    });
  }
 
 submitAnswer=async event=> {
    event.preventDefault();

    var q1 = document.getElementsByName('q1'); 
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');
    for(let i=0;i<q1.length;i++){
      if (q1[i].checked){
        this.state.score += parseInt(q1[i].value)
      }
      if (q2[i].checked){
        this.state.score += parseInt(q2[i].value)
      }
      if (q3[i].checked){
        this.state.score += parseInt(q3[i].value)
      }
      if (q4[i].checked){
        this.state.score += parseInt(q4[i].value)
      }
      if (q5[i].checked){
        this.state.score += parseInt(q5[i].value)
      }
    }


if (this.state.score >= 4){
  alert(`Congratulations! You scored ${this.state.score}/5! You passed!`)
  console.log(this.state.score)
  window.location = '/'
}
else {
  alert(`Uh oh, you didn't score enough to pass, please review your study materials and try again!`)
  console.log(this.state.score)
  window.location = '/fc'
}
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. JavaScript is a ______ Language.</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> Scripting {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Programming
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Application
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These
<br />
</div>
<div className="questions">
<h1>2. Which of the following statement is False?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable names can be arbitrarily long.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> They can contain both letters and numbers.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Variable name can begin with underscore.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> Variable name can begin with number. {/* correct */}
</div>
<div className="questions">
<h1>3. Python Chapter 5.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 
</div>
<div className="questions">
<h1>4. Python Chapter 5.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 
</div>
<div className="questions">
<h1>5. Python Chapter 5.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> 
</div>
</form>
<button onClick={this.submitAnswer}>Submit Answer</button>
    </div>
    
)
}
}
// const rootElement = document.getElementById('root')
// ReactDOM.render(<MultipleChoice></MultipleChoice>, rootElement)