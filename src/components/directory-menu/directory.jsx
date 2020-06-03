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

        //temp version for testing without db

        

        // this.state = {
        //     cards: null,
        //     name:'חנות קופים',
        //     location:'המסגר 11 תל אביב',
        //     phone:'0547990712',
        //     email:'avilevant@gmail.com',
        //     website:'merkaz.levant.com',
        //     faceBookPage:'https://www.facebook.com/merkaz.levant/',
        //     InstagramPage:'',
        //     youTube:'https://www.youtube.com/channel/UC21w07Iz5gHrNcyJ76nW57g',
        //     linkedIn:'',
        //     coverImg:'https://firebasestorage.googleapis.com/v0/b/virtual-networking-278509.appspot.com/o/images%2F3093524_500x500.jpg?alt=media&token=2457dbf1-d671-4d43-84ff-da87001fd702',
        //     smallImg:'https://firebasestorage.googleapis.com/v0/b/virtual-networking-278509.appspot.com/o/images%2FIMG_0087_pp_500x500.jpg?alt=media&token=68e02d03-cf10-4c88-8633-84568d56a9a7'

            

        // }

        // const userArray = ["1", "2", "3", "4", "5", "6", "7", "8", "11"];
        // const personalCards = CreateCardList(this.state).filter(card=> userArray.includes(card.id.toString()));
        // console.log(this.state)

        // this.setState({cards:personalCards})

      
    }

    
    
    insertImg(){
        // const bigImg = require('../../img/3093524.jpg')
        // const img = this.state.coverImg
        // const bigImg = require(img)
           return <img src={this.state.coverImg} alt='user data' className='bigImg'  />
    }

    insertImg1(){
        // const smallImg = require('../../img/IMG_0087_pp.jpg')
        // const smallImg = require(this.state.smallImg)
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
        console.log(C_id)
        fetch(`http://localhost:3003/personalprofile/${C_id}`)
        .then(response => response.json())
        .then((data)=>{
            
           const userArray = JSON.parse(data.business_arrayofcards.replace('{','[').replace('}',']'));
           if(isMobile){
             userArray.push("11")
             } 
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
           linkedIn: data.business_linkedIn,
           coverImg: data.business_background_pic,
           smallImg:data.business_small_pic
          
        })

           console.log(this.state)
        
        })
    }

    

    render(props){

        

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
