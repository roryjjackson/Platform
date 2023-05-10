import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function EditProfile() {
  const initialValues = {
    name: ''
  }

  const validationSchema =  Yup.object().shape({
    email: Yup.string().required('Name is required'),
  })

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  function handleSubmit(values, { setSubmitting, resetForm }) {
    console.log(values)
    const authToken = localStorage.getItem('authToken')
    console.log(localStorage)
    fetch('http://localhost:3000/api/v1/profiles/', { // Need to work out how to integrate the ID number of the profile so the api know which to delete
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({ profile: values})
    })
    .then(response => {
      if (response.ok) {
        const authToken = response.headers.get('Authorization').split(' ')[1];
        localStorage.setItem('authToken', authToken);

        setSubmissionSuccess(true)
        setSubmitting(false);
        resetForm();
        return response.json();
      } else if (response.status === 422) {
        throw new Error('Name already exists');
      } else {
        throw new Error('Something went wrong')
      }
    })
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => setSubmitting(false))
  };



  return (
    <div>
      <h2>EditProfile</h2>
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
            {submissionSuccess && <p>Successfully Edited Profile!</p>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </ Formik>
    </div>
    )

}

export default EditProfile;
