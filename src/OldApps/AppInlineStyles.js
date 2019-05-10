import React from 'react';

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  const h1Styles = {
    fontSize: 30
  }

  if (hours < 12) {
    timeOfDay = 'morning'
    h1Styles.color = '#04756F'
  } else if (hours >= 12 && hours <= 17) {
    timeOfDay = 'afternoon'
    h1Styles.color = '#8914A3'
  } else {
    timeOfDay = 'night'
    h1Styles.color = '#D90000'
  }

  return(
    <div>
      <h1 style={h1Styles}>Good {timeOfDay}!</h1>
    </div>    
  )
}

export default App;