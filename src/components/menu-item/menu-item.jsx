import React from 'react';
import './menu-item.scss';


const MenuItem = ({title,icon}) => (
    <div className="menu-item">
    <div className="item-title">{title}</div>
    <div  className="item-logo">
   
          {icon}
            
        </div>

    </div>
)

export default MenuItem;