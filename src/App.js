import React from 'react';
import logo from './logo.svg';
import Title from './Title';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          About Us Hello Salma
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
    </div>
  );
}

export default App;
