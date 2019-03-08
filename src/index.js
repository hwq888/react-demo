import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import Router from './router/';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

FastClick.attach(document.body);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Router/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
