import React from 'react';

const Friend = ({ name, age, email, id }) => {
  const removeFriend = () => {
    return id;
  };

  return (<>
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <button onClick={removeFriend}>Remove</button>
    </div>
  </>);
};

export default Friend;
