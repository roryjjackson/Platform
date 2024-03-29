import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './ProfileForm.css';

function ProfileForm() {
  const initialValues = {
    name: ''
  }

  const validationSchema =  Yup.object().shape({
    name: Yup.string().required('Name is required'),
  })

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [profileValid, SetProfileValid] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(values, { setSubmitting, resetForm }) {
    const authToken = localStorage.getItem('authToken');
    const url = 'http://localhost:3000/api/v1/profiles';

    fetch(`${url}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({ profile: values})
    })
    .then(response => {
      if (response.ok) {
        setSubmissionSuccess(true);
        setSubmitting(false);
        resetForm();
      } else {
        SetProfileValid(true)
        console.log('user already has a profile')
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
    <div className='authentication create-profile'>
      <div>
        <h2 className='subheader'>Create Profile</h2>
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
                  <Field className='form-input create-profile' type="text" name="name" />
                  <ErrorMessage name="name" />
                </div>
                {/* <div className='form-field'>
                  <label className='form-label' htmlFor="helper">Helper:</label>
                  <Field className='form-input create-profile' type="checkbox" name="helper" initialValue={false} />
                  <ErrorMessage name="helper" />
                </div> */}
                <div className='form-field'>
                  <label className='form-label' htmlFor="hours">Hours:</label>
                  <Field className='form-input create-profile' type="text" name="hours" initialValue={false} />
                  <ErrorMessage name="hours" />
                </div>
                <div className='form-field'>
                  <label className='form-label' htmlFor="job_title">Job title:</label>
                  <Field className='form-input create-profile' type="text" name="job_title" initialValue={false} />
                  <ErrorMessage name="job_title" />
                </div>
                <div className='form-field'>
                  <label className='form-label' htmlFor="how">How did you get started:</label>
                  <Field className='form-input create-profile text' type="text" name="how" initialValue={false} />
                  <ErrorMessage name="how" />
                </div>
                <div className='form-field'>
                  <label className='form-label' htmlFor="why">Why did you get started:</label>
                  <Field className='form-input create-profile text' type="text" name="why" initialValue={false} />
                  <ErrorMessage name="why" />
                </div>
                <div className='form-field'>
                  <label className='form-label' htmlFor="what">What do you do day to day:</label>
                  <Field className='form-input create-profile text' type="text" name="what" initialValue={false} />
                  <ErrorMessage name="what" />
                </div>
                <div className='form-field'>
                  <label className='form-label' htmlFor="advice">Any key advice for newbies:</label>
                  <Field className='form-input create-profile text' type="text" name="advice" initialValue={false} />
                  <ErrorMessage name="advice" />
                </div>
                {/* {profileValid && <p>User already has a profile, you cannot create another</p>} */}
                {profileValid && <p>There is already a profile for this user</p>}
                {submissionSuccess && <p>Successfully signed up!</p>}
                <button className='button' type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </ Formik>
        </div>
      </div>
    </div>
    )

}

export default ProfileForm;
