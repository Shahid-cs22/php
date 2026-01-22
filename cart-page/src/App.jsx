import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


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
        <p key={data.id}> <h3 style={{color:"whitesmoke"}}>{data.name}</h3>
        </p>
      ))}



    </>



  )
}

export default App