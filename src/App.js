
import React from "react";
import {  BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './components/views/Home';
import { Login } from './components/views/Login';
import { Register } from './components/views/Register';
import { Navbar } from './components/general/Navbar';
import { UnPrivateRoute } from "./hocs/UnPrivateRoute";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <UnPrivateRoute path ="/login" component={Login} />     
      <UnPrivateRoute path ="/register" component={Register} />      
    </Router>

  );
}

export default App;

// 
