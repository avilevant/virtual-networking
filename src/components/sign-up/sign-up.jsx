import React from 'react';
import './sign-up.scss';
import {withRouter} from 'react-router-dom';
import signupPic from '../../img/2853458.jpg'

class SignUp extends React.Component{
    constructor(){
    super()

    
        
        this.state = {
            name:'',
            phone:'',
            email:'',
            password:'',
            validPassword:''
    
        } 
  
} 
     
    handleSubmit = (event) => {
        event.preventDefault();

     if(this.state.password === this.state.validPassword){
        
        fetch('http://localhost:3003/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name:this.state.name,
                phone:this.state.phone,
                email:this.state.email,
                password:this.state.password
            })

        })

        this.props.history.push('/profile');
        console.log(this.state)
               
        }else{
            prompt('passwords dont match')
        }
        this.setState({name:'', email:'',password:'',phone:'',validPassword:''})


    }

    handleChange = (event)=>{
        const{value, name} = event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
         <div className="container">  
            <div className='sign-up'>
            <h1 className="header">Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
            
            <div>
            <i className="fa fa-user icon"></i> 
            <input className='input' name='name' type='string' value={this.state.name} placeholder='Full Name' onChange={this.handleChange} required ></input>
            </div>

            <div>
            <i className="fa fa-phone icon"></i> 
            <input className='input' name='phone' type='string' value={this.state.phone} placeholder='Phone Number' onChange={this.handleChange} required ></input>
            </div>

            <div> 
            <i className="fa fa-envelope icon"></i> 
            <input className='input' name='email' type='email' value={this.state.email} placeholder='Email' onChange={this.handleChange} required ></input>
            </div>

            <div>
            <i className="fa fa-key icon"></i> 
            <input className='input' name='password' type='password' value={this.state.password} placeholder='Password' onChange={this.handleChange} required ></input>
            </div>

            <div>
            <i className="fa fa-key icon"></i> 
            <input className='input' name='validPassword' type='password' value={this.state.validPassword} placeholder='Validate Password' onChange={this.handleChange} required ></input>
            </div>
            
            <input type='submit' value='submit Form' className="button"></input>
            </form>

            </div>
            <img src={signupPic} className="img" alt="signup"></img> 
         </div>   
        )
    }
   
    


}



export default withRouter(SignUp);