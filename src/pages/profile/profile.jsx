import React from 'react';
import DropSelect from "../../components/drop-select/drop-select";
import './profile.scss';
import Checkbox from '../../components/checkbox/checkbox';
import BusinessList from '../../components/business-list/business-list';
import {OccupationList} from '../../components/occupationlist/occupationlist';
import {withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';
import BurgerMenu from '../../components/burger-menu/burger-menu';
import { Steps,Panel,ButtonGroup,Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import UploadToFirebase from '../../components/photo-upload/photo-upload'
import  imgAstrix from '../../img/fwdnewicons/ambulance.png';




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
            twitter:'',
            arrayOfCards:[],
            mybizz:'',
            BizzNetArray:[],
            list:BusinessList,
            U_name:'',
            step:0,
            message:'first step',
            jobdescription:''
        }
        
        
    }


    
        
    
    componentDidMount(){
        const token =  Cookies.get('token')
        const C_name =  Cookies.get('C_name')
        // const C_id =  Cookies.get('C_id')
        console.log(C_name)
        this.setState({U_name:C_name})
        
        
        fetch(`https://afternoon-thicket-58274.herokuapp.com/profile/`,{
            method: 'get',
            headers: {'Content-Type': 'application/json', 'Authorization':'Bearer '+ token }
        })
        .then(response => response.json())
        .then((data)=>{
            
            this.setState({
            arrayOfCards:data.business_arrayofcards||'', 
            name:data.business_name||'',
            location:data.business_location||'',
            phone:data.business_phone||'',
            email:data.business_email||'',
            website:data.business_website||'',
            faceBookPage:data.business_facebook||'',
            InstagramPage:data.business_instagram||'',
            youTube:data.business_youtube||'',
            linkedIn: data.business_linkedin||'',
            coverImg: data.business_background_pic,
            smallImg:data.business_small_pic,
            twitter:data.business_twitter||'',
            jobdescription:data.jobdescription||''
            
            })
            

        
        })
        
        }


    handleSubmit = (event) => {
        event.preventDefault();
        const C_id =  Cookies.get('C_id')
        const token =  Cookies.get('token')
        // const C_id = Cookies.get('C_id')
        console.log(this.state.jobdescription)
        console.log(token)
        fetch('https://afternoon-thicket-58274.herokuapp.com/profile', {
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
                BizzNetArray:this.state.BizzNetArray,
                twitter:this.state.twitter,
                jobdescription:this.state.jobdescription
               })

        })
        .then(response =>response.json())
        .then(data=> {
            console.log(data)
            
            this.props.history.push(`personalprofile/${C_id}`);
            }
        ).then(user=>{
            console.log(user)
        })

      
    

    this.setState({name:'',location:'',phone:'',email:'',website:'',faceBookPage:'',InstagramPage:'',youTube:'', arrayOfCards:[], mybizz:'',twitter:'',jobdescription:''})
    
    

    }

    handleChange = (event)=>{
        const{value, name} = event.target;
        
        this.setState({[name]:value})
        console.log(name,value)
        console.log(this.state.jobdescription)

    }

    

    onChangeStep = nextStep => {
        if (nextStep<=0){
            this.setState({step:0,message:'first step'})
        }else if(nextStep>=3){
            this.setState({step:3, message:'last step'})
        }else if(nextStep===1){
            this.setState({step:1,message:'second step'})
        }else if(nextStep===2){
            this.setState({step:2,message:'theird step'})
        }
    }
   

       

    onNext = () => {
        const nextStep = this.state.step
        this.onChangeStep(nextStep + 1)}


    onPrevious = () => {
        const nextStep = this.state.step
        this.onChangeStep(nextStep - 1)} 

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
            console.log('test')
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

          
   
    
        renderDisplay(){
            let step = this.state.step
            console.log(step)

            switch(step) {
                case 1:
                  return(
                    <div className='first-col'>
                
                    <div>
                    <h1 className="header" >choose your field of business</h1>
                        {this.chooseMyBiz()}
                    <h1 className="header">build your network!</h1>
                    <DropSelect  importData={this.FuncBizzNetArray}/>  
                    </div>

                </div>
                  )  
                  
                case 2:
                    return(
                        <div className='first-col'>
                        <h1 className="header" >choose your cards for display</h1>
                        <div className='choseCards'>
                        
                        {this.createCheckboxes()}
                        </div>
                        <input type="submit" value='Update Profile' className='button' />
                        </div>
                    )
                  
                case 3:
                    return(
                        <div className='first-col'>
                        <h1 className="header">Upload your images!</h1>
                        <UploadToFirebase />
                        </div>
                    )
                 

                  
                default:
                    return(
                    <div className='first-col'>
                    <h1 className="header" >Enter your business information</h1>
                    <div className='first-col-split'> 

                        <div className='first-col-1'>
                        

                        <div>
                        <img src={imgAstrix} alt='astix' className='colorIcon'/>
                        <i className="fa fa-user icon"></i> 
                        <input className='input' name='name' type='text' value={this.state.name} placeholder='Business Name' onChange={this.handleChange} required ></input>
                        </div>

                        <div>
                        <img src={imgAstrix} alt='astix' className='colorIcon'/>
                        <i className="fa fa-phone icon"></i> 
                        <input className='input' name='phone' type='tel' pattern="^\d{10}$" value={this.state.phone} placeholder='Phone Number' onChange={this.handleChange} required ></input>
                        </div>
                        
                        <div>
                        <img src={imgAstrix} alt='astix' className='colorIcon'/>
                        <i className="fa fa-envelope icon"></i> 
                        <input className='input' name='email' type='email' value={this.state.email} placeholder='email' onChange={this.handleChange} required ></input>
                        </div>

                        <div>
                        <img src={imgAstrix} alt='astix' className='colorIcon'/>
                        <i className="fa fa-map-marker icon icon-1"></i> 
                        <input className='input' name='location' type='text' value={this.state.location} placeholder='Location' onChange={this.handleChange} required ></input>
                        </div>

                        

                        </div>


                        <div className='first-col-2'>
                       
                        <div>
                        <img src={imgAstrix} alt='astix' className='colorIcon'/>
                        <i className="fa fa-user-circle icon icon-1"></i> 
                        <input className='input' name='jobdescription' type='text' value={this.state.jobdescription} placeholder='job Description' 
                        onChange={this.handleChange} required ></input>
                        </div>
                      

                        <div>
                        <i className="fa fa-globe icon"></i> 
                        <input className='input' name='website' type='text' value={this.state.website} placeholder='Business WebSite Address' onChange={this.handleChange}  ></input>
                        </div>
                        
                    
                        <div>
                        <i className="fa fa-twitter icon"></i> 
                        <input className='input' name='twitter' type='text' value={this.state.twitter} placeholder='twitter page link' onChange={this.handleChange}  ></input>
                        </div>

                        
                        <div>
                        <i className="fa fa-facebook icon"></i> 
                        <input className='input' name='faceBookPage' type='text' value={this.state.faceBookPage} placeholder='faceBook page link' onChange={this.handleChange}  ></input>
                        </div>

                        </div>


                        <div className='first-col-2'>
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
                        </div>
                        
                    </div>)
                

              }
            
        }


    
render(){
 return(
    <div>
    <BurgerMenu/>

    <h1 className='username'>Hi {this.state.U_name}, Build Your Business Profile</h1>
        <form onSubmit={this.handleSubmit} className='form'>
                            <Steps   current={this.state.step} >
                            <Steps.Item  />
                            <Steps.Item  />
                            <Steps.Item  />
                            <Steps.Item  />
                                </Steps>
                                <hr />
                                <Panel header={`Step ${this.state.step + 1}:  ${this.state.message}`}>
                                {this.renderDisplay()}
                                </Panel>
                                <hr />
                            <ButtonGroup>
                                <Button onClick={this.onPrevious} disabled={this.state.step === 0}>
                                Previous
                                </Button>
                                <Button onClick={this.onNext} disabled={this.state.step === 3}>
                                Next
                                </Button>
                            </ButtonGroup>
                                    
            
        </form>

        </div>
 
       )
        
}}


export default withRouter(Profile);