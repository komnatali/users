import React from 'react';
import { Link } from 'react-router-dom';


class User extends React.Component {

  render() {
    const { name, surname, position, avatarHash, id } = this.props.user;
    const gravatar = `https://www.gravatar.com/avatar/${avatarHash}`;
    const link = `/${id}`;
    return (
      <li>
        <Link to={link}>
          <div className="user" >
            <img src={gravatar}
            className="avatar"
            alt="avatar" />
            <div className="user-info">
              <div className="name-surname">
                <span className="name">{`${name} `}</span>
                <span className="surname">{surname}</span>
              </div>
              <span className="position">{position}</span>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}

export default User;
