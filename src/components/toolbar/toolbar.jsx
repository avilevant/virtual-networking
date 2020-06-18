import React from 'react';
import './toolbar.scss';
import ToggleButton from '../../components/toogle-button/toogle-button';
import menuclosed from '../../img/hamburger/x_and_menu_icons-56.png';
import menuopen from '../../img/hamburger/x_and_menu_icons-57.png';
import SideMenu from '../sidemenu/sidemenu';
import logo from '../../img/menuicons/logo_dark-66.png';
import Cookies from 'js-cookie';








class Toolbar extends React.Component{

    state={
        menuWindowOpen:true,
        id1:'',
        ref1:'',
        name1:'',
        
          id2:'',
        ref2:'',
        name2:'',
        
        id3:'',
        ref3:'',
        name3:'',
        
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
    
        
     

    menuClosed =()=>{
       this.toggleButtonChange()
       console.log(this.state.menuWindowOpen)
       return  <img src={menuopen} alt='menuClosed'  className='menuBar' />
            }


    menuOpen =()=>{
        this.toggleButtonChange()
        console.log(this.state.menuWindowOpen)
        return  <img src={menuclosed} alt='menuClosed'  className='menuBar' />
                }        
       
    
    toggleButtonChange =()=>{
       this.setState((prevState)=>{
           return  {menuWindowOpen:!prevState.menuWindowOpen}
           
    })  } 


    render(){

        let logoDisplay 

        if(this.props.name){
            logoDisplay= this.props.name
        }else{
            logoDisplay= <img src={logo} alt='logo' className='toolbar-businessName'/>
        }

        return (
            <div>
            
            
            <SideMenu burgerOpen={this.state.menuWindowOpen}/>
            <header className='toolbar'>
                <nav className='toolbar-nav'>
                    
                   
                    <div className='toolbar-businessName'>{logoDisplay}</div>
                    
                    <div className='margin'></div>
                    <div className='toolbar-nav-items'>
                    <ul>
                    <li> <a id={this.state.id1}  href={this.state.ref1}>{this.state.name1} </a></li>
                    <li><a id={this.state.id2}  href={this.state.ref2}>{this.state.name2}</a></li>
                    <li><a id={this.state.id3}  href={this.state.ref3}>{this.state.name3}</a></li>
  
                </ul>
                        
                    </div>
                    <div className='toogleButton'>
                    
                    <ToggleButton default={this.menuClosed} change={this.menuOpen} />
                    </div>
           
                </nav>
                
            </header>
            </div>
           
           )


    }


} 

    



   






export default Toolbar;

