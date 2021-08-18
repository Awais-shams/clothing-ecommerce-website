import './App.css';
import { Switch,Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import React from 'react'




function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    
    </Switch>
    
   
    </div>
    

  );
}

export default App;
