import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const ProductDetails = ({ products, updateProductPrice }) => {
  const { id } = useParams()
  const history = useHistory()
  const [editPrice, setEditPrice] = useState('')

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <button className='btn' onClick={() => history.push('/')}>Back to Products</button>
      </div>
    )
  }

  const handleSavePrice = () => {
    if (editPrice && editPrice > 0) {
      updateProductPrice(product.id, parseFloat(editPrice))
      setEditPrice('')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <button className='btn' onClick={() => history.push('/')} style={{ marginBottom: '20px' }}>
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
          <p style={{ fontSize: '16px', color: '#333' }}>{product.description}</p>
          <h3 style={{ fontSize: '32px', color: '#2c3e50', margin: '20px 0' }}>
            ${product.price}
          </h3>

          <div style={{ marginTop: '30px', marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Edit Price:</label>
            <input
              type='number'
              className='form-control'
              placeholder='Enter new price'
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
              style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
            <button 
              className='float-right'
              onClick={handleSavePrice}
              style={{
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                float: 'right'
              }}
            >
              Save Price
            </button>
          </div>

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
