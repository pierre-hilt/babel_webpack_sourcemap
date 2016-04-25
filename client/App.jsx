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
