import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';


const LoginForm = ({ values, errors, touched, status, setLoggingIn }) => {
  useEffect(() => {
    if (!status) return;
    setLoggingIn(status.loggingIn);
    status.response.data && localStorage.setItem('token', status.response.data.payload);
  }, [status]);

  return (<>
    <Form>
      {touched.username && errors.username && <p>{errors.username}</p>}
      <Field type="text" name="username" placeholder="Username" />
      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </Form>
  </>);
};

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required(),
    password: Yup.string()
      .required(),
  }),

  handleSubmit(values, { setStatus }) {
    (async () => {
      let response = {};

      setStatus({
        loggingIn: true,
        response,
      });
      try {
        response = await Axios.post('http://localhost:5000/api/login', values);
        setStatus({
          loggingIn: false,
          response,
        });
      } catch (error) {
        console.error('An error occured while logging in\n', error);
      }
    })();
  },
})(LoginForm);
