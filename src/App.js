
import React from "react";
import {  BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './components/views/Home';
import { LoginRegister } from './components/views/LoginRegister';
import { Navbar } from './components/general/Navbar';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path ="/loginregister" component={LoginRegister} />
    </Router>

  );
}

export default App;
