import React, {Component} from 'react'

// https://reactjs.org/docs/forms.html

class App extends Component {
  constructor() {
    super()
    this.state = {}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  render() {
    return(
      <form>
        <input type="text" placeholder="First Name" onChange={this.handleChange} />
        <p>{this.state.firstName}</p>
      </form>
    )
  }
}

export default App
