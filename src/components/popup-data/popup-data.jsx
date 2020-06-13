import React from 'react';
import './popup-data.scss';


const DataPop = (props) =>{
    let classNames = 'dataProp'
    if(props.show===true){
        console.log('show')
        classNames = 'dataProp dataProp-open'
    }
    return(
        <div className={classNames}>
        <div className='info' >
        <h2>Location: {props.location}</h2>
        <hr/>
        <h2>Phone: {props.phone}</h2>
        <hr/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil voluptatem molestiae, fugit, doloribus aspernatur provident voluptatum explicabo numquam cumque ex vitae ipsum! Tempore exercitationem omnis officia nam placeat voluptas?</p>
        </div>
    )

}


export default DataPop;