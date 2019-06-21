import React from 'react'
import Product from './components/Product'
import vschoolProducts from './data/vschoolProducts'

function App() {
  const productComponents = vschoolProducts.map(prod => <Product key={prod.id} name={prod.name} price={prod.price} description={prod.description} />)

  return(
    <div>
      {productComponents}
    </div>
  )
}

export default App