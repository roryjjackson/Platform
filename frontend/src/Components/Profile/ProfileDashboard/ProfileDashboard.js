import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

function ProfileDashboard() {
  const [profileData, setProfileData] = useState(null);

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
      console.error(error);
    }
  };


  return (
    <div>
      <h2>Profile Dashboard</h2>
      <button onClick={handleButtonClick}>Fetch Profile content</button>
      {
        profileData && profileData.map(profile => {
          return<div>
                  <p>{profile.id}</p>
                  <p>{profile.name}</p>
                </div>
        })
      }
    </div>
  );
}

export default ProfileDashboard;
