import React from 'react';
import './personal-profile.scss';
import Directory from '../../components/directory-menu/directory' 


const PersonalProfile = (props) =>{

    const { match:{ params } } =props

    
    return(

        <div>
        
        <div className="personalProfile">
        <Directory  id={params.id}/>     
        </div>
        </div>

    )
}

export default PersonalProfile;