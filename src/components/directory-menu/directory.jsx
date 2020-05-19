import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item';
import CreateCardList from '../card-list/card-list';





class Directory extends React.Component{
    constructor(props){
        super(props);

        console.log(this.props)

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


    // insertImg(){
    //     const bigImg = require('../../img/3093524.jpg')
    //        return <img src={bigImg} alt='user data' className='bigImg'  />
    // }
     
    
    
    cardRender(){
        
         
          if (this.state.cards) return(
                this.state.cards.map(({title,icon,id,callback})=>(
                <MenuItem key={id} title={title} icon={icon} data={callback}  />
            ))
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
               linkedIn: data.business.linkedIn
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
           linkedIn: data.business.linkedIn
        })

           console.log(this.state)
        
        })
    }


    render(props){
        return(
            <div>
           
            
            <div className='bigImg'>
            <h1 className='bizzName'>{this.state.name}</h1>
            </div>
           
            <div className="button-menu">
                
              {this.cardRender() }
             
            </div>
            </div>
        )
    }

}

export default Directory;
