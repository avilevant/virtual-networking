import React from 'react';
import './signin-page.scss';
import SignIn from '../../components/sign-in/sign-in'
import BurgerMenu from '../../components/burger-menu/burger-menu';

const SignInPage = ()=>{


    return(
        <div>
        <BurgerMenu/>
        
        <div className='sign' >
        <SignIn/>
        </div>
        </div>
        
    )
}


        
export default SignInPage;        
    
        
        
        
    
