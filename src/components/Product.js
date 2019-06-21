import React from 'react'

function Product(props) {
  return (
    <div>
      <h3>{props.product.name}</h3>
      <p>£{props.product.price}</p>
      <p>{props.product.description}</p>
      <hr />
    </div>
  )
}

export default Product