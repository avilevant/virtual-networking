import React from 'react';
import DropSelect from "../../components/drop-select/drop-select";
import './profile.scss';
//import ProfileData from '../../components/profile-data/profile-data'
import Checkbox from '../../components/checkbox/checkbox';
import BusinessList from '../../components/business-list/business-list'

const numberOfCards = 8



class Profile extends React.Component{

    constructor(props){
        super(props)

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
            BizzNetArray:[],
            list:BusinessList
            
        }

       
    }

    


    handleSubmit = (event,props) => {
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
           
           console.log('this data has been sent: ', data)
            }
        )

      
    

    this.setState({name:'',location:'',phone:'',email:'',website:'',faceBookPage:'',InstagramPage:'',youTube:'', arrayOfCards:[], mybizz:''})
    
    this.props.isChecked = false

    }

    handleChange = (event)=>{
        const{value, name} = event.target;
        console.log(name,value)
        this.setState({[name]:value})
       
    }

    // BizzNetMember: array of strings, each is a business label
    FuncBizzNetArray = (BizzNetMember)=>{
        console.log("new BizNetMember: ", JSON.stringify(BizzNetMember));
        this.setState({BizzNetArray :BizzNetMember});
           
        setTimeout(()=>{
            console.log(this.state.BizzNetArray)
        },0)  

       
    }
      //  
    
        
    
 
    //gets the following params:
    //  id: integer
    //  isChecked: boolean
    cardSelect = (id, isChecked)=>{
       
        
            const newVal = id
            if(!this.state.arrayOfCards.includes(newVal) && isChecked){
                console.log("changing state", id, isChecked )
                const newArr =[...this.state.arrayOfCards, newVal]
                this.setState({arrayOfCards:newArr})
                
            }else if (this.state.arrayOfCards.includes(newVal) && !isChecked){
                console.log("changing state", id, isChecked )
                const newArr = this.state.arrayOfCards.filter(id => id !== newVal)
                this.setState({arrayOfCards:newArr})
            }
                 
            setTimeout(()=>{
                console.log(this.state.arrayOfCards)
                // console.log(Checkbox)
            },0)  
        

    }

   
    checkCanIAdd = ()=>{
        if(this.state.arrayOfCards.length+1 >numberOfCards){
            return false
        }else{
            return true
        }
    }
        
        
        

    

    createCheckbox = (params) => (
        <Checkbox
                
                canIAdd={this.checkCanIAdd}
                label={params.label}
                myId={params.id}
                handleCheckboxChange={this.cardSelect}
                key={params.id}
                 />
      )

    
    
      createCheckboxes = () => (
        this.state.list.map(this.createCheckbox)
       
      )  
   
    

    
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
           <DropSelect  importData={this.FuncBizzNetArray}/>
           </div>

           <div className='choseCards'>
           <h1 className="header" >choose your cards for display</h1>
           {this.createCheckboxes()}
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