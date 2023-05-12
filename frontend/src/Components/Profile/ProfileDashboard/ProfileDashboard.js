import React, { useState } from 'react';
import './ProfileDashboard.css';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <h2 id='dashboard-title'>Dashboard</h2>
        <p>Take a look at your dashboard and all the features that are included</p>
        <div className='icon-container'>
          <div className='icon'>Avatar</div>
          <div className='icon'>Rating</div>
        </div>
      </div>
      <div className='dashboard-container middle'>
      <div className="card-trip">
        <div className='card-trip-content'>
          <p>This is where it happens</p>
          <h2>Discover</h2>
        </div>
        <img src="https://kitt.lewagon.com/placeholder/users/krokrob" class="card-trip-user avatar-bordered" />
      </div>


        {/* <div className='dashboard-main-card'>
          <div className='dashboard-main-card-content'>
            <p>Explore</p>
            <h3>Time to discover alternate paths</h3>
            <button>Discover</button>
          </div>
          <div className='profile-container'>
            {  profileData && profileData.map(profile => {
                return<div className='profile-card'>
                        <p>ID: {profile.id}</p>
                        <p>Name: {profile.name}</p>
                        <p>Why: {profile.why}</p>
                        <p>What: {profile.what}</p>
                        <p>How: {profile.how}</p>
                        <p>Advice: {profile.advice}</p>
                      </div>
              })
            }
          </div>
        </div> */}
        <div className='card-category-container'>
          <div className="card-category" style={{backgroundImage: "linear-gradient(to right bottom, #00b4db, #0083b0)"}}>
            Following
          </div>
          <div className="card-category" style={{backgroundImage: "linear-gradient(to right bottom, #00b4db, #0083b0)"}}>
            Messaging
          </div>
          <div className="card-category" style={{backgroundImage: "linear-gradient(to right bottom, #00b4db, #0083b0)"}}>
            Trending
          </div>
          <div className="card-category" style={{backgroundImage: "linear-gradient(to right bottom, #00b4db, #0083b0)"}}>
            Settings
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
