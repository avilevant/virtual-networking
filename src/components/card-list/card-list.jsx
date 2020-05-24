import React from 'react';
import {isMobile} from 'react-device-detect';
// import PopupMessage from '../popup/popup';
// import Directory from '../directory-menu/directory';
let n=5

const PopMessage = (props,n ) => {
    console.log(n)
    if(n===1){

        return <h1>{props.message1}</h1>
    
    }else if(n===2){
        return <h1>{props.message2}</h1>
    }else if(n===3){
        return <h1>{props.message3}</h1>
    }else
    return <h1>say yeh</h1>
    
}


const CreateCardList =(props) => {

    
                
               const cardList = [
               {
                   title:'CALL',
                   icon:<ion-icon name="call-outline"></ion-icon>,
                   id:1,
                   callback: ()=> {
                    // if (isMobile) {
                    //     return <div> call made on mobile</div>
                    // }
                        //  return <div>hello</div>

                        console.log('call clicked')
                        
                                
                            
                            PopMessage(n)
                            
                        
                        // return <Directory render={PopupMessage}/> 
                        
                        // return <PopupMessage/>
            }
               },
               {
                   title:'SMS',
                   icon: <ion-icon name="chatbox-ellipses-outline"></ion-icon>,
                   id:2,
                   callback: ()=>{ 
                    const n=2
                       PopMessage(n)}
                //     if (isMobile) {
                //         return <div> call made on mobile</div>
                // }
                //         console.log('sms clicked')
                //         return <h1>say hello to my little friend</h1>}
               },
               {
                   title:'WHATSAPP',
                   icon: <ion-icon name="logo-whatsapp"></ion-icon>,
                   callback: () =>{ 
                    if (isMobile) {
                        return <div> call made on mobile</div>
                }
                const n=3
                     PopMessage(n)},
                   id:3
               },
               {
                   title:'EMAIL',
                   icon:<ion-icon name="mail-outline"></ion-icon>,
                   callback: ()=> window.location=`mailto:${props.email}`,
                   id:4
               },
               {
                   title:'LOCATION',
                   icon:<ion-icon name="location-outline"></ion-icon>,
                   callback: () =>window.open("https://www.w3schools.com"),
                   id:5
               },
               {
                   title:'FACEBOOK',
                   icon: <ion-icon name="logo-facebook"></ion-icon>,
                   callback: () =>window.open(props.facebook),
                   id:6
               },
               {
                   title:'WEBSITE',
                   icon: <ion-icon name="globe-outline"></ion-icon>,
                   callback: () =>window.open(`https://${props.website}`),
                   id:7
               },
               {
                   title:'YOUTUBE',
                   icon: <ion-icon name="logo-youtube"></ion-icon>,
                   callback: () =>window.open(props.youtube),
                   id:8
               },
               {
                   title:'INSTEGRAM',
                   icon: <ion-icon name="logo-instagram"></ion-icon>,
                   callback: () =>window.open(props.instagram),
                   id:9
               },
               {
                   title:'LINKEDIN',
                   icon:<ion-icon name="logo-linkedin"></ion-icon>,
                   callback: () =>window.open(props.linkedIn),
                   id:10
               }  
           ];
       
          return cardList;
      
       
        }    
    
   



export {CreateCardList, PopMessage};