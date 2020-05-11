import React from 'react';
import './App.css';
import Views from './components/views'
import NavBar from './components/navbar/NavBar';
import { Provider } from 'react-redux'
import store from './store'
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <Views />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
