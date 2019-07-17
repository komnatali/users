import React from 'react';
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <Link to="/">
      <button className="back-button">Back to users list</button>
    </Link>
  )
}

export default BackButton;