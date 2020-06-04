import React from 'react';
import './menu-item.scss';





const MenuItem = ({title,icon,data}) =>{

   
    
  return(
        <div className="menu-item1"  onClick={data}>
        
        
        <div className="item-title">{title}</div>
        <div  className="item-logo">
       
              {icon}
                
            </div>
    
        </div>
    )

    
}


export default MenuItem;