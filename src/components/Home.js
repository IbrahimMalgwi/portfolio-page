import React, { Component } from 'react';
import About from './About';
import Education from './Educations';
import Experience from './Experience';
import Navbar from './Navbar';
import Portfolios from './Portfolios';
import Skills from './Skills';

export default class Home extends Component {
  render() {
    return (
      <section>
         <Navbar />
         <div className='container'>
            <div className='row'>
               <div className='col s12 m4 l3'>
                  <Profile />
               </div>
               <div className='col s12 m8 l9'>
                  <About />
                  <Skills />
                  <Experience />
                  <Education />
                  <Portfolios />
               </div>
            </div>
         </div>
      </section>
    )
  }
}
