// import logo from './logo.svg';
import './App.css'
import React from 'react'
import Home from './views/Home'
import CharDetails from './views/CharDetails'
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/characters/:id'>
          <CharDetails></CharDetails>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
