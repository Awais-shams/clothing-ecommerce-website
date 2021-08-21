import './App.css';
import { Switch,Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signIn-signUp/SignInSignUp';
import React, { Component } from 'react'
import {auth} from './firebase/firebase.util'




export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentUser: null
    }
  }
  unsubcribeFromAuth=null;
  componentDidMount(){
    this.unsubcribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
  render() {
    return (
      <div>
     <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route path='/signIn' component={SignInSignUp}/>
      
      </Switch>
      
      
      
     
      </div>
    );
  }
}

export default App
