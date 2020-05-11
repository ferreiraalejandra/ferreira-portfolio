import React from 'react';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import './views.css'
import {
  Switch,
  Route,
} from "react-router-dom";

const Views = () => {
  return (
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  )
}

export default Views