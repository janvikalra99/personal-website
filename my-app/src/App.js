import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Projects from './components/Projects.js'
import NotFound from './components/NotFound.js'
import AboutMe from './components/AboutMe.js'
import Nav from './components/Nav.js'
import Bacon from './components/projects/Bacon.js'
import Comfort from './components/projects/Comfort.js'
import Huffman from './components/projects/Huffman.js'
import ITC from './components/projects/ITC.js'
import Scooter from './components/projects/Scooter.js'
import Speech from './components/projects/Speech.js'
import Theraband from './components/projects/Theraband.js'

import './App.scss';

function App() {
  return (
    <Router>
      <div id="app-content">
        <Nav />
        <div class="main-content">
          <Switch>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/aboutme" component={AboutMe}></Route>
            <Route path="/bacon-number" component={Bacon}></Route>
            <Route path="/controlling-comfort" component={Comfort}></Route>
            <Route path="/huffman-encoding" component={Huffman}></Route>
            <Route path="/optimal-team-formation" component={ITC}></Route>
            <Route path="/scooter" component={Scooter}></Route>
            <Route path="/speech-tagger" component={Speech}></Route>
            <Route path="/track-physio-exercises" component={Theraband}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
