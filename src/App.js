import React from 'react';
import './App.css';
import Header from './components/Header';
import Fadein from './components/Fadein';
import Interpolation from './components/Interpolation';

function App() {
  return (
    <div style={styleTest} className="App">
      <Header />
      <Fadein />
      <Interpolation />
    </div>
  );
}

const styleTest = {
  color: "blue",
  height: "100vh"
}

export default App;
