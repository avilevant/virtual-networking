import React from 'react';
import {isMobile} from 'react-device-detect';
import  img1 from '../../img/iconsfinal/1-08.png';
import  img2 from '../../img/iconsfinal/1-10.png';
import  img3 from '../../img/iconsfinal/1-13.png';
import  img4 from '../../img/iconsfinal/1-12.png';
import  img5 from '../../img/iconsfinal/1-09.png';
import  img6 from '../../img/iconsfinal/1-14.png';
import  img7 from '../../img/iconsfinal/1-11.png';
import  img8 from '../../img/iconsfinal/1-17.png';
import  img9 from '../../img/iconsfinal/1-19.png';
import  img10 from '../../img/iconsfinal/1-15.png';
import  img11 from '../../img/iconsfinal/1-18.png';
import  img12 from '../../img/iconsfinal/1-16.png';



const CreateCardList =(props) => {
// console.log(props.phone)
    
                
               const cardList = [
               {
                   title:'CALL',
                //    icon:<ion-icon name="call-outline"></ion-icon>,
                icon:<img src={img1} alt='img1' className='svg'/>,
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
                //    icon: <ion-icon name="chatbox-ellipses-outline"></ion-icon>,
                   icon:<img src={img2} alt='img2' className='svg'/>,
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
                //    icon: <ion-icon name="logo-whatsapp"></ion-icon>,
                   icon:<img src={img3} alt='img3' className='svg'/>,
                   callback: () =>{ 
                    if (isMobile) {
                        window.open(`https://wa.me/+972${props.phone}`)
                }else{

                    alert('this option is available on mobile only')
                }
            },
                   id:3
               },
               {
                   title:'EMAIL',
                //    icon:<ion-icon name="mail-outline"></ion-icon>,
                   icon:<img src={img4} alt='img4' className='svg'/>,
                   callback: ()=> window.location=`mailto:${props.email}`,
                   id:4
               },
               {
                   title:'LOCATION',
                //    icon:<ion-icon name="location-outline"></ion-icon>,
                   icon:<img src={img5} alt='img5' className='svg'/>,
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
                   icon:<img src={img6} alt='img6' className='svg'/>, 
                   callback: () =>window.open(props.facebook),
                   id:6
               },
               {
                   title:'WEBSITE',
                //    icon: <ion-icon name="globe-outline"></ion-icon>,
                   icon:<img src={img7} alt='img7' className='svg'/>,
                   callback: () =>window.open(props.website),
                   id:7
               },
               {
                   title:'YOUTUBE',
                   icon:<img src={img8} alt='img8' className='svg'/>,
                   callback: () =>window.open(props.youtube),
                   id:8
               },
               {
                   title:'INSTEGRAM',
                   icon:<img src={img9} alt='img9' className='svg'/>,
                   callback: () =>window.open(props.instagram),
                   id:9
               },
               {
                   title:'LINKEDIN',
                   icon:<img src={img10} alt='img10' className='svg'/>,
                   callback: () =>window.open(props.linkedIn),
                   id:10
               },
               {
                title:'TWITTER',
                icon:<img src={img12} alt='img12' className='svg'/>,
                callback: () =>window.open(props.twitter),
                id:12
                },
               {
                title:'SHARE',
                icon:<img src={img11} alt='img11' className='svg'/>,
                callback: () =>navigator.share({url:props.personalprofile}) ,
                //change later to personalprofile
                id:11
            }    
           ];
       
          return cardList;
      
       
        }    
    
   



export default CreateCardList;