import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Nav.scss';

class Nav extends React.Component {
  render () {
    return (
      <div id="nav-bar">
        <div class="right">
          <h1> JANVI KALRA </h1>
          <h2> Computer Science & Philosophy </h2>
        </div>
        <div class="left">
          <div><NavLink activeClassName="active" to="/projects"><h3>Projects</h3></NavLink></div>
          <div><NavLink activeClassName="active" to="/aboutme"><h3>About</h3></NavLink></div>
        </div>
      </div>
    );
  }
}

export default Nav;
