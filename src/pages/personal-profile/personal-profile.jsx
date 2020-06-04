import React from 'react';
import './personal-profile.scss';
import Directory from '../../components/directory-menu/directory' 
import BurgerMenu from '../../components/burger-menu/burger-menu';

const PersonalProfile = () =>(

    <div>
    <BurgerMenu/>
    <div className="personalProfile">
    <Directory/>     
    </div>
    </div>
) 

export default PersonalProfile;