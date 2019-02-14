import React, { Component } from 'react';
import ButtonComp from './ButtonComp'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: this.props.start || 0}
    // the following bindings are necessary to make `this` work in the callback
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }
  
  inc() {
    this.setState({
      count: this.state.count + 1
    });
  }
  
  dec() {
    this.setState({
      count: this.state.count - 1
    });
  }
  
  render() {
    return (
      <div>
        <h2 id = "counter" style={{color: this.props.colour}}>{this.state.count}</h2>
        <ButtonComp onClick = {this.inc} text = '+' />
        <ButtonComp onClick = {this.dec} text = '-' />
      </div>
    );
  }
}

export default Counter