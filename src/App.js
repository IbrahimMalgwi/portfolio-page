import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Educations from "./components/Educations";
import Experiences from "./components/Experience";
import Home from "./components/Home";
import Portfolios from "./components/Portfolios";
import Skills from "./components/Skills";



function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Routes>
          <Route path="/skills" component={Skills} />
          <Route path="/Experiences" component={Experiences} />
          <Route path="/Educations" component={Educations} />
          <Route path="/Portfolios" component={Portfolios} />
        </Routes>      
      </>
    </Router>
  );
}

export default App;
