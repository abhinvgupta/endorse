import React, { Component } from 'react'
import Counter from './Counter'

let color = 'green';

class App extends Component {
  constructor(props) {
    super(props)
    // the following bindings are necessary to make `this` work in the callback
  

    console.log(' printable', props.style, typeof props.style)
    color = props.style.counterColor
  }
  render() {
    
    return (
      <div className="App">
        <Counter colour={color}/>
      </div>
    );
  }
}







export default App