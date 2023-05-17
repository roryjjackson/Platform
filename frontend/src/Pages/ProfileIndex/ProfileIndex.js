import { useEffect, useState } from 'react';
import './ProfileIndex.css';

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
    <div>
      <h2>Profiles</h2>
      {profilesData.length === 0 ? (
        <p>No profiles found.</p>
      ) : (
        <ul>
          {profilesData.map((profile) => (
            <li key={profile.id}>{profile.name}</li>
          ))}
        </ul>
      )}

      {/* Optionally, you can create a separate component for creating a profile and navigate to it */}
      {/* <button onClick={() => history.push('/create-profile')}>Create Profile</button> */}
    </div>
  );
}

export default ProfileIndex;
