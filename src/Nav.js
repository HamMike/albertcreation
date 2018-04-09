import React, { Component } from 'react';
import './App.css';
import { Navbar, NavItem, Icon } from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <Navbar className="nav" brand='hammer' right>
        <NavItem ><Link className="links" to="/Projects">Projects</Link></NavItem>
        <NavItem ><Link className="links" to="/About">About</Link></NavItem>
        <NavItem><a href="../images/Resume.pdf" target="_blank">Resume</a></NavItem>
      </Navbar>
    );
  }
}

export default Nav;
