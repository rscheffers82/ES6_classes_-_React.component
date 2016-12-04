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
    this.onClick = this.onClick.bind(this);
  }
  onClick () {
    this.setState({
      count: this.state.count + 1
    });
  }
  render () {
    return (
      <div>
        <h3>Component Two using React.Component</h3>
          <p>Current count: {this.state.count}</p>
          <button className="button" onClick={this.onClick}>Button one</button>
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

// Using extend React.Component
// Passing a method into a prop that is some king of callback (onClick, onSubmit, onChange) then you have to take the care to bind these correctly
