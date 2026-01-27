import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap';


const App = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(res => setProduct(res.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <h2>This is Cart Page</h2>

      {product.map((data) => (
        <Row key={data.id}>
          <Col xs={6} sm={6} md={4} lg={3}>
            <img
              src={data.image === null || data.image === ""
                ? "NaN"
                : data.image}
              style={{ width: "250px" }}
            />
            <h3 style={{ color: " whitesmoke" }}>{data.name}</h3>
            <h5>price:{data.price}</h5>
          </Col>
        </Row>
      ))}



    </>



  )
}

export default App