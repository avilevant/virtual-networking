import React from 'react';
import DropSelect from "../../components/drop-select/drop-select";
import './profile.scss';
import Checkbox from '../../components/checkbox/checkbox';
import BusinessList from '../../components/business-list/business-list';
import {OccupationList} from '../../components/occupationlist/occupationlist';
import {withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';


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
            linkedIn:'',
            arrayOfCards:[],
            mybizz:'',
            BizzNetArray:[],
            list:BusinessList,
            U_name:''
        }
        
        
        
    }
        
    
    componentDidMount(){
        
        const C_name =  Cookies.get('C_name')
        console.log(C_name)

        this.setState({U_name:C_name})
    }

    handleSubmit = (event,props) => {
        event.preventDefault();
        const token =  Cookies.get('token')
        console.log(token)
        fetch('http://localhost:3003/profile', {
            method: 'post',
            headers: {'Content-Type': 'application/json', 'Authorization':'Bearer '+ token },
            body: JSON.stringify({
                email:this.state.email,
                name:this.state.name,
                location:this.state.location,
                phone:this.state.phone,
                website:this.state.website,
                faceBookPage:this.state.faceBookPage,
                InstagramPage:this.state.InstagramPage,
                youTube:this.state.youTube,
                linkedIn: this.state.linkedIn,
                arrayOfCards:this.state.arrayOfCards,
                mybizz:this.state.mybizz,
                BizzNetArray:this.state.BizzNetArray
            })

        })
        .then(response =>response.json())
        .then(data=> {
            console.log(data)
            this.props.history.push('/uploadImg');
        //    console.log('this data has been sent: ', data)
            }
        ).then(user=>{
            console.log(user)
        })

      
    

    this.setState({name:'',location:'',phone:'',email:'',website:'',faceBookPage:'',InstagramPage:'',youTube:'', arrayOfCards:[], mybizz:''})
    
    

    }

    handleChange = (event)=>{
        const{value, name} = event.target;
        console.log(name,value)
        this.setState({[name]:value})
       
    }

    chooseMyBiz=()=>{
        const tempArray =[]
        return (

        <select name="mybizz" onChange={this.handleChange} className='chose-my-business' >
        <option className='option'>Choose... </option>
        
            {OccupationList.forEach(el=>tempArray.push(el.label))}
               
            {tempArray.map(label=>  <option  value={label}>{label}</option>)}
       
        </select>)
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
    <div>
    <h1 className='username'>Hi {this.state.U_name}, Build Your Business Profile</h1>
 <form onSubmit={this.handleSubmit}>
   
                 
    <div className='profile'>
        <div className='first-col'>
        <h1 className="header" >Enter your business information</h1>
     
        <div>
        <i className="fa fa-user icon"></i> 
            <input className='input' name='name' type='text' value={this.state.name} placeholder='Business Name' onChange={this.handleChange} required ></input>
        </div>

        <div>
        <i className="fa fa-phone icon"></i> 
        <input className='input' name='phone' type='tel' pattern="^\d{10}$" value={this.state.phone} placeholder='Phone Number' onChange={this.handleChange} required ></input>
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

        <div>
        <i className="fa fa-linkedin icon icon-1"></i> 
        <input className='input' name='linkedIn' type='text' value={this.state.linkedIn} placeholder='linkedIn Profile link' onChange={this.handleChange}  ></input>
        </div>
        </div>
      
        <div className='second-col'>
        
           <div >

           <h1 className="header" >choose your field of business</h1>
           
           
           {this.chooseMyBiz()}
           </div>

           <div>
           <DropSelect  importData={this.FuncBizzNetArray}/>
           </div>

          

           </div>

           <div className='last-col'>
          

           <div className='choseCards'>
           <h1 className="header" >choose your cards for display</h1>
           {this.createCheckboxes()}
           </div>
           </div>

        </div>
      
           <input type='submit' value='submit Form' className='button'></input>
           
           
           </form>

           </div>
 



 





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

export default withRouter(Profile);