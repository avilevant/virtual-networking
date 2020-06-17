import React from 'react';
import SignUp from '../../components/sign-up/sign-up';
import Toolbar from '../../components/toolbar/toolbar';



const SignUpPage = () =>{

    return(
        <div>
        <Toolbar/>
        <div className='sign'>
        <SignUp/>
        </div>
        
        </div>
    )
}


export default SignUpPage;