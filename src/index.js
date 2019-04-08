import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import Demo from './pages/demo/RouterPage';
// import Demo1 from './pages/demo1/box';
import Router from './pages/demo2/router';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible'

// ReactDOM.render(<RouterPage />, document.getElementById('root'));
// ReactDOM.render(<Demo1 />, document.getElementById('root'));
ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
