function addUsersData(users) {
  return {
    type: 'addUsersData',
    users,
  };
}

export function fetchUsersData(url) {
  return function (dispatch) {
    return fetch(url)
      .then(response => response.json())
      .then(res =>
        dispatch(addUsersData(res))
      )
  }
}

export function addComments(id,comment) {
  return {
    type: 'addComments',
    id, comment,
  }
}