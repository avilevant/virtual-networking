import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item';
import CreateCardList from '../card-list/card-list';






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
            linkedIn:''

        }
    }

    
    insertImg(){
        const bigImg = require('../../img/3093524.jpg')
           return <img src={bigImg} alt='user data' className='bigImg'  />
    }

    insertImg1(){
        const smallImg = require('../../img/IMG_0087_pp.jpg')
           return <img src={smallImg} alt='user data' className='smallImg'  />
    }

   
     
        
    cardRender(){
        
          if (this.state.cards)
          
          
          return(
             
              this.state.cards.map(({title,icon,id,callback})=>              
              (<MenuItem key={id} title={title} icon={icon} data={callback} />))
               
        )
        else return <h1> loading</h1>



    }

    

    componentDidMount(){
        fetch('http://localhost:3003/personalprofile')
        .then(response => response.json())
        .then((data)=>{
            
           const userArray = JSON.parse(data.business_arrayofcards.replace('{','[').replace('}',']'));
           console.log(userArray)
           const propsForCardList = {
               name:data.business_name,
               location:data.business_location,
               phone:data.business_phone,
               email:data.business_email,
               website: data.business_website,
               facebook: data.business_facebook,
               InstagramPage:data.business_instagram,
               youtube: data.business_youtube,
               linkedIn: data.business_linkedIn
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
           linkedIn: data.business_linkedIn
        })

           console.log(this.state)
        
        })
    }

    

    render(props){

        

        return(
            <div>
            
           
            <div className='bigImg'>
            {this.insertImg()}
            
            </div>
            
            
           <div>
           <span className='bizzName'>
                <h1>{this.state.name}</h1> 
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
