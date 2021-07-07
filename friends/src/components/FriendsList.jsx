import React, { useState, useEffect } from 'react';

import NewFriendForm from './NewFriendForm';

import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosWithAuth().get('http://localhost:5000/api/friends');
        setFriends(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (<>
    <NewFriendForm setFriends={setFriends} />
    <div className="friends-list">
      {friends.map((friend) => <Friend key={friend.id} {...friend} />)}
    </div>
  </>);
};

export default FriendsList;
