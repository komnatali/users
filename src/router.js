import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import UsersList from './components/usersList/usersList';
import UserPage from './components/userInfo/js/userPage';


export default (
  <Router>
    <Route
      path="/"
      exact
      component={UsersList} />
    <Route
      path="/:userId"
      component={UserPage} 
    /> 
  </Router>
);