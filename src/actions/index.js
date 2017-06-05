import * as types from '../constants';

export function userLogin(user) {
 return {
  type: types.USER_LOGIN,
  user
  };
}

export function userLogout() {
 return {
  type: types.USER_LOGOUT
  };
}

export function postMessageSuccess(message) {
 return {
  type: types.POST_MESSAGE_SUCCESS,
  message
  };
}

