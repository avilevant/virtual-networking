import React from 'react';
import './signin-page.scss';
import SignIn from '../../components/sign-in/sign-in'
import Toolbar from '../../components/toolbar/toolbar';

const SignInPage = ()=>{


    return(
        <div>
        <Toolbar/>
        
        <div className='sign' >
        <SignIn/>
        </div>
        </div>
        
    )
}


        
export default SignInPage;        
    
        
        
        
    
