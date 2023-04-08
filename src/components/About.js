import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='card'>
         <div className='card-content'>
            <h6 className='mt-bottom'>
               <strong>ABOUT ME</strong>
            </h6>
            <p className="grey-text">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
         </div>
         <div className='card-action'>
            <h6>
               <strong>PERSONAL INFO</strong>
            </h6>
            <div className="row mt">
               <div className="col s12 m6 l6 x16">
                  <p><strong>Address:</strong> 123 Lorem ipsum </p>
                  <p><strong>Email:</strong>ganzymalgwi@gmail.com</p>
                  <p><strong>Phone:</strong>+234(0)815 254 600 </p>
               </div>
               <div className="s12 m6 l6 x16">
                  <p><strong>Main Language:</strong> English </p>
                  <p><strong>Second Language:</strong>Burah/Pabir</p>
                  <p><strong>Third Langauge:</strong>Hausa</p>
               </div>
            </div>
         </div>
      </div>
    );
  }
}
