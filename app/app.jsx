var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import ComponentOne from '../components/ComponentOne';
import ComponentTwo from '../components/ComponentTwo';

// Playgroud project to explore the differences between React.createClass and React.Component


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    <ComponentOne count={123}/>
    <ComponentTwo count={33}/>
  </div>,
  document.getElementById('app')
);
