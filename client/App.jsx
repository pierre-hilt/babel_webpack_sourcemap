/*'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    }
    ;
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null ) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var App = function(_Component) {
    _inherits(App, _Component);
    
    function App(props) {
        _classCallCheck(this, App);
        
        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
        
        _this.state = {
            title: props.title
        };
        return _this;
    }
    
    _createClass(App, [{
        key: 'changeTitle',
        value: function changeTitle(newTitle) {
            this.setState({
                title: newTitle
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null , 'This is ', this.state.title);
        }
    }]);
    
    return App;
}(_react.Component);

App.propTypes = {
    title: _react.PropTypes.string
};

exports.default = App;*/


/*import React, { Component, PropTypes } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  changeTitle(newTitle) {
    this.setState({ title: newTitle });
  }

  render() {
    return React.createElement('div', null, 'This is ', this.state.title);
  }
}

App.propTypes = { title: PropTypes.string };

export default App;*/


import React, { Component, PropTypes } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
    };
  }

  changeTitle(newTitle) {
    this.setState({ title: newTitle });
  }

  render() {
    return (
      <div>
        This is {this.state.title}
      </div>
    );
  }
}

App.propTypes = { title: PropTypes.string };

export default App;
