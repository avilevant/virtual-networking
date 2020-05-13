import React from 'react';
import './menu-item.scss';


// const cardPressed=(title)=>{
//     console.log(title)
//     switch (title) {
//         case "CALL" : //do1
//         break;
//         case "SMS": //do2
//     }
// }


const MenuItem = ({title,icon,callback}) => (
    <div className="menu-item"  onClick={callback}>
    <div className="item-title">{title}</div>
    <div  className="item-logo">
   
          {icon}
            
        </div>

    </div>
)

export default MenuItem;