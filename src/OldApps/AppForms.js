import React, {Component} from 'react'

// https://reactjs.org/docs/forms.html

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <form>
        <input 
          type="text" 
          value={this.state.firstName} 
          name="firstName" 
          placeholder="First Name" 
          onChange={this.handleChange} 
        />
        <br />
        <input 
          type="text" 
          value={this.state.lastName} 
          name="lastName" 
          placeholder="Last Name" 
          onChange={this.handleChange} 
        />
        <p>{this.state.firstName} {this.state.lastName}</p>
      </form>
    )
  }
}

export default App
