import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema =  Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 8 characters').required('Password is required'),
  })

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(values, { setSubmitting, resetForm }) {
    console.log(values)
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: values})
    })
    .then(response => {
      if (response.ok) {
        setSubmissionSuccess(true)
        setSubmitting(false);
        resetForm();
        return response.json();
      } else if (response.status === 422) {
        throw new Error('Email already exists');
      } else {
        throw new Error('Something went wrong')
      }
    })
    .then(data => {
      fetch('http://localhost:3000/users/sign_in', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: values})
    })
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
        throw new Error('Email already exists');
      } else {
        throw new Error('Something went wrong')
      }
    })
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => setSubmitting(false))
  };

  useEffect(() => {
    if (submissionSuccess) {
      const timer = setTimeout(() => {
        navigate('/users/sign_in');
        window.location.reload();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [submissionSuccess, navigate]);

  return (
    <div>
      <h2 className='page-title'>Sign Up</h2>
      <div className='form-container'>
        < Formik
          className='user-signup'
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='form-field'>
                <label className='form-label' htmlFor="email">Email:</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" />
              </div>
              <div className='form-field'>
                <label className='form-label' htmlFor="password">Password:</label>
                <Field type="text" name="password" />
                <ErrorMessage name="password" />
              </div>
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

export default SignUpForm;
