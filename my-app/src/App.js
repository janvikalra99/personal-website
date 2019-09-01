import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import ProjectLayout from './components/ProjectLayout.js'
import Projects from './components/Projects.js'
import NotFound from './components/NotFound.js'
import AboutMe from './components/AboutMe.js'
import Nav from './components/Nav.js'
import './App.scss';

function App() {
  return (
    <Router>
      <div id="app-content">
        <Nav />
        <div class="main-content">
          <Switch>
            <Route path="/projectlayout" component={ProjectLayout}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/aboutme" component={AboutMe}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
