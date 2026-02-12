import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import productData from '../data/productData'

const ProductDetails = () => {
  const { id } = useParams()
  const history = useHistory()

  // Find the product by ID
  const product = productData.find((p) => p.id === parseInt(id))

  if (!product) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <button onClick={() => history.push('/')}>Back to Products</button>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => history.push('/')} style={{ marginBottom: '20px' }}>
        ← Back to Products
      </button>

      <div style={{ display: 'flex', gap: '40px', maxWidth: '1200px' }}>
        <div style={{ flex: 1 }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '8px' }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h2>{product.name}</h2>
          <p style={{ fontSize: '18px', color: '#666' }}>Color: {product.color}</p>
          <h3 style={{ fontSize: '32px', color: '#2c3e50', margin: '20px 0' }}>
            ${product.price}
          </h3>

          <div style={{ marginTop: '30px' }}>
            <button
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
