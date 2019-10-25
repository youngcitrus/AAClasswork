import React from 'react';
import ReactDOM from 'react-dom';

import Game from './game';


function Root() {
  return (
    <div className="root">
      <h1>MindSwapper</h1>
      <Game />
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);
});
