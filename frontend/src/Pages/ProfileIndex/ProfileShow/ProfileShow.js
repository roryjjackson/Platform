import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
          <p>No profile found.</p>
        ) : (
          <div>
            <h2>{profileData.name}</h2>
            <p>{profileData.id}</p>
            <p>{profileData.what}</p>
            {/* Render other profile information */}
          </div>
        )}
    </div>
  );
}

export default ProfileShow;
