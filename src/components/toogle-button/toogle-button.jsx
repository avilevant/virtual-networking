import React, {useState} from 'react';
import './toogle-button.scss';

let popshow = false

const ToggleButton = (props)=>{

    
    const [buttonState,setButtonState] = useState(props.basic);

    const toggleState =()=>{
      
        if(popshow===false){

            setButtonState(props.change)
            popshow=true
            
       
        }else if(popshow===true){
            setButtonState(props.basic)
            popshow=false
            
        }

    }  

    return(
        <button onClick={()=>{toggleState();props.stateChange()}} className='buttonToggle'>{buttonState}</button>
      
    )

}

export default ToggleButton;