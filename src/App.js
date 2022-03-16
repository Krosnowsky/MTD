import React, {Component} from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import Navi from './layouts/Navi'
import Pages from './layouts/Pages'
import Footer from './layouts/Footer'

class App extends Component {
 
  render() { 
    return (
    <Router>
    <div className="app">
      
        
         <nav><Navi/></nav> 

      
      <div className="content">
        <Pages/>
      </div>
      <div className="footer"><Footer/></div>
      </div>
      </Router>);
  }
}
 
export default App;
 
