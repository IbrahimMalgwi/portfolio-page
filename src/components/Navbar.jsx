import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

  class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                cv
              </Link>
              <Link to="/" data-target="side-nav" className="sidenav-trigger"> <i className="material-icons">menu</i> 
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <link to="/">
                    <i className="fas fa-home"></i>Home
                  </link>
                </li>
                <li>
                  <link to="/skilss">
                    <i className="fas fa-copy"></i>Skills
                  </link>
                </li>
                <li>
                  <link to="/experiences ">
                    <i className="fas fa-id-badge"></i>Experiences
                  </link>
                </li>
                <li>
                  <link to="/education">
                    <i className="fas fa-graduation-cap"></i>Education
                  </link>
                </li>
                <li>
                  <link to="/portfolios">
                    <i className="fas fa-address-card"></i>Portfolios
                  </link>
                </li>
              </ul>              
            </div>
          </div>  
        </nav>
        <ul className="sidenav" id='side-nav'>
                <li>
                  <link to="/">
                    <i className="fas fa-home"></i>Home
                  </link>
                </li>
                <li>
                  <link to="/skilss">
                    <i className="fas fa-copy"></i>Skills
                  </link>
                </li>
                <li>
                  <link to="/experiences ">
                    <i className="fas fa-id-badge"></i>Experiences
                  </link>
                </li>
                <li>
                  <link to="/education">
                    <i className="fas fa-graduation-cap"></i>Education
                  </link>
                </li>
                <li>
                  <link to="/portfolios">
                    <i className="fas fa-address-card"></i>Portfolios
                  </link>
                </li>
              </ul>
      </>
    );
  }
}
export default Navbar;

