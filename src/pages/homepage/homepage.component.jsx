import React from 'react';
import './homepage.scss';
import Cookies from 'js-cookie';
import BurgerMenu from '../../components/burger-menu/burger-menu';
import image1 from '../../img/Gmail/Business_card.png';
import image2 from '../../img/Gmail/Business_networking.png';
import image3 from '../../img/Gmail/Making_Business.png';

const logOut = () =>{
   Cookies.remove('token')
}

// const mainImage1 = require('../../img/1-10.png')
// <img src={mainImage1}  alt='network' className='mainImage'/>

const HomePage = () =>{
    logOut()

    return(
        <div>
        
        
        <BurgerMenu/>
       
            <div className="homepage">
                    <div className='mainImage' >
                    
                        <div className='mainHeader'>
                        <h1>VIRTUAL NETWORKING </h1>   
                        <h2>networking in a digital world</h2>
                        </div>
                    </div>

                        <div className='content'>
                        <div  className='content-image'>
                        <img src={image1}  alt='network' className='content_smallImage' />
                        </div>
                    
                        <div className='content_data'>
                        <h2>Create Your Digital Business Card</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, iusto id libero sit quae quaerat dignissimos ullam fugiat saepe, asperiores commodi ducimus. Esse nulla, neque perspiciatis cumque quaerat at consequuntur.</p>
                        </div>
                        </div>


                        <div className='content'>
                        <div className='content-image'>
                        <img src={image2}  alt='network' className='content_smallImage'/>
                        </div>
                    
                        <div className='content_data'>
                        <h2>Build Your NetWork </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, iusto id libero sit quae quaerat dignissimos ullam fugiat saepe, asperiores commodi ducimus. Esse nulla, neque perspiciatis cumque quaerat at consequuntur.</p>
                        </div>
                        </div>


                        <div className='content'>
                        <div className='content-image'>
                        <img src={image3}  alt='network' className='content_smallImage' />
                        </div>
                    
                        <div className='content_data'>
                        <h2>Start Making Business</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, iusto id libero sit quae quaerat dignissimos ullam fugiat saepe, asperiores commodi ducimus. Esse nulla, neque perspiciatis cumque quaerat at consequuntur.</p>
                        </div>
                        </div>


                

                    

            </div>
        </div>
       
    ) 
}
 

export default HomePage;