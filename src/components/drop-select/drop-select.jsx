import React,{ useState } from 'react';
import MultiSelect from "react-multi-select-component";
import {OccupationList} from '../occupationlist/occupationlist';
import './drop-select.scss';



const DropSelect = (props)=>{


     const items  = OccupationList


            const [selected, setSelected] = useState([]);

            
              
            
              const transferData=(x) =>{
                const  { importData } = props;

                const BizzNetMembers = x.map(x=>x.label)
                importData(BizzNetMembers)
              }

          
            
          
            
            
 
            return (
              <div>
               
              
                <MultiSelect
                  options={items}
                  value={selected}
                  onChange={(x) => {transferData(x); setSelected(x)}}
                  labelledBy={"Select"}
                  className='multiSelect'
                  
                  
                />
                

              </div>
            );
          
};





export default DropSelect;

