import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCard from './components/MyCard';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>BBC NEWS</h1>
      <MyCard />
    </div>
  );
}

export default App;
