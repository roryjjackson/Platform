import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ProfileForm() {
  const initialValues = {
    name: ''
  }

  const validationSchema =  Yup.object().shape({
    name: Yup.string().required('Name is required'),
  })

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [profileValid, setProfileValid] = useState(false)

  function handleSubmit(values, { setSubmitting, resetForm }) {
    const authToken = localStorage.getItem('authToken');
    const url = 'http://localhost:3000/api/v1/profiles';

    fetch(`${url}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching Profile data');
        }
      })
      .then(data => {
        console.log(data)
        // If a Profile already exists for the user, show an error message and do not submit the form
        if (data.length > 1) {
          setProfileValid(true)
          console.log('an error has occured')
          throw new Error('A Profile already exists for this user');
        } else {
          // Otherwise, submit the form data
          return fetch(url, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({ profile: values})
          });
        }
      })
      .then(response => {
        if (response.ok) {
          setSubmissionSuccess(true);
          setSubmitting(false);
          resetForm();
        } else {
          setProfileValid(false)
          throw new Error('Error submitting form data');
        }
      })
      .catch(error => {
        console.error(error);
        setSubmitting(false);
      });
  };





  return (
    <div>
      <h2>Create Profile</h2>
      < Formik
        // className='user-Profile'
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label htmlFor="helper">Helper:</label>
              <Field type="checkbox" name="helper" initialValue={false} />
              <ErrorMessage name="helper" />
            </div>
            {!profileValid && <p>User already has a profile, you cannot create another</p>}
            {profileValid && <p>There is already a profile for this user</p>}
            {submissionSuccess && <p>Successfully signed up!</p>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </ Formik>
    </div>
    )

}

export default ProfileForm;
