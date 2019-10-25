import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './widget';

document.addEventListener("DOMContentLoaded", ()=>{
  const rootDiv = document.getElementById("root");
  ReactDOM.render( <Widget />, rootDiv);
});