import React, {useState} from 'react';
import './toogle-button.scss';

let popshow = false

const ToggleButton = (props)=>{

    
    const [buttonState,setButtonState] = useState(props.default);
    // const toggleState=()=>{ buttonState===props.default ? setButtonState(props.change) checking=1 : setButtonState(props.default) checking=2
    //     console.log('pressed')

    const toggleState =()=>{
      
        if(popshow===false){

            setButtonState(props.change)
            popshow=true
            
       
        }else if(popshow===true){
            setButtonState(props.default)
            popshow=false
            
        }
    }  

    return(
        <button onClick={toggleState} className='buttonToggle'>{buttonState}</button>
      
    )

}

export default ToggleButton;