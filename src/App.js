import React from 'react';
import {Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
//react-router-dom facts:
//switch from react-router-dom only lets one route render at a time
//
//remember that your <app/> component needs to be wrapped in the <browserRouter/> component inside your index.js


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
