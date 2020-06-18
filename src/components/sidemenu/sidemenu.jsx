import React from 'react';
import './sidemenu.scss';
import Cookies from 'js-cookie';
import signinImg from '../../img/menuicons/Icons for dror-51.png';
import registerImg from '../../img/menuicons/Icons for dror-52.png';
import signOut from '../../img/menuicons/Icons for dror-50.png';
import home from '../../img/menuicons/Icons for dror-53.png';
import myProfile from '../../img/menuicons/Icons for dror-55.png';
import editProfile from '../../img/menuicons/Icons for dror-50 new-55.png';
import userIcon from '../../img/hamburger/User icon.png'







class SideMenu extends React.Component{
    constructor(props){
      super(props)
  
      this.state={
          id1:'',
          ref1:'',
          name1:'',
          img1:'',
            id2:'',
          ref2:'',
          name2:'',
          img2:'',
          id3:'',
          ref3:'',
          name3:'',
          img3:'',
          userImage:'',
          userName:''

  
      }
    }
    
    componentDidMount(){
    const token =  Cookies.get('token')
    const C_id = Cookies.get('C_id')
    const C_name = Cookies.get('C_name')
      
  
    if (token===undefined){
    this.setState(
      {ref1:"/signin",name1:'Sign In', id1:'signIn', img1:signinImg,
      ref2:"/signup",name2:"Register", id2:"signup", img2:registerImg,
      ref3:"/",name3:"Home", id3:"Home", img3:home,
      userName:'Please Sign In'
    } 
      
    )
  }else  {
    
    this.setState(
      {ref1:`/personalprofile/${C_id}`,name1:'My Profile', id1:'personal', img1:myProfile,
      ref2:"/profile",name2:'Edit Profile', id2:'buildProfile',img2:editProfile,
      ref3:"/",name3:'Sign Out', id3:"signOut",img3:signOut,
      userName:C_name
    }
  
  
    )
        

  }
  
  
    }
  




    render(){
        const C_img = Cookies.get('C_img')
        let classNamesMenu = 'sideMenu'
        let classNamesDrop = 'backdrop'
        if(this.props.burgerOpen===true){
            classNamesMenu = 'sideMenu  sideMenu-open'
            classNamesDrop = 'backdrop backdrop-show'
        }

        

      return(
          <div>
          
          
          <div className= {classNamesDrop}></div>
          
          <nav className= {classNamesMenu}>
          
          
                         
          <div className='smallImgFigInner1'>
          <img src={C_img||userIcon} alt='user' className='smallImg1'  /> 
          </div>
          <div className='userName'>{this.state.userName}</div>

              <ul>
                  <li><img src={this.state.img1} alt='img' className='menuIcon' /> <a id={this.state.id1}  href={this.state.ref1}>{this.state.name1} </a></li>
                  <li><img src={this.state.img2} alt='img' className='menuIcon' /><a id={this.state.id2}  href={this.state.ref2}>{this.state.name2}</a></li>
                  <li><img src={this.state.img3} alt='img' className='menuIcon' /><a id={this.state.id3}  href={this.state.ref3}>{this.state.name3}</a></li>

              </ul>
          
          </nav>
          
          </div>
          
      
        
      )
                 
   }
}

   export default SideMenu;
  