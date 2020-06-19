import React from 'react';
import './button.scss';



const Button = ({children,props}) =>(
    <button   className='buttonComp' >{children}</button>
);

export default Button;

