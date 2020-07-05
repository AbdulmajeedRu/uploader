import React from 'react';
import logo from './logo.svg';
import Title from './Title';
import './App.css';

function About() {
    return (
      <div className="About">
        <Title />
        <header className="App-header">
        <h1>About us</h1>
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
  
  export default About;