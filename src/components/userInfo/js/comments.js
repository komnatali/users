import React from 'react';
import { connect } from 'react-redux';
import Comment from './comment';

import '../css/comments.css';

function UserComments( {users, id} ) {
 
  const { comments } = users[id];
  const commentsList = comments.slice(-5).map((comment, index) => {
    const { title, text, phone } = comment;
    return (
      <li key={index.toString()} className="user-comment-li">
        <Comment 
          title={title}
          text={text}
          phone={phone}
        />
      </li>
    )
  })
  
  return (
    <div className="comments-container">
      <p>Comments</p>
      <ul className="user-comments">
        {commentsList}
      </ul>
    </div>
  )
}

const mapStateToProps = function(store) {
  return {
    users: store.usersState.users,
  };
};

export default connect(mapStateToProps)(UserComments);
