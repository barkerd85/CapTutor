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
      window.location = '/fc/js/1'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
  
<h1>1. Which of the following function of Number object returns a string value version of the current number?</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> toString() {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> toFixed()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> toLocaleString()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> toPrecision()
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
<h1>3. Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> push()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> concat() {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> pop()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> some()
</div>
<div className="questions">
<h1>4. Which of the following function of String object is used to match a regular expression against a string?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> You should not use any of the JavaScript reserved keyword as variable name.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> Both of the above.  {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> JavaScript variable names should not start with a numeral (0-9).
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> None of the above.
</div>
<div className="questions">
<h1>5. Which of the following function of String object returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> concat()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> localeCompare() {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> search()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> substr()
</div>

</form><center>
<button onClick={this.submitAnswer}>Submit Answers</button></center>
    </div>
    
)
}
}
export class MultipleChoiceTwo extends React.Component{
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
      window.location = '/fc/js/2'
    }
}




render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. Which of the following is a disadvantage of using JavaScript?</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> JavaScript can not be used for Networking applications because there is no such support available.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Client-side JavaScript does not allow the reading or writing of files.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> JavaScript doesn't have any multithreading or multiprocess capabilities.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> All of the above. {/* correct */}
<br />
</div>
<div className="questions">
<h1>2. Which built-in method calls a function for each element in the array?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> None of these.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> while()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> loop()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> forEach() {/* correct */}
</div>
<div className="questions">
<h1>3. Which of the following function of String object returns the characters in a string between two indexes into the string?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> substr()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> substring() {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> split()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> slice()
</div>
<div className="questions">
<h1>4. Which of the following is true about variable naming conventions in JavaScript? </h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> JavaScript variable names must begin with a letter or the underscore character.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> JavaScript variable names are case sensitive.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> Both of the above. {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> None of the above
</div>
<div className="questions">
<h1>5. Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?

</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> push()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> map() {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> join()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> pop()
</div>
</form><center>
<button onClick={this.submitAnswer}>Submit Answer</button></center>
    </div>
    
)
}
}

export class MultipleChoiceThree extends React.Component{
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
      window.location = '/fc/js/3'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. Which of the following function of String object extracts a section of a string and returns a new string?</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> slice() {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> search()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> replace()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of the above.
<br />
</div>
<div className="questions">
<h1>2. Which built-in method sorts the elements of an array?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> changeOrder(order)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> None of these.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> order()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> sort() {/* correct */}
</div>
<div className="questions">
<h1>3. Which of the following function of Number object returns the number's value?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> toPrecision()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> valueOf() {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> toString()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> toLocaleString()
</div>
<div className="questions">
<h1>4. Which of the following function of String object executes the search for a match between a regular expression and a specified string?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> concat()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> search() {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> match()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> replace()
</div>
<div className="questions">
<h1>5. Which built-in method removes the last element from an array and returns that element?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> last()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> pop() {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> get()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> None of the above.
</div>
</form><center>
<button onClick={this.submitAnswer}>Submit Answer</button></center>
    </div>
    
)
}
}

export class MultipleChoiceFour extends React.Component{
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
      window.location = '/fc/js/4'
    }
}




