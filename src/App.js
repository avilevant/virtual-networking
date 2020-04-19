import React from 'react';
import { Switch,Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import SignUpPage from './pages/signup-page/signup-page'


function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component ={HomePage}/>
    <Route path='/signup' component ={SignUpPage}/>
    </Switch>
    </div>
  );
}



export default App;
