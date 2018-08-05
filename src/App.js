import React, { Component } from 'react';
import './App.css';
import './components/projects';
import Projects from './components/projects';

class App extends Component {
  render() {
    return (
      <div className="App">
       My app
       <Projects />
      </div>
    );
  }
}

export default App;
