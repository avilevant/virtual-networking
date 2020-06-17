import React from 'react';
import './button.scss';



const Button = ({children,props}) =>(
    <button className={'button'}>{children}</button>
);

export default Button;

