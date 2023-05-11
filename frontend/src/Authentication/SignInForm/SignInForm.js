import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';


function SignInForm() {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema =  Yup.object().shape({
    email: Yup.string().email(<p className='form-alert'>Invalid Email address</p>).required(<p className='form-alert'>Email is required</p>),
    password: Yup.string().min(6, <p className="form-alert">Password must be at least 6 characters</p>).required(<p className="form-alert">Password is required</p>),
  })

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(values, { setSubmitting, resetForm }) {
    // console.log(values)
    fetch('http://localhost:3000/users/sign_in', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: values})
    })
    .then(response => {
      if (response.ok) {
        // console.log(response)
        const authToken = response.headers.get('Authorization').split(' ')[1];
        localStorage.setItem('authToken', authToken);

        setSubmissionSuccess(true)
        setSubmitting(false);
        resetForm();
        navigate('/')
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



  return (
    <div>
      <h2 className='page-title'>Login</h2>
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
              {submissionSuccess && <p>Successfully signed in!</p>}
              <button className='button' type="submit" disabled={isSubmitting}>
                Login
              </button>
              <button className='button'>
                < Link to="/users/sign_up">Sign Up</Link>
              </button>
            </Form>
          )}
        </ Formik>
      </div>
    </div>
    )

}

export default SignInForm;
