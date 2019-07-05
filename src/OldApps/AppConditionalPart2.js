import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      unreadMessages: [
        "Call your mum",
        "New spam email available. All links are a-ok to click!"
      ]
    }
  }

  render() {
    return(
      <div>
        <h1>You have {this.state.unreadMessages.length} messages in your inbox.</h1>
      </div>
    )
  }
}

export default App
