import React from 'react';
import FullUser from './fullUserInfo';
import Form from './form';
import UserComments from './comments';
import Carousel from './carousel';
import BackButton from './backButton';
import '../css/userInfo.css';

class UserPage extends React.Component {
  
  render() {
    const { userId } = this.props.match.params;
    return (
      <div className="user-page">
        <div className="user-page-header">
          <BackButton />
          <Carousel />
        </div>
        <div className="user-container">
          <div className="fulluser-comments">
            <FullUser id={userId} />
            <UserComments id={userId} />
          </div>
          <Form id={userId} />
        </div>
      </div>
    )
  }
}

export default UserPage;
