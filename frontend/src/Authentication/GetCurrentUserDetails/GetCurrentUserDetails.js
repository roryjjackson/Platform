import React, { useState } from 'react';

function GetCurrentUserDetails() {
  const [userData, setUserData] = useState(null);
  const [loggedIn, setLoggedInData] = useState(null)
  const handleButtonClick = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:3000/member_details', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
        method: 'GET'
      });
      const data = await response.json();
      setUserData(data)
      console.log(data); // do something with the data
    } catch (error) {

      console.error(error);
      setLoggedInData(true)
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Fetch Member Details</button>
      {loggedIn && "You must log in to fetch user details"}
      {userData && (
        <div>
          <p>Id: {userData.id}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
}

export default GetCurrentUserDetails;
