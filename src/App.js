import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Fadein from './components/Fadein';
import Interpolation from './components/Interpolation';
import Home from './components/Home';

class App extends Component {
  state = { 
    displayHomePage: true
   }
  render() {
    if(this.state.displayHomePage) {
      return (<Home />);
    }else{ 
      return ( 
        <div style={styleTest} className="App">
          <Header />
          <Fadein />
          <Interpolation />
        </div>
      );
    }
  }
}

const styleTest = {
  color: "blue",
  height: "100vh"
}

export default App;
