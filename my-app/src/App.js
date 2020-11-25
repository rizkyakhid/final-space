// import logo from './logo.svg';
import './App.css'
import React from 'react'
import Home from './views/Home'
import CharDetails from './views/CharDetails'
import FavChar from './views/FavChar'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/characters/:id'>
            <CharDetails></CharDetails>
          </Route>
          <Route path='/favorites'>
            <FavChar></FavChar>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
