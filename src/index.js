import React from 'react';
import ReactDOM from 'react-dom';
import EntryPoint from './entry-point.component';
import * as serviceWorker from './serviceWorker';
import './styles/partials/_common.scss';
// import './styles/partials/_flaticon.scss'; - webpack error FIX

const wrapper = document.getElementById('root');
if (wrapper) {
  ReactDOM.render(
    <React.StrictMode>
      <EntryPoint />
    </React.StrictMode>,
    wrapper
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
