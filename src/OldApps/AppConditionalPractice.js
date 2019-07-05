import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.isLoggedIn ? "Logged in" : "Logged out"}</h1>
        <button onClick={this.handleClick}>{this.state.isLoggedIn ? "Log Out": "Log In"}</button>
      </div>
    )
  }  
}

export default App