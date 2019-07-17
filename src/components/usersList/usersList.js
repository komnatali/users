import React from 'react';
import { connect } from 'react-redux';
import User from './user';
import store from '../../store';
import './userList.css';
import { fetchUsersData } from'../../actions/actions';

class UsersList extends React.Component {

  componentDidMount() {
    const url = 'http://0dkgg.mocklab.io/users';
    store.dispatch(fetchUsersData(url));
  }

  render() {
    const { users } = this.props;
    const usersList = users.map((user, index) => <User key={index.toString()} user={user} />)
    
    return (
    <ul className="users-list">
      {usersList}
    </ul>
    )
  }

}

const mapStateToProps = function(store) {
  return {
    users: store.usersState.users,
  };
};

export default connect(mapStateToProps)(UsersList);
