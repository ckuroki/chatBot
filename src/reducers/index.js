import * as types from '../constants';

const initialState = {
  messages: [],
  currentUser: ''
};

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case types.USER_LOGIN: {
      return {
        ...state,
        currentUser: action.user
      };
    }
    case types.USER_LOGOUT: {
      return {
        ...state,
        currentUser: ''
      };
    }
    case types.POST_MESSAGE_SUCCESS: {
      return {
        ...state,
        messages: [
          ...state.messages,
          action.message
        ]
      };
    }
    default:
      return state;
  }
}

