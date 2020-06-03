import React from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import SignUpPage from './pages/signup-page/signup-page';
import SignInPage from './pages/signin-page/signin-page';
import Profile from './pages/profile/profile';
import PersonalProfile from './pages/personal-profile/personal-profile';
import BurgerMenu from './components/burger-menu/burger-menu';
import UploadToFirebase from './components/photo-upload/photo-upload'



function App() {
  return (
    <div>
    <BurgerMenu/>
    <Switch>
    <Route exact path='/' component ={HomePage}/>
    <Route exact path='/personalprofile/:id' component ={PersonalProfile}/>
    <Route path='/signup' component ={SignUpPage}/>
    <Route path='/profile' component ={Profile}/>
    <Route path='/signin' component ={SignInPage}/>
    <Route path='/uploadImg' component ={UploadToFirebase}/>
    </Switch>
    </div>
  );
}



export default App;
