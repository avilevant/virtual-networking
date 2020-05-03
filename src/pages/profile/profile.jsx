import React from 'react';
import DropSelect from "../../components/drop-select/drop-select";
import './profile.scss';
//import ProfileData from '../../components/profile-data/profile-data'

const numberOfCards = 8

class Profile extends React.Component{

    constructor(){
        super()

        this.state={
            name:'',
            location:'',
            phone:'',
            email:'',
            website:'',
            faceBookPage:'',
            InstagramPage:'',
            youTube:'',
            arrayOfCards:[],
            mybizz:'',
            selected:[]


        }
    }

    


    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3003/profile', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                name:this.state.name,
                location:this.state.location,
                phone:this.state.phone,
                website:this.state.website,
                faceBookPage:this.state.faceBookPage,
                InstagramPage:this.state.InstagramPage,
                youTube:this.state.youTube,
                arrayOfCards:this.state.arrayOfCards,
                mybizz:this.state.mybizz
            })

        })
        .then(response =>response.json())
        .then(data=> {
           
           
            }
        )

      
    

    this.setState({name:'',location:'',phone:'',email:'',website:'',faceBookPage:'',InstagramPage:'',youTube:'', arrayOfCards:[], mybizz:''}) 

    }

    handleChange = (event)=>{
        const{value, name} = event.target;
        console.log(name,value)
        this.setState({[name]:value})
        // console.log(this.state.mybizz.value)
        // console.log(event.target.value)
    }

    FuncBizzNetArray = ()=>{
       const BizzNetArray= this.state.selected.map(x=>x.label)
    console.log(BizzNetArray)
    } 

   

   

//create an array of 8 cards,and then stop with a message 
//problem one- can still check after finishing 8, problem 2- can accept the same value more the once
    cardSelect = (event)=>{
        console.log('reading data' ,event.target.value,'  ',event.target.name)
        if(this.state.arrayOfCards.length<numberOfCards){
            const newVal = event.target.value
            if(!this.state.arrayOfCards.includes(newVal)){
                const newArr =[...this.state.arrayOfCards, newVal]
                this.setState({arrayOfCards:newArr})
                
            }     
                 
            setTimeout(()=>{
                console.log(this.state.arrayOfCards)
            },0)  
            // console.log(this.state.cardNum)
        }
        else{
            console.log(`choose only ${numberOfCards} cards`)
            
            event.preventDefault()
            
        }

    }
   

    
render(){
 return(
 <form onSubmit={this.handleSubmit}>
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
        <input className='input' name='InstagramPage' type='text' value={this.state.InstagramPage} placeholder='Instagram Page link' onChange={this.handleChange} ></input>
        </div>

        <div>
        <i className="fa fa-youtube icon icon-1"></i> 
        <input className='input' name='youTube' type='text' value={this.state.youTube} placeholder='YouTube Channel link' onChange={this.handleChange}  ></input>
        </div>
      

           <div className='chose-my-business'>

           <h1 className="header" >choose your field of business</h1>
           
           <select name="mybizz" onChange={this.handleChange} >
           <option value="medicine">medicine</option>
           <option value="consulting">consulting</option>
           <option value="design" >design</option>
           <option value="sales">sales</option>
           </select>
           </div>

           <div>
           <DropSelect 
           value={this.state.selected}
           onChange={this.FuncBizzNetArray}
           />
           </div>

           <div className='choseCards'>
           <h1 className="header" >choose your cards for display</h1>

           <div className='card'>
            <input type="Checkbox" name='callBusiness' value="callBusiness"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">call the business</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='sendSms' value="sendSms"
           
            onChange={this.cardSelect}></input>
            <label htmlFor="">send the business an sms</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='sendWhatsApp' value="sendWhatsApp"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">send the business a whatsApp Message</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='sendEmail' value="sendEmail"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">send the business an email</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='navigate' value="navigate"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">navigate to business</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='faceBook' value="faceBook"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">watch the business faceBook page</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='webSite' value="webSite"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">open the business webSite</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='youTube' value="youTube"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">watch the business youTube page</label>
           </div>

           <div className='card'>
           <input type="Checkbox" name='instagram' value="instagram"
           
           onChange={this.cardSelect}></input>
           <label htmlFor="">watch the business instagram page</label>
          </div>

          <div className='card'>
           <input type="Checkbox" name='linkDin' value="linkDin"
           onChange={this.cardSelect}></input>
           <label htmlFor="">watch the business linkDin page</label>
          </div>


            </div>


               
        
           
           

           
      
           <input type='submit' value='submit Form' className='button'></input>
           </div>
           </div>
           </form>


 



 





       )
   

        
    // render(){
    //     return(
                  
    //     <div className="container">
                 
    //     <div className='profile'>
    //     <h1 className="header" >Build Your Business Profile</h1>
    //     <form onSubmit={this.handleSubmit}>
    //     <div>
    //     <i className="fa fa-user icon"></i> 
    //         <input className='input' name='name' type='string' value={this.state.name} placeholder='Business Name' onChange={this.handleChange} required ></input>
    //     </div>

    //     <div>
    //     <i className="fa fa-phone icon"></i> 
    //     <input className='input' name='phone' type='string' value={this.state.phone} placeholder='Phone Number' onChange={this.handleChange} required ></input>
    //     </div>
        
    //     <div>
    //     <i className="fa fa-envelope icon"></i> 
    //     <input className='input' name='email' type='email' value={this.state.email} placeholder='email' onChange={this.handleChange} required ></input>
    //     </div>

    //     <div>
    //     <i className="fa fa-map-marker icon"></i> 
    //     <input className='input' name='location' type='text' value={this.state.location} placeholder='Location' onChange={this.handleChange} required ></input>
    //     </div>

       
//         </form>

//         </div>
       
//     </div>
//         )
//     }
}
}

export default Profile;