import React from 'react';
import './App.css';
import Header from './components/Header';
import Fadein from './components/Fadein';

function App() {
  return (
    <div style={styleTest} className="App">
      <Header />
      <Fadein />
    </div>
  );
}

const styleTest = {
  color: "blue",
  height: "100vh"
}

export default App;
