import './App.css';
import React from 'react';
import { Parent } from './Parent';

function App() {
  const h1 = <h1>Build a Stateful Component Class</h1>
  return (
    <div className="App">
      <header className="App-header">
       {h1}
       <Parent />
      </header>
    </div>
  );
}

export default App;
