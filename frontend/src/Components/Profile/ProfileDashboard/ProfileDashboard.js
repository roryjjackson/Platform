import React, { useState } from 'react';
import './ProfileDashboard.css';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faStar, faGears, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function ProfileDashboard() {
  const [profileData, setProfileData] = useState(null);
  const [loggedIn, setLoggedInData] = useState(null)

  const handleButtonClick = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:3000/api/v1/profiles', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
        method: 'GET'
      });
      const data = await response.json();
      setProfileData(data)
      console.log(profileData);
    } catch (error) {
      setLoggedInData(true)
      console.error(error);
    }
  };


  return (
    <div className='dashboard'>
      <div className='dashboard-container left'>
        <div>
          <h2 id='dashboard-title'>Dashboard</h2>
          <p>Take a look at your dashboard and all the features that are included</p>
          < Link to='/users/dashboard/new' >
            <button className='button create-profile'>Create Profile</button>
          </Link>
        </div>
        <div className='icon-container'>
          <div className='icon'>Img</div>
          <div className='icon'><FontAwesomeIcon icon={faStar} /></div>
        </div>
      </div>
      <div className='dashboard-container middle'>
        <Link to='/users/dashboard/index'>
          <div className="card">
            <div className='card-content'>
              <p>This is where it happens</p>
              <h2>Discover</h2>
              <div className='fontawesome magnifying-glass'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>

            </div>
            <img src="https://kitt.lewagon.com/placeholder/users/krokrob" class="card-user avatar-bordered" />
          </div>
        </Link>
          <div className='card-category-container'>
            <div className="card-category">
              Following
            </div>
            <div className="card-category">
              Messaging
            </div>
            <div className="card-category">
              <div><FontAwesomeIcon icon={faArrowTrendUp} /></div>
            </div>
            <div className="card-category">
              <div><FontAwesomeIcon icon={faGears} /></div>
            </div>
          </div>


        {/* <button className='button' onClick={handleButtonClick}>Fetch Profile content</button> */}
      </div>
      <div className='dashboard-container right'>
        <a className="social-media-icon" href="https://github.com/roryjjackson" target="_blank" rel="noreferrer">
          <li id="github"><FontAwesomeIcon icon={faGithub} /></li>
        </a>
        <a className="social-media-icon" href="https://www.facebook.com/jacksonrory3/" target="_blank" rel="noreferrer">
          <li id="facebook"><FontAwesomeIcon icon={faFacebook} /></li>
        </a>
        <a className="social-media-icon" href="https://www.instagram.com/jackson_rory_/" target="_blank" rel="noreferrer">
          <li id="instagram"><FontAwesomeIcon icon={faInstagram} /></li>
        </a>
      </div>
      {loggedIn && "You must log in to view profile"}
    </div>
  );
}

export default ProfileDashboard;
