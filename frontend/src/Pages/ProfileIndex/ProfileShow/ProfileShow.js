import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProfileShow.css';

function ProfileShow() {
  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const authToken = localStorage.getItem('authToken');

      try {
        const response = await fetch(`http://localhost:3000/api/v1/profiles/${id}`, {
          headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
          console.log(data);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  });

  return (
    <div>
      {/* Render the profile details */}
        {profileData === null ? (
          // <p>No profile found.</p>
          <div className='profile-show-container'>
            {/* <p>Sorry, we couldnt find that profile :(</p> */}
          </div>
          ) : (
          <div className='profile-show-container'>
            <h2 className='subheader'>{profileData.name}</h2>
            <p>{profileData.job_title}</p>
            <p>{profileData.hours}</p>
            <p>{profileData.what}</p>
            <p>{profileData.why}</p>
            <p>{profileData.how}</p>
            <p>{profileData.advice}</p>
            <p>{profileData.job_satisfaction}</p>
          </div>
        )}
    </div>
  );
}

export default ProfileShow;
