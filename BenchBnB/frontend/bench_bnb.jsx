import React from 'react';
import ReactDOM from 'react-dom';
import { signup, signin, signout } from './util/session_api_util';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  window.signup = signup;
  window.signin = signin;
  window.signout = signout;
  ReactDOM.render(<h1>Hello World</h1>, root);
});
