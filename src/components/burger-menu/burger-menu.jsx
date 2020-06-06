import React  from'react';
// import React, {useState}  from'react';
import { slide as Menu } from 'react-burger-menu';
import './burger-menu.scss';
import Cookies from 'js-cookie';




// const BurgerMenu = ()=>{
//   const token =  Cookies.get('token')

//**********************************************************88 */
// const [menuItem,setMenuItem]=useState([])

// const items1 = 
// [{ref:"/personalprofile",name:'My_Profile', id:'personal'}, 
// {ref:"/profile",name:'Edit_Profile', id:'buildProfile'},
// {ref:"/",name:'Sign_Out', id:"signOut"}    ]

// const items2 = 
// [{ref:"/signin",name:'Sign_In', id:'signIn'}, 
// {ref:"/signup",name:"Register", id:"signup"},
// {ref:"/",name:"Home", id:"Home"}    ]

//  token!==undefined ? setMenuItem(items1) : setMenuItem(items2)
 
// //  const itemRender = ( )=>{
// //   menuItem.map(({ref,name,id})=>              
// //   (<a key={id} className="menu-item" href={ref}>{name}</a>))
// //  }

//  return(
//   <Menu right > 
//   {menuItem.map(({ref,name,id})=>              
//   (<a key={id} className="menu-item" href={ref}>{name}</a>))   }               
//   </Menu>
  
 
// )
//regular non state option *********************************************

//   if(token!==undefined){
//     return (
//       <Menu right >
//         <a id="personal" className="menu-item" href="/personalprofile/:id">My Profile</a>
//         <a id="buildProfile" className="menu-item" href="/profile">Edit Profile</a>
//         <a id="signOut" className="menu-item" href="/">Sign Out</a>
       
//       </Menu>
//     );

//   }else{
//     return (
//       <Menu right >
//         <a id="signIn" className="menu-item" href="/signin">Sign In</a>
//         <a id="signUp" className="menu-item" href="/signup">Register</a>
      
//         <a id="home" className="menu-item" href="/">Home</a>
       
//       </Menu>
//     );


//   }

    
// }

//option 2 - regular state ***************************************88

class BurgerMenu extends React.Component{
  constructor(){
    super()

    this.state={
        id1:'',
        ref1:'',
        name1:'',
          id2:'',
        ref2:'',
        name2:'',
        id3:'',
        ref3:'',
        name3:''

    }
  }
  
  componentDidMount(){
  const token =  Cookies.get('token')
  const C_id = Cookies.get('C_id')

  if (token===undefined){
  this.setState(
    {ref1:"/signin",name1:'Sign In', id1:'signIn', 
    ref2:"/signup",name2:"Register", id2:"signup",
    ref3:"/",name3:"Home", id3:"Home"} 
    
  )
}else  {
  this.setState(
    {ref1:`/personalprofile/${C_id}`,name1:'My Profile', id1:'personal', 
    ref2:"/profile",name2:'Edit Profile', id2:'buildProfile',
    ref3:"/",name3:'Sign Out', id3:"signOut"}


  )
}


  }

  render(){
    return(
      <div>
      
     
      <Menu right >
      

      <a id={this.state.id1} className="bm-item bm-item-list" href={this.state.ref1}>{this.state.name1}  </a>
      <a id={this.state.id2} className="bm-item bm-item-list" href={this.state.ref2}>{this.state.name2}</a>
    
      <a id={this.state.id3} className="bm-item bm-item-list" href={this.state.ref3}>{this.state.name3}</a>
      
    </Menu>
      </div>
    )
           
                
 }



// option 3

// const [menuItem1,setMenuItem1]=useState('')
// const [menuItem2,setMenuItem2]=useState('')
// const [menuItem3,setMenuItem3]=useState('')

// const items1 = {ref:"/personalprofile",name:'My_Profile', id:'personal'}
// const items2 = {ref:"/profile",name:'Edit_Profile', id:'buildProfile'}
// const items3 = {ref:"/",name:'Sign_Out', id:"signOut"} 


// const items4 = {ref:"/signin",name:'Sign_In', id:'signIn'}
// const items5 = {ref:"/signup",name:"Register", id:"signup"}
// const items6 =  {ref:"/",name:"Home", id:"Home"} 

// if (token!==undefined){
//   setMenuItem1(items1)
//   setMenuItem2(items2)
//   setMenuItem3(items3)
// }else{
//   setMenuItem1(items4)
//   setMenuItem2(items5)
//   setMenuItem3(items6)
// }

 
//  const itemRender = ({ref,name,id}  )=>{
  
//   return(              
//   <a key={id} className="menu-item" href={ref}>{name}</a>)
//  }

//  return(
//   <Menu right > 
//   {itemRender(menuItem1)}  
//   {itemRender(menuItem2)}
//   {itemRender(menuItem3)}       
               
//   </Menu>
  
 
// )
          }         
export default BurgerMenu;