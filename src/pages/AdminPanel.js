import React from 'react'
import products from '../data/productData'
import './AdminPanel.css'

const AdminPanel = () => {

  const handleAddProduct = () => {

  }
  return (
    <div className='admin-panel'>
      <button onClick={handleAddProduct} className='add-product-btn'>Add Product</button>

      {products.map((product) => {
        return (
          <div className='admin-card' key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '150px' }} />
            <h3>{product.name}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default AdminPanel;
