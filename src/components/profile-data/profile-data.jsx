import React from 'react';
import './profile-data.scss'

// class ProfileData extends React.Component{
//     constructor(){
//         super()

//         this.state={
//             name:'',
//             location:'',
//             phone:'',
//             email:'',
//             website:'',
//             faceBookPage:'',
//             InstagramPage:'',
//             youTube:''

//         }
//     }

     

//     handleSubmit = (event) => {
//         event.preventDefault();
//     //     fetch('http://localhost:3003/signin', {
//     //         method: 'post',
//     //         headers: {'Content-Type': 'application/json'},
//     //         body: JSON.stringify({
//     //             email:this.state.email,
//     //             password:this.state.password
//     //         })

//     //     })
//     //     .then(response =>response.json())
//     //     .then(data=> {
            
//     //         if(data.id){
//     //             this.props.history.push('/'); 
//     //         } else (
//     //                 prompt('user name or password incorrect')
//     //             )
//     //         }
//     //     )

//     //    console.log(this.state)
//     console.log("hello")

//     this.setState({name:'',location:'',phone:'',email:'',website:'',faceBookPage:'',InstagramPage:'',youTube:''}) 

      

//     }

//     handleChange = (event)=>{
//         const{value, name} = event.target;

//         this.setState({[name]:value})
//     }
    


        
//    render()
    
const ProfileData =() =>  {
        return(
                  
        <div className="container">
                 
        <div className='profile'>
        <h1 className="header" >Build Your Business Profile</h1>
     
        <div>
        <i className="fa fa-user icon"></i> 
            <input className='input' name='name' type='text' value={this.state.name} placeholder='Business Name' onChange={this.handleChange} required ></input>
        </div>

        <div>
        <i className="fa fa-phone icon"></i> 
        <input className='input' name='phone' type='text' value={this.state.phone} placeholder='Phone Number' onChange={this.handleChange} required ></input>
        </div>
        
        <div>
        <i className="fa fa-envelope icon"></i> 
        <input className='input' name='email' type='email' value={this.state.email} placeholder='email' onChange={this.handleChange} required ></input>
        </div>

        <div>
        <i className="fa fa-map-marker icon icon-1"></i> 
        <input className='input' name='location' type='text' value={this.state.location} placeholder='Location' onChange={this.handleChange} required ></input>
        </div>

        <div>
        <i className="fa fa-globe icon"></i> 
        <input className='input' name='website' type='text' value={this.state.website} placeholder='Business WebSite Address' onChange={this.handleChange}  ></input>
        </div>

        <div>
        <i className="fa fa-facebook icon"></i> 
        <input className='input' name='faceBookPage' type='text' value={this.state.faceBookPage} placeholder='faceBook page link' onChange={this.handleChange}  ></input>
        </div>

        <div>
        <i className="fa fa-instagram icon"></i> 
        <input className='input' name='InstagramPage' type='text' value={this.state.InstagramPage} placeholder='Instagram Page link' onChange={this.handleChange} required ></input>
        </div>

        <div>
        <i className="fa fa-youtube icon icon-1"></i> 
        <input className='input' name='youTube' type='text' value={this.state.youTube} placeholder='YouTube Channel link' onChange={this.handleChange} required ></input>
        </div>
      
        </div>
        </div>
        )}


export default ProfileData;