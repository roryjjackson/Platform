import React from 'react';

function DestroyProfile() {
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
      <h2>Delete Profile</h2>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
    )

}

export default DestroyProfile;
