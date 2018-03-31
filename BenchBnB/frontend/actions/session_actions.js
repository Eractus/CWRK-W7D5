import {signup, signin, signout} from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (formUser) => (dispatch) => ({
  login: (formUser) => dispatch(signin(formUser))
});

// export const login = user => dispatch => (
//   signin(user).then(user => {dispatch(receiveCurrentUser(user))});
// )
