import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import Demo1 from './pages/demo1/RouterPage';

// import Demo2 from './pages/demo2/router';

import { Provider } from "react-redux";
import store from "./store";
import Demo3 from './pages/demo3/TodoApp';

import * as serviceWorker from './serviceWorker';
import 'lib-flexible'

ReactDOM.render(
    // <Demo1 />,
    // <Demo2 />,
    <Provider store={store}>
        <Demo3 />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
