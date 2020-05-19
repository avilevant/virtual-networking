import React from 'react';
import './menu-item.scss';





const MenuItem = ({title,icon,data}) => (
    <div className="menu-item"  onClick={data}>
    <div className="item-title">{title}</div>
    <div  className="item-logo">
   
          {icon}
            
        </div>

    </div>
)

export default MenuItem;