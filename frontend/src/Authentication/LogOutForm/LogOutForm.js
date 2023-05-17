import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function LogOutForm() {
  const [loggedOut, setLoggedOut] = useState(false);
  const navigate = useNavigate();

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
        // if (response.clear_auth_token) {
        //   localStorage.removeItem('authToken');
        // }
        localStorage.removeItem('authToken')

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

  useEffect(() => {
    if (loggedOut) {
      const timer = setTimeout(() => {
        navigate('/');
        window.location.reload();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [loggedOut, navigate]);

  return (
    <div >
      <button className='button' onClick={handleSubmit} type="submit">
        Log out
      </button>
      { loggedOut && "successfully logged out"}
    </div>
    )

}

export default LogOutForm;
