import React from 'react'

class Greeting extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours <= 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }

    return(
      <div>
        <p>Good {timeOfDay} to you, sir or madam!</p>
      </div>
    )
  }
}

export default Greeting