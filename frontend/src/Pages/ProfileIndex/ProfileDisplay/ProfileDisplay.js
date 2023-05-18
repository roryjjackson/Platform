import React from 'react';
import './ProfileDisplay.css';
// import { Link } from 'react-router-dom';

function ProfileDisplay({ profile }) {
  // const profileLink = `/profiles/${profile.id}`;

  return (
    // <Link to={profileLink} profile_id={profile.id}>
      <div className='profile-display-container'>
        <h3>{profile.name}</h3>
        <p>{profile.id}</p>
        <p>{profile.what}</p>
        {/* Render other profile information */}
      </div>
    // </Link>
  );
}

export default ProfileDisplay;
