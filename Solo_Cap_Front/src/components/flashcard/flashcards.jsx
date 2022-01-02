import './flashcards.css';
import React from 'react';
import ReactDOM from 'react-dom';




export class FlashCardsOne extends React.Component{
  state = {
    "front":true,
    "current":0,
    "cards":[["front1","back1"], ["fron2","back2"], ["fron3","back3"], ["fron4","back4"], ["fron5","back5"]]
  }
  back = (e) => {

    if (this.state.current > 0){
      this.state.front = true
      this.setState({
        "current" : this.state.current - 1
      })
      
    }
  }
  flip = (e) => {
    if (this.state.front){
      this.setState({
        "front":false
      })
      
    }
    else{
      this.setState({
        "front":true
      })
     
    }
  }
  next = (e) => {

    if (this.state.current < 4){
      this.state.front = true
      this.setState({
        "current": this.state.current + 1,
      })
      
    }
  }

  render(){
    if (this.state.front){
      // let current = parseInt(this.state.current)
      return(  
      <div className="flashbutton-container">
        <div className="flashcard" style={{backgroundColor: "purple", color:"yellow"}}>
          {this.state.cards[this.state.current][0]}
        </div>
       <center><div className="buttons">
          <button className="btn1" onClick={() => {
            this.back()
          }}>Back</button>       
          <button className="btn1" onClick={() => {
            this.flip()
          }}>Flip</button>    
          <button className="btn1" onClick={()=>{
            this.next()
          }}>Next</button>
        </div></center> 
        
      </div>
    )}
    else{
      // let current = parseInt(this.state.current)
      return(  
      <div className="flashbutton-container">
        <div className="flashcard" style={{backgroundColor: "yellow", color:"purple"}}>
          {this.state.cards[this.state.current][1]}
        </div>
        <center><div className="buttons">
          <button className="btn1" onClick={() => {
            this.back()
          }}>Back</button>       
          <button className="btn1" onClick={() => {
            this.flip()
          }}>Flip</button>    
          <button className="btn1" onClick={()=>{
            this.next()
          }}>Next</button>
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
          <br /><footer>© 2021 JD Schools</footer>
        </div></center> 
        
      </div>
    )
      }
      
    }
      
  }