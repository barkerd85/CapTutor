import './flashcards.css';
import React from 'react';
import ReactDOM from 'react-dom';




export class FlashCardsOne extends React.Component{
  state = {
    "front":true,
    "current":0,
    "cards":[["1: How can you include an external javascript file?","/script src='myfile.js'/"], ["2: Can a variable name can begin with number.","False, a variable name can NOT begin with a number."], ["3: The following function of String object is used to match a regular expression against a string.","match()"], ["4: true/false: NaN == NaN","false."], ["5: How can you determine if something is NaN?.","use isNaN() function."]]
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
        <div className="flashcard" style={{backgroundColor: "#f1df37", color:"purple"}}>
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
          
        </div></center> 
        
      </div>
    )
      }
      
    }
      
  }


  export class FlashCardsTwo extends React.Component{
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
          <div className="flashcard" style={{backgroundColor: "#f1df37", color:"purple"}}>
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

    export class FlashCardsThree extends React.Component{
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
            <div className="flashcard" style={{backgroundColor: "#f1df37", color:"purple"}}>
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



      export class FlashCardsFour extends React.Component{
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
              <div className="flashcard" style={{backgroundColor: "#f1df37", color:"purple"}}>
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

        export class FlashCardsFive extends React.Component{
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
                <div className="flashcard" style={{backgroundColor: "#f1df37", color:"purple"}}>
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


          export class FlashCardsSix extends React.Component{
            state = {
              "front":true,
              "current":0,
              "cards":[["1: Esc will take you into command mode where you can navigate around your notebook with arrow keys.","Esc"], ["2: A to insert a new cell above the current cell","A"], ["3: B to insert a new cell below","B"], ["4: M to change the current cell to Markdown","M"], ["5:Y to change it back to code","Y"]]
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
                  <div className="flashcard" style={{backgroundColor: "#f1df37", color:"purple"}}>
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

            export class FlashCardsSeven extends React.Component{
              state = {
                "front":true,
                "current":0,
                "cards":[["1: Enter will take you from command mode back into edit mode for the given cell.","Enter"], ["2: Shift + Tab will show you the Docstring (documentation) for the the object you have just typed in a code cell - you can keep pressing this short cut to cycle through a few modes of documentation.","Shift + Tab"], ["3: Ctrl + Shift + - will split the current cell into two from where your cursor is ","Ctrl + Shift + -"], ["4: Esc + F Find and replace on your code but not the outputs.","Esc + F"], ["5: Toggle cell output. ","Esc + O Toggle cell output."]]
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
                    <div className="flashcard" style={{backgroundColor: "#f1df37", color:"purple"}}>
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
                      
                    </div></center> 
                    
                  </div>
                )
                  }
                  
                }
                  
              }

              export class FlashCardsEight extends React.Component{
                state = {
                  "front":true,
                  "current":0,
                  "cards":[["1: list.append(x)","Add an item to the end of the list. Equivalent to a[len(a):] = [x]."], ["2:list.extend(iterable)","Extend the list by appending all the items from the iterable. Equivalent to a[len(a):] = iterable."], ["3: list.insert(i, x)","Insert an item at a given position. The first argument is the index of the element before which to insert, so a.insert(0, x) inserts at the front of the list, and a.insert(len(a), x) is equivalent to a.append(x)."], ["4: list.clear()","Remove all items from the list. Equivalent to del a[:]."], ["5: list.count(x)","Return the number of times x appears in the list."]]
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
                      <div className="flashcard" style={{backgroundColor: "#f1df37", color:"purple"}}>
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

                export class FlashCardsNine extends React.Component{
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
                        <div className="flashcard" style={{backgroundColor: "#f1df37", color:"purple"}}>
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

                  export class FlashCardsTen extends React.Component{
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
                          <div className="flashcard" style={{backgroundColor: "#f1df37", color:"purple"}}>
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
                            
                          </div></center> 
                          
                        </div>
                      )
                        }
                        
                      }
                        
                    }