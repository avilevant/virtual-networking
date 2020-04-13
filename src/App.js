import React from 'react';
import { Switch,Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Testrouting from './pages/signup/signin'


function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component ={HomePage}/>
    <Route path='/signup' component ={Testrouting}/>
    </Switch>
    </div>
  );
}

export default App;
