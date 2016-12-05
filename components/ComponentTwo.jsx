import React from 'react';


// // First way a component can be extended
// var isAdmin = true;
// var adminComponent = (Component) => {
//   return class Admin extends React.Component {
//     render () {
//       if (isAdmin) {
//         return (
//           <div className="callout secondary">
//             <p className="alert label">Private admin information</p>
//             <Component {...this.props}/>
//           </div>
//         )
//       } else {
//         //null is required as a component needs to be returned
//        return null
//       }
//     };
//   }
// };

// Second way a component can be extended
// This provides more functionality than just hijack the render method.
var isAdmin = true;
var adminComponent = (Component) => {
  return class Admin extends Component {
    componentDidUpdate () {
      console.log('Admin component did update');

      if (super.componentDidUpdate) {
        super.componentDidUpdate();
      }
    }
    render () {
      if (isAdmin) {
        return (
          <div className="callout secondary">
            <p className="alert label">Private admin information</p>
            {super.render()}
          </div>
        )
      } else {
        //null is required as a component needs to be returned
       return null
      }
    };
  }
};

class ComponentTwo extends React.Component {
  // componentDidUpdate () {
  //   console.log('ComponentTwo did update');
  // }
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

export default adminComponent(ComponentTwo);

// Below the default without an admin higher compoent.
// export default ComponentTwo;


// Using extend React.Component
// Passing a method into a prop that is some king of callback (onClick, onSubmit, onChange) then you have to take the care to bind these correctly


// Basic setup of a higher order Component
// var adminComponent = (Component) => {
//   return class Admin extends React.Component {
//     render () {
//
//     };
//   }
// };
