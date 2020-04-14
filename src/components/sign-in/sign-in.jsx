import React from 'react';
import './sign-in.scss';

class SignIn extends React.Component{
    constructor(){
    super()

    this.state = {
        email:'',
        password:''
    } 
} 
     
    handleSubmit = (event) => {
        event.preventDefault();

    this.setState({email:'',password:''})     

    }

    handleChange = (event)=>{
        const{value, name} = event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
            <h1>Sign In</h1>
            <form onSubmit={this.handleSubmit}>
            <div>
            
            
            <input className='input' name='email' type='email' value={this.state.email} placeholder='email' onChange={this.handleChange} required ></input>
            </div>
            <div>
            <input className='input' name='password' type='password' value={this.state.password} placeholder='password' onChange={this.handleChange} required ></input>
            </div>
            
            <input type='submit' value='submit Form'></input>
            </form>

            </div>
        )
    }
   
    


}



export default SignIn;