const React = require('react');
const ReactDOM = require('react-dom');

require("./style.scss");
let todoList = require("./todoList.jsx");

ReactDOM.render(
   <todoList color="hotpink" />,
  document.getElementById('app')
);