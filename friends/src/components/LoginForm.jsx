import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const LoginForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    status && setUsers((users) => [...users, status]);
  }, [status]);

  return (<>
    <Form>
      {touched.username && errors.username && <p>{errors.username}</p>}
      <Field type="text" name="name" placeholder="Name" />
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
      setStatus(await axios.post('https://reqres.in/api/users', values));
    })();
  },
})(LoginForm);
