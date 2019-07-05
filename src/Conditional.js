import React from 'react'

function Conditional(props) {
  if (props.isLoading) {
    return(
      <h1>Loading. . .</h1>
    )
  }
  
  return(
    <div>Some coool stuff about conditional rendering...</div>
  )
}

export default Conditional