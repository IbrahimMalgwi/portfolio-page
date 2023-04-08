import React, { Component } from 'react';
import ImgProfile from "./images/face.jpg";
import {HashLink as Link} from "react-router-hash-link";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className='card'>
          <div className='card-image'>
            <img className='activator' src={ImgProfile} alt='face' />
            <link className='btn-floating halfway-fab waves-effect wave-light red'>
              <i className='material-icons activator'>more_vert</i> 
            </link>
          </div>
          <div className='card-content'>
            <span className='card-title activator grey-text text-darken-4'>
              Ibrahim Gana Malgwi
            </span>
            <p>Software Engineer</p>
          </div>
          <div className='card-reveal'>
            <span className='card-title grey-text text-darken-4'>
              Follow Me
              <i className='material-icons right'>close</i>
            </span>
            <p className='flex-container'>
              <i className='fab fa-facebook-f grey-text text-darken-4 social-style'></i>
              <i className='fab fa-twitter grey-text text-darken-4 social-style'></i>
              <i className='fab fa-google-plus-g grey-text text-darken-4 social-style'></i>
              <i className='fab fa-instagram grey-text text-darken-4 social-style'></i>  
              <i className='fab fa-pinterest grey-text text-darken-4 social-style'></i>
                          
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
