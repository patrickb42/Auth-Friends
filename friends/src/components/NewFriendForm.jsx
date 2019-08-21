import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const NewFriendForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    status && setUsers((users) => [...users, status]);
  }, [status]);

  return (<>
    <Form>
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field type="text" name="name" placeholder="Name" />
      {touched.age && errors.age && <p>{errors.age}</p>}
      <Field type="number" name="age" placeholder="Age" />
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
      <button type="submit">Add Friend</button>
    </Form>
  </>);
};

export default withFormik({
  mapPropsToValues({ name, age, email }) {
    return {
      name: name || '',
      age: age || '',
      email: email || '',
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .max(255, "Their name isn't that long")
      .required(),
    age: Yup.number()
      .positive()
      .required(),
    email: Yup.string()
      .email()
      .required(),
  }),

  handleSubmit(values, { setStatus }) {
    (async () => {
      setStatus(await axios.post('https://reqres.in/api/users', values));
    })();
  },
})(NewFriendForm);
