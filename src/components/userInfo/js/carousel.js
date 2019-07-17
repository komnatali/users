import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../css/carousel.css';

class Carousel extends React.Component {
  
  render() {
    const avatarHashes = this.props.users.map(user => user.avatarHash);
    const avatarsLists = avatarHashes.map((avatarHash, index) => {
      const gravatar = `https://www.gravatar.com/avatar/${avatarHash}`;
      const link = `/${index}`;
      return (
        <Link to={link} key={index.toString()}>
          <li>
            <img src={gravatar}
              className="avatar"
              alt="avatar" />
          </li>
        </Link>
      );
    });
  
    return (
      <div className="wrap-carousel">
        <ul className="user-carousel">
          {avatarsLists}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    users: store.usersState.users,
  };
};

export default connect(mapStateToProps)(Carousel);
