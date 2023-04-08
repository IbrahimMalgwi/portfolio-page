import React, { Component } from 'react';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Experience from './Experiences';
import Education from './Educations';
import Portfolios from './Portfolios';

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
               <div className='col s12 m8 l3'>
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
