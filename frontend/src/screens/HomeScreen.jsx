import React from 'react'
import { Row,Col } from 'react-bootstrap'
import product from '../products'
import Product from '../componants/Product'

function HomeScreen() {
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {product.map((item)=> (
        <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={item} />
        </Col>
        ))}    
      </Row>
    </>
  )
}

export default HomeScreen