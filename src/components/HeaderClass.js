import React from 'react'

class Header extends React.Component {
  render() {
    return(
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

export default Header