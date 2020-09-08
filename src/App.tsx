import React from 'react';
import Toy from './components/Toy';
import Placekitten from './components/Placekitten';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toy />
      <Placekitten />
      <Toy />
      <Placekitten />
      <Toy />
      <Placekitten />
      <Toy />
      <Placekitten />
      <Toy />
    </div>
  );
}

export default App;
