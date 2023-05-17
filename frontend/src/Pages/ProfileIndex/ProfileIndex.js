import { useEffect, useState } from 'react';
import './ProfileIndex.css';
import ProfileDisplay from './ProfileDisplay/ProfileDisplay';

function ProfileIndex() {
  const [profilesData, setProfilesData] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const authToken = localStorage.getItem('authToken');

      try {
        const response = await fetch('http://localhost:3000/api/v1/profiles', {
          headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setProfilesData(data);
          console.log(data)
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className='profiles-index'>
      <div>
      <h2 className='subheader'>Profiles</h2>
        {profilesData.length === 0 ? (
          <p>No profiles found.</p>
        ) : (
          <div className='profile-grid-container'>
            {profilesData.map((profile) => (
              <ProfileDisplay profile={profile} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileIndex;
