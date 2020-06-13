import React from 'react';
import './personal-profile.scss';
import Directory from '../../components/directory-menu/directory' 
import BurgerMenu from '../../components/burger-menu/burger-menu';

const PersonalProfile = (props) =>{

    const { match:{ params } } =props
    
    return(

        <div>
        <BurgerMenu/>
        <div className="personalProfile">
        <Directory  id={params.id}/>     
        </div>
        </div>

    )
}

export default PersonalProfile;