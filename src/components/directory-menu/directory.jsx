import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item';
import CreateCardList from '../card-list/card-list';
import {isMobile} from 'react-device-detect';
import Cookies from 'js-cookie';




class Directory extends React.Component{
    constructor(props){
        super(props);

        

        this.state = {
            cards: null,
            name:'',
            location:'',
            phone:'',
            email:'',
            website:'',
            faceBookPage:'',
            InstagramPage:'',
            youTube:'',
            linkedIn:'',
            coverImg:'null',
            smallImg:'null'

        }

     
      
    }

    
    
    insertImg(){
       
           return <img src={this.state.coverImg} alt='user data' className='bigImg'  />
    }

    insertImg1(){
       
           return <img src={this.state.smallImg} alt='user data' className='smallImg'  />
    }

   
     
        
    cardRender(){
        
      
          if (this.state.cards)
                 if (isMobile) {
                   
                    return(
                        
                        this.state.cards.map(({title,icon,id,callback})=>              
                        (<MenuItem key={id} title={title} icon={icon} data={callback} />))
                        
                       
                    )
                    
                    
                }else{
                    return(
               
               
                        this.state.cards.map(({title,icon,id,callback})=>              
                        (<MenuItem key={id} title={title} icon={icon} data={callback} />))
                       
                )
                }
          
        
        else return <h1> loading</h1>



    }

    

    componentDidMount(){
        const C_id = Cookies.get('C_id')
        
               fetch(`https://afternoon-thicket-58274.herokuapp.com/personalprofile/${C_id}`)
        .then(response => response.json())
        .then((data)=>{
            
           const userArray = JSON.parse(data.business_arrayofcards.replace('{','[').replace('}',']'));
           if(isMobile){
             userArray.push("11")
             } 
           console.log(userArray)
           const propsForCardList = {
               personalprofile:`https://afternoon-thicket-58274.herokuapp.com/personalprofile/${C_id}`,
               name:data.business_name,
               location:data.business_location,
               phone:data.business_phone,
               email:data.business_email,
               website: data.business_website,
               facebook: data.business_facebook,
               InstagramPage:data.business_instagram,
               youtube: data.business_youtube,
               linkedIn: data.business_linkedin
           }
           const personalCards = CreateCardList(propsForCardList).filter(card=> userArray.includes(card.id.toString()));

           
            
           console.log(personalCards)
           
           this.setState({
           cards:personalCards, 
           name:data.business_name,
           location:data.business_location,
           phone:data.business_phone,
           email:data.business_email,
           website:data.business_website,
           faceBookPage:data.business_facebook,
           InstagramPage:data.business_instagram,
           youTube:data.business_youtube,
           linkedIn: data.business_linkedin,
           coverImg: data.business_background_pic,
           smallImg:data.business_small_pic
          
        })

           console.log(this.state)
        
        })
    }

    

    render(){

        

        return(
            <div className="dir">
          
                <div className='bigImg'>
                {this.insertImg()}
                </div>

                
            
           <div className='view'>
           <span >
           <h1 className='bizzName'>{this.state.name}</h1> 
           </span>
                
            <figure className='smallImgFig'>
            {this.insertImg1()}
            </figure>
           </div>
            
           <div className="button-menu">
           {this.cardRender() }
           </div>
             </div> 
        )}

}

export default Directory;
