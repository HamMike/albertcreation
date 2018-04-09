import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Nav from './Nav';
import Projects from './Projects';
import About from './About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Main} />
          <Route path='/Projects' component={Projects}/>
          <Route path='/About' component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
