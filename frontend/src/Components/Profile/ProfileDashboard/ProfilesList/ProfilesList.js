import React, { useState } from 'react';
import './ProfileDashboard.css';

function ProfilesList() {
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
      console.log(profileData); // do something with the data
    } catch (error) {
      setLoggedInData(true)
      console.error(error);
    }
  };


  return (
    <div>
      <button className='button' onClick={handleButtonClick}>Fetch Profile content</button>
      {loggedIn && "You must log in to view profile"}
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
    </div>
  );
}

export default ProfilesList;
