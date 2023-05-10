import React, { useState } from 'react';

function LogOutForm() {
  const [loggedOut, setLoggedOut] = useState(false);

  function handleSubmit() {
    const authToken = localStorage.getItem('authToken');

    fetch('http://localhost:3000/users/sign_out', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      }
    })
    .then(response => {
      if (response.ok) {
        setLoggedOut(true)
        return response.json();
      } else if (response.status === 422) {
        throw new Error('Email already exists');
      } else {
        throw new Error('Something went wrong')
      }
    })
    .then(data => console.log(data))
    .catch(error => console.error(error))
  };

  return (
    <div>
      <h2>LogOutForm</h2>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
      { loggedOut && "successfully logged out"}
    </div>
    )

}

export default LogOutForm;
