import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item';
import CreateCardList from '../card-list/card-list';
import {isMobile} from 'react-device-detect';
import DataPop from '../popup-data/popup-data';
import ToggleButton from '../toogle-button/toogle-button';
import image1 from '../../img/info/info-24.png';
import image2 from '../../img/info/info-25.png';




class Directory extends React.Component{
    constructor(props){
        super(props);

        

        this.state = {
            cards: null,
            businessName:'',
            userName:'',
            location:'',
            phone:'',
            email:'',
            website:'',
            faceBookPage:'',
            InstagramPage:'',
            youTube:'',
            linkedIn:'',
            twitter:'',
            jobDescription:'',
            coverImg:'null',
            smallImg:'null',
            popInfo:'false',
            id:props.id
        }
       
    }

    
    //images - big image and small logo
    insertImg(){
           return <img src={this.state.coverImg || "https://firebasestorage.googleapis.com/v0/b/virtual-networking-278509.appspot.com/o/images%2Flaptop-1209008_1280_500x500.jpg?alt=media&token=ec7989cc-0004-42af-8608-1622835602ef"} alt='user data' className='bigImg'  />
    }

    insertImg1(){
           return <img src={this.state.smallImg || "https://firebasestorage.googleapis.com/v0/b/virtual-networking-278509.appspot.com/o/images%2Fdog-316598_1280_500x500.jpg?alt=media&token=90842756-a430-4a93-98da-339d3ae181d1"} alt='user data' className='smallImg'  />
    }

   
    //expended information about user
    infoPopShow=()=>{
        this.setState({popInfo:true})
        return <img src={image2} alt='pop'  className='pop' />
    }

    infoPopHide=()=>{
        this.setState({popInfo:false})
        return <img src={image1} alt='pop'  className='pop' />
    }

    

     
    // building the card set    
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
                )}
                else return <h1> loading</h1>
    }

    

    //uploading data from db
    componentDidMount(){
        const uId = this.state.id
        
        fetch(`https://afternoon-thicket-58274.herokuapp.com/personalprofile/${uId}`)
        .then(response => response.json())
        .then((data)=>{
            
           const userArray = JSON.parse(data.business_arrayofcards.replace('{','[').replace('}',']'));
           if(isMobile){
             userArray.push("11")
             } 
           
           const propsForCardList = {
                personalprofile:`https://virtual-networking.herokuapp.com/personalprofile/${uId}`,
                businessName:data.business_name,
                location:data.business_location,
                phone:data.business_phone,
                email:data.business_email,
                website: data.business_website,
                facebook: data.business_facebook,
                InstagramPage:data.business_instagram,
                youtube: data.business_youtube,
                linkedIn: data.business_linkedin,
                twitter:data.business_twitter,
                jobDescription:data.jobdescription,
                userName:data.name
           }

    //using data to upload to cardlist for rendering       
           const personalCards = CreateCardList(propsForCardList).filter(card=> userArray.includes(card.id.toString()));

                this.setState({
                cards:personalCards, 
                businessName:data.business_name,
                location:data.business_location,
                phone:data.business_phone,
                email:data.business_email,
                website:data.business_website,
                faceBookPage:data.business_facebook,
                InstagramPage:data.business_instagram,
                youTube:data.business_youtube,
                linkedIn: data.business_linkedin,
                twitter:data.business_twitter,
                jobDescription:data.jobdescription,
                coverImg: data.business_background_pic,
                smallImg:data.business_small_pic,
                userName:data.name
                
                })
        })
    }

    

    render(){

        return(
            <div className="dir">
          
                <div >
                {this.insertImg()}
                </div>

                
            
                <div className='smallImgFig' >
                    <div className='smallImgFigInner'>
                    {this.insertImg1()}
                    </div>
                            
                    <div className='title'>
                    <h1>{this.state.businessName}</h1>
                    <h2>{this.state.userName }</h2>
                    <h2>{this.state.jobDescription }</h2>
                    </div>

                    <div className='pop1'>
                    <ToggleButton default={this.infoPopHide} change={this.infoPopShow}/>
                    </div>
                </div>   

                <DataPop location={this.state.location} phone={this.state.phone} show={this.state.popInfo}/>

                <div className="button-menu">
                {this.cardRender() }
                </div>
            </div> 
        )}

}

export default Directory;
