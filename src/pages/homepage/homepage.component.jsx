import React from 'react';
import './homepage.scss';
import Cookies from 'js-cookie';


const logOut = () =>{
   Cookies.remove('token')
}

const HomePage = () =>{
    logOut()

    return(
       
        <div className="homepage">
        <h1>THIS IS MY AMAZING APP </h1>   
            <h2>give it a try</h2>
        </div>
    ) 
}
 

export default HomePage;