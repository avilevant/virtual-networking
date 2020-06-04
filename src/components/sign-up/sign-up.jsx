import React from 'react';
import './sign-up.scss';
import {withRouter} from 'react-router-dom';
import signupPic from '../../img/2853458.jpg';
import Cookies from 'js-cookie';


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
        const newUser = this.state
    
    if(newUser.password.length<8){
        alert('password must be 8 characters or more')
    }

     if(newUser.password === newUser.validPassword){
        
        fetch('https://afternoon-thicket-58274.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name:newUser.name,
                phone:newUser.phone,
                email:newUser.email,
                password:newUser.password
            })

        })
        .then(response=> response.json())
        .then(data=>{
            if(data==='23505'){
                prompt('email already exists')
            }else{
                Cookies.set('token',data.token)
                Cookies.set('C_name',data.user.name)
                Cookies.set('C_id',data.user.id)
                this.props.history.push('/profile');
                console.log(newUser)
            }

        })


        
               
        }else{
            prompt('passwords do not match')
        }
        this.setState({name:'', email:'',password:'',phone:'',validPassword:''})


    }

    handleChange = (event)=>{
        const{value, name} = event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
         <div className="container1">  
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