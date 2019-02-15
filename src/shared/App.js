import React, { Component } from 'react'
import Counter from './Counter'

let color = 'black';

class App extends Component {
  constructor(props) {
    super(props)
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