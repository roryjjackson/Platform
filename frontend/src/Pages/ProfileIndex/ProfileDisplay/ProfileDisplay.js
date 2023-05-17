import React from 'react';
import './ProfileDisplay.css';

function ProfileDisplay({ profile }) {
  return (
    <div className='profile-display-container'>
      <h3>{profile.name}</h3>
      <p>{profile.id}</p>
      <p>{profile.what}</p>
      {/* Render other profile information */}
    </div>
  );
}

export default ProfileDisplay;
