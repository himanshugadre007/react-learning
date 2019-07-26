import React from 'react';

const UserList = (props) => {
  const renderList = () => {
    const list = props.users.map(user => {
        return (
          <div key={user.id} onClick={() => props.onUserClick(user)}>
            {user.firstName}
          </div>
        );
      }
    );
    return list;
  }
  return (
    <div>
      <h4>User List</h4>
      {renderList()}
    </div>
  );
}

export default UserList;