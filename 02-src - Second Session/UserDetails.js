import React from 'react';

const UserDetails = props => {
  if (!props.user) {
    return null;
  }
  return (
    <div>
      <h4>UserDetails</h4>
      <div>
        <div>{props.user.firstName}</div>
        <div>{props.user.lastName}</div>
      </div>
    </div>
  );
}

export default UserDetails;