
import React from "react";
import {  BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Home } from './components/views/Home';
import { Login } from './components/views/Login';
import { Register } from './components/views/Register';
import { Navbar } from './components/general/Navbar';
import { UnPrivateRoute } from "./hocs/UnPrivateRoute";


const Page404 = ({ location }) => (
  <div>
    <h2>No match found for <code>{location.pathname}</code></h2>
  </div>
);

function App() {
  return (
    
    <Router>
      
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <UnPrivateRoute path ="/login" component={Login} />     
        <UnPrivateRoute path ="/register" component={Register} />      
        <Route component={Page404} />
      </Switch>
    </Router>

  );
}

export default App;

// 
