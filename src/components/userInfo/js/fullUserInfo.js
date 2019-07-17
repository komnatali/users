import React from 'react';
import { connect } from 'react-redux';

function FullUser(props) {
  const { name, surname, position, avatarHash, address } = props.users[props.id];
  const gravatar = `https://www.gravatar.com/avatar/${avatarHash}`;

  return (
    <div className="user full-user" >
      <img src={gravatar}
      className="avatar"
      alt="avatar" />
      <div className="user-info">
        <div className="name-surname">
          <span className="name">{`${name} `}</span>
          <span className="surname">{surname}</span>
        </div>
        <span className="position">{position}, {address}</span>
      </div>
    </div>
  );
}

const mapStateToProps = function(store) {
  return {
    users: store.usersState.users,
  };
};

export default connect(mapStateToProps)(FullUser);