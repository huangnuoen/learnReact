// 所有文件主入口
// all in js
import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './todolist';
// PWA progressive web application
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Todolist />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
