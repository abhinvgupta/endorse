import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import Counter from './Counter'

class App extends Component {
  constructor(props, state) {
    super(props)
    console.log(state)
    console.log(this.props.style, this.props.test, 'paththhh')
  }
  render() {
    
    return (
      <div className="App">
        <Counter colour = "green" />
      </div>
    );
  }
}


export default App