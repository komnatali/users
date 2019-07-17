import { combineReducers } from 'redux';

import changeUsersData from './changeUsersData';

const reducers = combineReducers({
    usersState: changeUsersData,
});

export default reducers;