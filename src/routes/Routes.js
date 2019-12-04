import React from 'react';
import Home from '../components/Home';
import Login from '../screen/login/Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Routes = () => {
    return(
      <>
       <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/Home" exact>
            <Home />
          </Route>
        </Switch>
        </Router>
      </>
    )
 }

 export default Routes;