import React from 'react';
import {Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

//for when users log in
import { auth } from './firebase/firebase.utils';

//react-router-dom facts:
//switch from react-router-dom only lets one route render at a time
//
//remember that your <app/> component needs to be wrapped in the <browserRouter/> component inside your index.js


class App extends React.Component {
 constructor(){
   super();

   this.state = {
     currentUser : null
   };
 }

 //the ubsubscribe from auth here and in component will unmount is not as signin/signout thing
 //it is purely to stop the component from constantly listening for the oauth token and causing a memory leak
 //remember to look into this more to better understand it.
 unsubscribeFromAuth = null;

 componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
     this.setState({ currentUser: user });
   })
 }

 componentWillUnmount(){
   this.unsubscribeFromAuth();
 }
  
render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}

export default App;
