import React,{ useState } from 'react';
// import React from 'react';
import MultiSelect from "react-multi-select-component";





const DropSelect = (props)=>{
     const items  = [
    
                {
                    label:"health",
                    value:1
                },
                {
                    label:"marketing",
                    value:2
                },
                {
                    label:"design",
                    value:3
                },
            ]


            const [selected, setSelected] = useState([]);

            
              
            
              // const tempfunction=() =>{
              //   const BizzNetMember = selected.map(x=>x.label)
              //   props.importData(BizzNetMember)
              // }

              const BizzNetMember = selected.map(x=>x.label)
              console.log(BizzNetMember)
            
          
            
            
 
            return (
              <div>
                <h1>build your network!</h1>
              
                <MultiSelect
                  options={items}
                  value={selected}
                  onChange={setSelected}
                  labelledBy={"Select"}
                  // filterOptions={tempfunction}
                  
                  
                />
                

              </div>
            );
          
};





export default DropSelect;

