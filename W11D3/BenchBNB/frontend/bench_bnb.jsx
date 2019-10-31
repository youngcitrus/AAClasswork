import React from "react";
import ReactDOM from "react-dom";
import * as ApiUtil from './util/session_api_util';
import {receiveCurrentUser} from './actions/session_actions'
import Root from './components/root';
import configureStore from './store/store';

const user1 = {username: "justintime", password: '123456'} 

document.addEventListener("DOMContentLoaded", () => {
  window.user1 = user1;
  const store = configureStore();
  window.login = ApiUtil.login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ApiUtil.login(user1)
  const root = document.getElementById("root");
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});