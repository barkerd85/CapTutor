import './homepage.css';
import axios from 'axios';
import React, { useState , useEffect} from 'react';
import './homepage.css'


function HomePage(){
    // let user = JSON.parse(localStorage.getItem('user-info'))
    // console.warn(user)
    // return (
    // <div class="navbar" className='navbar2'>
    // <a class="active" className='python' href="/home">&nbsp;&nbsp;  Python Flashcards 🐍</a>
    // <a href="/login" className='python'>&nbsp;&nbsp;  Python Practice Test 🐍 </a>
    // <a class="active" className='js' href="/home">&nbsp;&nbsp; JavaScript Flashcards</a>
    // <a href="/login" className='js'>&nbsp;&nbsp; JavaScript Practice Test </a>
    
    
    // </div>

    return(

    <div class="container">
    <div class="content">
    
        <div class="comparecontainer">
        <div class="compare lite">
    <h2>FlashCards</h2>
    <h3>Python 🐍</h3>
    <ul>
        <li>: link 1</li>
        <li>: link 2</li>
        <li>: link 3</li>
        <li>: link 4</li>
        <h4>JavaScript 🍮</h4>
        <li>: link 1</li>
        <li>: link 2</li>
        <li>: link 3</li>
        <li>: link 4</li>
        </ul>
        <br />
        <h5>maybe video links?</h5>
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
        
    
    

    
    {/* <a href="#" class="button lite">button</a> */}
    
        </div>
        </div>
    
        <div class="comparecontainer">
        <div class="compare full">
    <h2>Practice Test</h2>
    <h3>Python 🐍</h3>
    <ul>
        <li>: link 1</li>
        <li>: link 2</li>
        <li>: link 3</li>
        <li>: link 4</li>
        <h4>JavaScript 🍮</h4>
        <li>: link 1</li>
        <li>: link 2</li>
        <li>: link 3</li>
        <li>: link 4</li>
        </ul>
    
        
    <h5>maybe video links?</h5>
    
    {/* <a href="#" class="button full">button</a> */}
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


    
        </div>
        </div>
    
    </div>
        </div>
   )
}

export default HomePage; 
      