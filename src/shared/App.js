import React, { Component } from 'react'
import Counter from './Counter'

let color;

class App extends Component {
  constructor(props) {
    super(props)
    // the following bindings are necessary to make `this` work in the callback
  
    console.log(props,'props')

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