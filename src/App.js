import React, { Component } from 'react';
import './components/Projects';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';  

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [ 
    {
      title: 'Business Website',
      category: 'Web Design'
    },
    {
      title: 'Social App',
      category: 'Mobile Development'
    },
    {
      title: 'Ecomerence Shopping Cart',
      category: 'Web Development'
    }]})
  }
  render() {
    return (
      <div className="App">
       <AddProject />
       <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
