
import React from 'react'

import { BrowserRouter, Route, Link } from 'react-router-dom'
import projects from './components/projects/projects.js';
import about from './components/about/about.js';
import doodles from './components/doodles/doodles.js';
import skills from './components/skills/skills.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header>
          <div className="nav-container">
            <div className="logo">
              <Link to="/" className="item">Daniel Ellis</Link>
            </div>
            <div className="nav-sub">
              <Link to="/" className="nav-div-wrap">
                <div className="link-cover">
                  <Link to="/" className="item">Projects</Link>
                </div>
              </Link>
              <Link to="/skills" className="nav-div-wrap">
              <div className="link-cover">
                <Link to="/skills" className="item">Skills</Link>
              </div>
              </Link>
              <Link to="/doodles" className="nav-div-wrap">
              <div className="link-cover">
                <Link to="/doodles" className="item">Doodles</Link>
              </div>
              </Link>
              <Link to="/about" className="nav-div-wrap">
              <div className="link-cover">
                <Link to="/about" className="item">About</Link>
              </div>
              </Link>
            </div>
          </div>
        </header>
        <Route exact path="/" component={projects} />
        <Route path="/skills" component={skills} />
        <Route path="/doodles" component={doodles} />
        <Route path="/about" component={about} />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
