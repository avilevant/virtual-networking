import React from 'react';
import {isMobile} from 'react-device-detect';

// import Directory from '../directory-menu/directory';



const CreateCardList =(props) => {
// console.log(props.phone)
    
                
               const cardList = [
               {
                   title:'CALL',
                   icon:<ion-icon name="call-outline"></ion-icon>,
                   id:1,
                   callback: ()=> {
                    if (isMobile) {
                        window.location.href = `tel:+972${props.phone}`
                    }else{
                        alert( `our number is ${props.phone}, please call us`)
                    }
                       
                     
                       
                     
            }
               },
               {
                   title:'SMS',
                   icon: <ion-icon name="chatbox-ellipses-outline"></ion-icon>,
                   id:2,
                   callback: ()=>{ 
                    if (isMobile) {
                        window.location.href = `sms:+972${props.phone}`
                    }else{

                        alert('this option is available on mobile only')}
                    }

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
                        window.open(`https://wa.me/${props.phone}`)
                }else{

                    alert('this option is available on mobile only')
                }
            },
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
                //    callback: () =>window.open("http://localhost:3000/map"),
                // callback: () =>window.open(`http://google.com/maps/search/?api=1&${encoded}`),
                callback: () =>{
                    const encoded = encodeURIComponent(props.location)
                    if(isMobile){
                          window.open(`http://waze.com/ul?q=${encoded}&z=17`)
                        }
                    
                    window.open(`http://google.com/maps/search/?api=1&query=${encoded}`)},
                //     window.open(`http://waze.com/ul?q=${encoded}&z=17`)},
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
                   callback: () =>window.open(props.website),
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
               },
               {
                title:'SHARE',
                icon:<ion-icon name="share-social-outline"></ion-icon>,
                callback: () =>navigator.share({text:'check out my e-card' ,url:props.personalprofile}) ,
                //change later to personalprofile
                id:11
            }    
           ];
       
          return cardList;
      
       
        }    
    
   



export default CreateCardList;