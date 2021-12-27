import ReactDOM from 'react-dom';
import React from "react";




function multipleChoice(){
    return(
        <div>
            
        </div>
    )
}

export default multipleChoice

const rootElement = document.getElementById('root')
ReactDOM.render(<multipleChoice></multipleChoice>, rootElement)





// var submitAnswer = function() {

//     var radios = document.getElementsByName('choice');
//     var val= "";
//     for (var i = 0, length = radios.length; i < length; i++) {
//         if (radios[i].checked) {
//            val = radios[i].value; 
//            break;
//          }
//     }
    
//     if (val == "" ) {
//       alert('please select choice answer');
//     } else if ( val == "Scripting" ) {
//       alert('Answer is correct !');
//     } else {
//       alert('Answer is wrong');
//     }
//   };
//   <h1>JavaScript is ______ Language.</h1><br>
//   <form >
//   <input type="radio" name="choice" value="Scripting"> Scripting
//   <input type="radio" name="choice" value="Programming"> Programming
//   <input type="radio" name="choice" value="Application"> Application
//   <input type="radio" name="choice" value="None of These"> None of These
//   </form>
//   <button onclick="submitAnswer()">Submit Answer</button>
//   }