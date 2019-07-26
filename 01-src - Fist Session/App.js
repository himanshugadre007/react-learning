import React, { Component } from 'react';

import users from './data/users';

console.log('users = ', users);

// const App = () => {
//   // let currentUser = null;
//   let currentUser = {
//     id: 2,
//     firstName: 'Himanshu',
//     lastName: 'Gadre',
//   };

//   const onUserSelection = (user) => {
//     console.log('user = ', user);
//     currentUser = user;
//     console.log('currentUser = ', currentUser);
//   }
  
//   const renderUserList = () => {
//     return users.map(user => {
//       return(
//         <div key={user.id} onClick={onUserSelection.bind(this, user)} >
//           {user.firstName}
//         </div>
//       );
//     });
//   }
  
//   return (
//     <div>
//       <h4>User List</h4>
//       <div>
//         {renderUserList()}
//       </div>
//       <hr />
//       <div>
//         {
//           currentUser ?
//             `Currently selected user is: ${currentUser.firstName}` :
//             'No user selected'
//         }
//       </div>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  onUserSelection = (user) => {
    console.log('user = ', user);
    // this.state.currentUser = user;
    this.setState({ currentUser: user });
    console.log('currentUser = ', this.state.currentUser);
  }
  
  renderUserList = () => {
    return users.map(user => {
      return(
        <div key={user.id} onClick={this.onUserSelection.bind(this, user)} >
          {user.firstName}
        </div>
      );
    });
  }
  
  render() {
    return (
      <div>
        <h4>User List</h4>
        <div>
          {this.renderUserList()}
        </div>
        <hr />
        <div>
          {
            this.state.currentUser ?
              `Currently selected user is: ${this.state.currentUser.firstName}` :
              'No user selected'
          }
        </div>
      </div>
    );
  }
}


export default App;