render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> indexOf() {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> join()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> lastIndexOf()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These
<br />
</div>
<div className="questions">
<h1>2. What are the RegEx flags supported by js?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> 
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> script  {/* correct */}
</div>
<div className="questions">
<h1>3. How do you write "Hello World" in an alert box?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> msgBox("Hello World");
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> alert("Hello World");   {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> msg("Hello World");
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> None of the above.
</div>
<div className="questions">
<h1>4. How do you create a function in JavaScript?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> function = myFunction()

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> function myFunction()   {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> function:myFunction()  
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> None of the above.
</div>
<div className="questions">
<h1>5. How do you call a function named "myFunction"?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> call function myFunction()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> myFunction()   {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> call myFunction()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> None of the above.
</div>
</form><center>
<button onClick={this.submitAnswer}>Submit Answer</button></center>
    </div>
    
)
}
}

export class MultipleChoiceFive extends React.Component{
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
      window.location = '/fc/js/5'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. How to write an IF statement in JavaScript?</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> if (i == 5)   {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> if i = 5 then
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> if i == 5 then
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of the above.
<br />
</div>
<div className="questions">
<h1>2. How does a WHILE loop start?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> for (i = 5; i++)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> for (i  5; i++)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> while (i  10; i++)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> None of the above.  {/* correct */}
</div>
<div className="questions">
<h1>3. How can you add a comment in a JavaScript?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 'This is a comment'
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> //This is a comment   {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 'This is a comment
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> None of the above.
</div>
<div className="questions">
<h1>4. What is the correct way to write a JavaScript array?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")  
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> var colors = ["red", "green", "blue"]  {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> var colors = (1:"red", 2:"green", 3:"blue")
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> var colors = "red", "green", "blue"
</div>
<div className="questions">
<h1>5. How do you round the number 7.25, to the nearest integer?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> rnd(7.25)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> Math.round(7.25)  {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> round(7.25)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> Math.rnd(7.25)
</div>
</form><center>
<button onClick={this.submitAnswer}>Submit Answer</button></center>
    </div>
    
)
}
}


export class MultipleChoiceSix extends React.Component{
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
      window.location = '/fc/py/1'
    }
}

render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. Which operator is right-associative</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> = {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> *
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> +
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> %
<br />
</div>
<div className="questions">
<h1>2. What if '19' == 19 is executed in Python?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> True
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Prints '19'
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Error
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> False {/* correct */}
</div>
<div className="questions">
<h1>3. for i in range(?):
   print(i)</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 0.1
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> 0 {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 1
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> NULL
</div>
<div className="questions">
<h1>4.  What is the output for −

'Tutorials Point' [100:200]?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> Index error.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> ''{/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> Syntax error
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> 'Tutorial's Point'
</div>
<div className="questions">
<h1>5. What is the following function returns item from the list with min value?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> cmp(list)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> min(list){/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> max(list)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> len(list)
</div>
</form><center>
<button onClick={this.submitAnswer}>Submit Answer</button></center>
    </div>
    
)
}
}

export class MultipleChoiceSeven extends React.Component{
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
      window.location = '/fc/py/2'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. Name the error that doesn’t cause program to stop/end, but the output is not the desired result or is incorrect.</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> Logical error{/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Syntax error
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> Runtime error
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These
<br />
</div>
<div className="questions">
<h1>2. Which of the following data types is not supported in python?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> List
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Tuple
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> Dictionary
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> Generics {/* correct */}
</div>
<div className="questions">
<h1>3. Python chapter 2.</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> Error
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> 1 2 3 {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> x x x
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> None of the above.
</div>
<div className="questions">
<h1>4. Which of the following environment variable for Python is an alternative module search path?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> PYTHONPATH
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> PYTHONHOME {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> PYTHONSTARTUP
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> PYTHONCASEOK
</div>
<div className="questions">
<h1>5. Which way among them is used to create an event loop ?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> Window.loop()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> Window.mainloop() {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> Eventloop.window()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> Window.eventloop()
</div>
</form><center>
<button onClick={this.submitAnswer}>Submit Answer</button></center>
    </div>
    
)
}
}

export class MultipleChoiceEight extends React.Component{
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
      window.location = '/fc/py/3'
    }
}




render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. Which of the following function returns the max alphabetical character from the string str?.</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> max(str) {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> lower()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> min(str)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of These.
<br />
</div>
<div className="questions">
<h1>2. What is output of following −

print('any'.encode())</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> x'any'
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> 'yan'
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> 'any'
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/>  b’any’ {/* correct */}
</div>
<div className="questions">
<h1>3. Which of the following function gets a space-padded string with the original string left-justified to a total of width columns?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> len(string)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> ljust(width[, fillchar]) {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> isupper()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/>  join(seq)
</div>
<div className="questions">
<h1>4. For tuples and list which is correct?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> List and tuples both are mutable.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> List is mutable whereas tuples are immutable. {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> List is immutable whereas tuples are mutable.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> List and tuples both are immutable.
</div>
<div className="questions">
<h1>5. What is the range of method ‘random.random()’?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> (0.0 , 1.0]
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> [0.0, 1.0) {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> [0.0 , 1.0]
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> None of the above.
</div>
</form><center>
<button onClick={this.submitAnswer}>Submit Answer</button></center>
    </div>
    
)
}
}

export class MultipleChoiceNine extends React.Component{
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
      window.location = '/fc/py/4'
    }
}





render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. What is the following function returns item from the list with max value?</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> max(list) {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> cmp(list)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> len(list)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of the above.
<br />
</div>
<div className="questions">
<h1>2. What is the output of print str[2:] if str = 'Hello World!'?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> None of these.
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> llo
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> H
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> llo World! {/* correct */}
</div>
<div className="questions">
<h1>3. Which of the following data types is not supported in python?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> Numbers
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> Slice{/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> List
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> String
</div>
<div className="questions">
<h1>4. Which of the following function convert a String to a set in python?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> dict(d)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/>  set(x) {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> chr(x)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> frozenset(s)
</div>
<div className="questions">
<h1>5. Which of the following environment variable for Python tells the Python interpreter where to locate the module files imported into a program?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> PYTHONHOME
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> PYTHONPATH {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> PYTHONCASEOK
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> PYTHONSTARTUP
</div>
</form><center>
<button onClick={this.submitAnswer}>Submit Answer</button></center>
    </div>
    
)
}
}

export class MultipleChoiceTen extends React.Component{
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
      window.location = '/fc/py/5'
    }
}




render(){
return(
    <div>
        
{/* value is 1 for correct 0 for incorrect, at end of quiz it adds up values to give score out of ten */}
<form className="question-table">
<div className="questions">
<h1>1. Which of the following function of dictionary gets all the keys from the dictionary?</h1>
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={1}/> keys() {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> getkeys()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> keys()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q1' value={0}/> None of the above.
<br />
</div>
<div className="questions">
<h1>2. Which of the following function checks in a string that all characters are in lowercase?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> isnumeric()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> istitle()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={0}/> isspace()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q2' value={1}/> islower() {/* correct */}
</div>
<div className="questions">
<h1>3. Which of the following is correct about Python?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/>  [5, 7,9]
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={1}/> [1, 2, 3, 4, 5, 6] {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> 21
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q3' value={0}/> [1, 2, 3],[4, 5, 6]
</div>
<div className="questions">
<h1>4. Which of the following function removes all leading and trailing whitespace in string?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> replace(old, new [, max])
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={1}/> strip([chars]) {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> swapcase()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q4' value={0}/> title()
</div>
<div className="questions">
<h1>5. Which of the following function merges elements in a sequence?</h1>

<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> isupper()
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={1}/> join(seq) {/* correct */}
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> len(string)
<br />
<input type="radio" onSubmit={this.submitAnswer} name='q5' value={0}/> ljust(width[, fillchar])
</div>
</form><center>
<button onClick={this.submitAnswer}>Submit Answer</button></center>
    </div>
    
)
}
}
// const rootElement = document.getElementById('root')
// ReactDOM.render(<MultipleChoice></MultipleChoice>, rootElement)