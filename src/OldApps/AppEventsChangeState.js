import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick() {
    console.log("Button clicked")
  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
  }
}

export default App