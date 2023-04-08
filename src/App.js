import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Educations from "./components/Educations";
import Portfolios from "./components/Portfolios";



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
