import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import ProjectLayout from './components/ProjectLayout.js'
import NotFound from './components/NotFound.js'
import './App.css';

function App() {
  return (
    <Router>
      <div id="app-content">
        <Switch>
          <Route path="/projectlayout" component={ProjectLayout}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
