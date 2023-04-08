import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div className='card'>
          <div className='card-content'>
            <h6>
              <strong>EXPERIENCES</strong>
            </h6>
              <div className='row'>
                <div className="col s12 m4 l4 x14">
                  <p className='teal year_exp white-text'>
                    Jan <strong>2016</strong> - March <strong>2017</strong>
                  </p>
                </div> 
                <div className='col s12 m8 l8 xl8'>
                  <blockquote className='no-pad'>
                    <h6 className='no-pad mt-bottom'> 
                      <strong>WEB DEVELOPER</strong>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className='row'>
                <div className="col s12 m4 l4 x14">
                  <p className='teal year_exp white-text'>
                    Jan <strong>2016</strong> - March <strong>2017</strong>
                  </p>
                </div> 
                <div className='col s12 m8 l8 xl8'>
                  <blockquote className='no-pad'>
                    <h6 className='no-pad mt-bottom'> 
                      <strong>SOFTWARE ENGINEER</strong>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </blockquote>
                </div>
              </div>
          </div>
        </div>

      </div>
    );
  }
}
