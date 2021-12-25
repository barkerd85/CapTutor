import React from 'react';
import './contact.css';




function Contact(){
    console.log(test)

window.location='/contact'

return(
    <div>
          <center>     <div class="form-group">
                        
                    
                    
                        <br />
                        <form onSubmit={this.handleSubmit}>
                        
                        <fieldset>
                        <legend>Create New User &nbsp;&nbsp;👤</legend>
                        <br />
                        <div class="form-group">   
                        <label className='username'  for="username">User Name:</label><br />
                        <input className='textbox' name="username" type="text" placeholder='Create Username' class="form-control" value={this.state.username} onChange={this.handleChange}></input>
                        </div>
                        
                        <div class="form-group">
                        <label className='password' for="password">Create Password:</label><br />
                        <input  name="password" type="password" placeholder='Must be 8 characters' class="form-control" value={this.state.password} onChange={this.handleChange}></input>
                        </div>
                       
                        <div class="form-group">
                        <label className='email'  for="email">Email Address:</label><br />
                        <input type="email" class="form-control" name="email" placeholder='Enter Email' value={this.state.email} onChange={this.handleChange}></input>
                        <br />
                       
                        </div>
                        
                        <div class="form-group">
                        <label className='firstname' for="first_name">First Name:</label><br />
                        <input name="first_name" type="text" placeholder='Enter First Name' class="form-control" value={this.state.first_name} onChange={this.handleChange}></input>
                        </div>
                        
                        <div class="form-group">
                        <label className='lastname'   for="last_name">Last Name:</label><br />
                        <input name="last_name" type="text" placeholder='Enter Last Name' class="form-control" value={this.state.last_name} onChange={this.handleChange}></input>
                        </div>
                        
                        <div class="form-group">
                        <label className='middlename'  for="middle_name">Middle Name:</label><br />
                        <input name="middle_name" placeholder='Enter Middle Name' type="text" class="form-control" value={this.state.middle_name} onChange={this.handleChange}></input>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button></fieldset>
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
                        <br />
                        <footer>© 2021 JD Schools</footer>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        </form>
                        </div></center> 

    </div>
)
}
export default Contact;