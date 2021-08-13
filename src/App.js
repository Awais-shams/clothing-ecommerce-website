import './App.css';
import { Switch,Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import HatsMenu from './components/directory-menu/hats-menu/HatsMenu';
import React from 'react'




function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/hats' component={HatsMenu}/>
    </Switch>
    
   
    </div>
    

  );
}

export default App;
