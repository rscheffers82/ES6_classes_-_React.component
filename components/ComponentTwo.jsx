import React from 'react';

class ComponentTwo extends React.Component {
  // overwrite the constructor, so the component with its properties are the same
  // Super is called to transfer the values over, in react's case the props.
  constructor (props) {
    super(props);
    // this is the same as getInitialState
    this.state = {
      count: props.count
    };
  }
  render () {
    return (
      <div>
        <h3>Component Two using React.Component</h3>
          <p>Current count: {this.state.count}</p>
      </div>
    );
  }
}

ComponentTwo.defaultProps = {
  count: 50
};

ComponentTwo.propTypes = {
  count: React.PropTypes.number
};

export default ComponentTwo;
