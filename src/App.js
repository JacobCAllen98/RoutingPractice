import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import HomeComponent from './components/HomeComponent'
import WordComponent from './components/BaseComponent'
import NumberComponent from './components/ColorfulComponent'

function App() {
  return (
    <div className="App">
      <Router>
        <HomeComponent path="/home"/>
        <WordComponent path="/:id"/>
        <NumberComponent path="/:id/:color/:bgcolor"/>
      </Router>
    </div>
  );
}

export default App;
