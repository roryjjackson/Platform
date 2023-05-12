import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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
        if (data.length > 2) {
          setProfileValid(true)
          console.log('an error has occured')
          throw new Error('A Profile already exists for this user');
        } else {
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
          throw new Error('Error submitting form data');
        }
      })
      .catch(error => {
        console.error(error);
        setSubmitting(false);
      });
  };


  useEffect(() => {
    if (submissionSuccess) {
      const timer = setTimeout(() => {
        navigate('/');
        window.location.reload();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [submissionSuccess, navigate]);


  return (
    <div>
      <h2 className='page-title'>Create Profile</h2>
      <div className='form-container'>
        < Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='form-field'>
                <label className='form-label' htmlFor="name">Name:</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" />
              </div>
              <div className='form-field'>
                <label className='form-label' htmlFor="helper">Helper:</label>
                <Field type="checkbox" name="helper" initialValue={false} />
                <ErrorMessage name="helper" />
              </div>
              {profileValid && <p>User already has a profile, you cannot create another</p>}
              {/* {profileValid && <p>There is already a profile for this user</p>} */}
              {submissionSuccess && <p>Successfully signed up!</p>}
              <button className='button' type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </ Formik>
      </div>
    </div>
    )

}

export default ProfileForm;
