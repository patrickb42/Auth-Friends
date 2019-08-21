import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import axiosWithAuth from '../utils/axiosWithAuth';


const NewFriendForm = ({ values, errors, touched, status, setFriends }) => {
  useEffect(() => {
    if (!status) return;
    setFriends(status.data);
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

  handleSubmit(values, { setStatus, resetForm }) {
    (async () => {
      try {
        const response = await axiosWithAuth().post('http://localhost:5000/api/friends', values);
        setStatus(response);
        resetForm();
      } catch (error) {
        console.error(error);
      }
    })();
  },
})(NewFriendForm);
