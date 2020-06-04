import React from 'react';
import './sign-in.scss';
import {withRouter} from 'react-router-dom';
import signinPic from '../../img/3094352.jpg';
import Cookies from 'js-cookie';

  

class SignIn extends React.Component{
    constructor(){
    super()

    this.state = {
        email:'',
        password:''
    } 
} 

    // returnId(id){
    //   return(
    //       <Directory userId={id}/>
    //   )
        
    // }
     
    handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://afternoon-thicket-58274.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })

        })
        .then(response =>response.json())
        .then(data=> {
            console.log(data)
            console.log(data.user.name)
            console.log(data.user.id)
            if(data){
                Cookies.set('token',data.token)
                Cookies.set('C_name',data.user.name)
                Cookies.set('C_id',data.user.id)
                
                this.props.history.push(`/personalprofile/${data.user.id}`); 
                // this.returnId(data.id)
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
            <div>
            
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
            </div>
       
         
        )
    }
}

export default withRouter(SignIn);