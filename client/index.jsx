'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

var element = _react2.default.createElement(_App2.default, {
    title: 'Desktop'
});
var dom = document.getElementById('root');
(0,
_reactDom.render)(element, dom);

/*

import React from 'react';
import { render } from 'react-dom';
import App from './App';

var element = React.createElement(App, { title: 'Desktop' })
var dom = document.getElementById('root')
render(element, dom);

/*import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <App title="Desktop" />,
  document.getElementById('root')
)*/