const initialState = {
  users: [],
};

const changeUsersData = (usersData = initialState, action) => {
  switch (action.type) {
    case 'addUsersData':
      return { users: action.users };

    case 'addComments':
        const { comment, id } = action;
        
        const newUsers = usersData.users.slice();
        const changingUser = newUsers[id];
        changingUser.comments.push(comment);

        return {  users: newUsers }
        
    default:
      return usersData;
  }
}

export default changeUsersData;