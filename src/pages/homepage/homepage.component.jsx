import React from 'react';
import './homepage.scss';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom'
import image1 from '../../img/updatediconsforhomapage/4-30.png';
import image2 from '../../img/updatediconsforhomapage/4-31.png';
import image3 from '../../img/updatediconsforhomapage/4-32.png';
import Toolbar from '../../components/toolbar/toolbar';


const logOut = () =>{
   Cookies.remove('token')
   Cookies.remove('C_img')
}



const HomePage = () =>{
    logOut()

    const history = useHistory()

    const register =()=>{
        
        history.push('/signup')
    }

    return(
        <div>
        
        
        
        <Toolbar/>
        
            <div className="homepage">
                    <div className='mainImage' >
                    
                        <div className='mainHeader'>
                        <h1>VIRTUAL NETWORKING </h1>   
                        <h2>networking in a digital world</h2>
                        <button onClick={register}>Register Now</button>
                        </div>
                        
                        
                       
                    </div>

                        <div className='content'>
                        <div  className='content-image'>
                        <img src={image1}  alt='network' className='content_smallImage' />
                        </div>
                    
                        <div className='content_data'>
                        <h2>Create Your Digital Business Card</h2>
                        <p>Its time to start using the power of the internet and social media to make the world know who you are and what you do. 
                            by sending them your new digital business card. its easy and simple to use, just follow the instructions after you register, and in a few minutes you will have a digital business card. it's simple, full of information, and free!
                        </p>
                        </div>
                        </div>


                        <div className='content'>
                        <div className='content-image'>
                        <img src={image2}  alt='network' className='content_smallImage'/>
                        </div>
                    
                        <div className='content_data'>
                        <h2>Build Your NetWork </h2>
                        <p>Business is a dynamic field. you have to grow and adjust. but one thing is constant, you want a network of people and businesses that help you get more clients.<br/>
                        join our businesses network that will receive your digital card as soon as it is done. and you can start helping each other with business referrals, and grow your business easily and quickly.
                        </p>
                        </div>
                        </div>


                        <div className='content'>
                        <div className='content-image'>
                        <img src={image3}  alt='network' className='content_smallImage' />
                        </div>
                    
                        <div className='content_data'>
                        <h2>Start Making Business</h2>
                        <p>If you want to build and grow your business, this is the time to build your digital card and start networking.
                        use the power of the web for your benefit. the world is at the tip fo your fingers. register and fill up all the details, and the network will build it self for you. use it when, how and if you want. <br/> <br/>  GOOD LUCK!!!
                        </p>
                        <button onClick={register}>Register Now</button>
                        </div>
                        </div>


                

                    

            </div>
        </div>
       
    ) 
}
 

export default HomePage;