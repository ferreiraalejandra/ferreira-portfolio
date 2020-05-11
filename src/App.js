import React from 'react';
import './App.css';
import Views from './components/views'
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Views />
      </Router>
    </div>
  );
}

export default App;
