import React from 'react';

function Comment( { title, text, phone } ) {
  return (
    <div className="comment">
      <div className="comment-title-text">
        <span className="comment-title">{title}</span>
        <span className="comment-text">{text}</span>
      </div>
      <span className="comment-phone">{phone}</span>
    </div>
  )
}

export default Comment;