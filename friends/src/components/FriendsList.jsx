import React, { useState, useEffect } from 'react';

import NewFriendForm from './NewFriendForm';

import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
  // const [friends, setFriends] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosWithAuth().get('http://localhost:5000/api/friends');
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (<>
    <NewFriendForm />
    {}
  </>);
};

export default FriendsList;
