import React from 'react';

const CardList = 
    [
        {
            title:'CALL',
            icon:<ion-icon name="call-outline"></ion-icon>,
            id:1,
            callback: ()=> console.log('calling')
        },
        {
            title:'SMS',
            icon: <ion-icon name="chatbox-ellipses-outline"></ion-icon>,
            
            id:2
        },
        {
            title:'WHATSAPP',
            icon: <ion-icon name="logo-whatsapp"></ion-icon>,
            id:3
        },
        {
            title:'EMAIL',
            icon:<ion-icon name="mail-outline"></ion-icon>,
            id:4
        },
        {
            title:'LOCATION',
            icon:<ion-icon name="location-outline"></ion-icon>,
            id:5
        },
        {
            title:'FACEBOOK',
            icon: <ion-icon name="logo-facebook"></ion-icon>,
            id:6
        },
        {
            title:'WEBSITE',
            icon: <ion-icon name="globe-outline"></ion-icon>,
            id:7
        },
        {
            title:'YOUTUBE',
            icon: <ion-icon name="logo-youtube"></ion-icon>,
            id:8
        },
        {
            title:'INSTEGRAM',
            icon: <ion-icon name="logo-instagram"></ion-icon>,
            id:9
        },
        {
            title:'LINKEDIN',
            icon:<ion-icon name="logo-linkedin"></ion-icon>,
            id:10
        }
        
        
    ]


export default CardList