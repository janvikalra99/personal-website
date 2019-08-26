import React from 'react';
import Project from './components/Project.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Project challenge="compressing and decompressing a file" skills="Trees, Maps, Priority Queues" results="War & Peace novel (587,000 words) 3.2MB "> </Project>
    </div>
  );
}

export default App;
