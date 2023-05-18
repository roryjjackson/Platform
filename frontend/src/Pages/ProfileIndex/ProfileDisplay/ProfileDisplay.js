import React from 'react';
import './ProfileDisplay.css';

function ProfileDisplay({ profile }) {

  return (
      <div className='profile-display-container'>
        <h3>{profile.name}</h3>
        <p>{profile.id}</p>
        <p>User id = {profile.user_id}</p>
        <p>{profile.what}</p>
      </div>
  );
}

export default ProfileDisplay;
