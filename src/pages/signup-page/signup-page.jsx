import React from 'react';
import SignUp from '../../components/sign-up/sign-up';
import BurgerMenu from '../../components/burger-menu/burger-menu';



const SignUpPage = () =>{

    return(
        <div>
        <BurgerMenu/>
        <div className='sign'>
        <SignUp/>
        </div>
        
        </div>
    )
}


export default SignUpPage;