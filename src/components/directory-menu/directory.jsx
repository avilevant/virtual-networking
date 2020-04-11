import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item';



class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            buttons:[
                {
                    title:'LOCATION',
                    icon:<ion-icon name="location-outline"></ion-icon>,
                    id:1
                },
                {
                    title:'WEBSITE',
                    icon: <ion-icon name="globe-outline"></ion-icon>,
                    id:2
                },
                {
                    title:'FACEBOOK',
                    icon: <ion-icon name="logo-facebook"></ion-icon>,
                    id:3
                },
                {
                    title:'WHATSAPP',
                    icon: <ion-icon name="logo-whatsapp"></ion-icon>,
                    id:4
                },
                {
                    title:'YOUTUBE',
                    icon: <ion-icon name="logo-youtube"></ion-icon>,
                    id:5
                },
                {
                    title:'INSTEGRAM',
                    icon: <ion-icon name="logo-instagram"></ion-icon>,
                    id:6
                },
                {
                    title:'LINKDIN',
                    icon:<ion-icon name="logo-linkedin"></ion-icon>,
                    id:7
                },
                {
                    title:'EMAIL',
                    icon:<ion-icon name="mail-outline"></ion-icon>,
                    id:8
                }
                
            ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
            <div className="cover-image"></div>

            {
                this.state.buttons.map(({title,icon,id})=>(
                    <MenuItem key={id} title={title} icon={icon}/>
                ))
            }
            </div>
        )
    }

}

export default Directory;