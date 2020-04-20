import React from 'react';
import './sign-in.scss';
import {withRouter} from 'react-router-dom';
import signinPic from '../../img/3094352.jpg'
  

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
        fetch('http://localhost:3003/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })

        })
        .then(response =>response.json())
        .then(data=> {
            
            if(data.id){
                this.props.history.push('/'); 
            } else (
                    prompt('user name or password incorrect')
                )
            }
        )

       console.log(this.state)

        

        this.setState({email:'',password:''})     

    }

    handleChange = (event)=>{
        const{value, name} = event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
             
        <div className="container">
                 
            <div className='sign-in'>
            <h1 className="header" >Sign In</h1>
            <form onSubmit={this.handleSubmit}>
            <div>
            
            <i className="fa fa-envelope icon"></i> 
            <input className='input' name='email' type='email' value={this.state.email} placeholder='email' onChange={this.handleChange} required ></input>
            </div>
            <div>
            <i className="fa fa-key icon"></i> 
            <input className='input' name='password' type='password' value={this.state.password} placeholder='password' onChange={this.handleChange} required ></input>
            </div>
            <input type='submit' value='submit Form' className='button'></input>
            </form>

            </div>
            <img src={signinPic} className="img" alt="signin"></img> 
        </div>
         
        )
    }
}

export default withRouter(SignIn);