import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function LogOutForm() {
  function handleSubmit() {
    const authToken = localStorage.getItem('authToken');

    fetch('http://localhost:3000/users/sign_out', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      }
      // body: JSON.stringify({ user: values})
    })
    .then(response => {
      if (response.ok) {
        // setSubmitting(false);
        // resetForm();
        return response.json();
      } else if (response.status === 422) {
        throw new Error('Email already exists');
      } else {
        throw new Error('Something went wrong')
      }
    })
    .then(data => console.log(data))
    .catch(error => console.error(error))
    // .finally(() => setSubmitting(false))
  };





  return (
    <div>
      <h2>LogOutForm</h2>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
    )

}

export default LogOutForm;
