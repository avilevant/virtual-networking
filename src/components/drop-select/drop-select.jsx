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

            
              
            
              const tempfunction=(x) =>{
                const  { importData } = props;

                const BizzNetMembers = x.map(x=>x.label)
                importData(BizzNetMembers)
              }

              // const BizzNetMember = selected.map(x=>x.label)
              // console.log(BizzNetMember)
              // props.importData(BizzNetMember);
            
          
            
            
 
            return (
              <div>
                <h1>build your network!</h1>
              
                <MultiSelect
                  options={items}
                  value={selected}
                  onChange={(x) => {tempfunction(x); setSelected(x)}}
                  labelledBy={"Select"}
                  
                  
                />
                

              </div>
            );
          
};





export default DropSelect;

