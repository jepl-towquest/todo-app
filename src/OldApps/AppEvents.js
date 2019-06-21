import React, {Component} from 'react'

class App extends Component {
  handleClick() {
    console.log("I was clicked")
  }

  handleMouseOver() {
    console.log("I was hovered")
  }

  render() {
    return(
      <div>
        <img src="https://www.fillmurray.com/200/100" alt="" onMouseOver={this.handleMouseOver} />
        <br />
        <br />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

export default App