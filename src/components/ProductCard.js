import React from 'react'
import { useHistory } from 'react-router-dom'
import productData from '../data/productData'
import './ProductCard.css'

const ProductCard = () => {
    const history = useHistory()

    const handleCardClick = (productId) => {
        history.push(`/products/${productId}`)
    }

    return (
        <div className='card-layout'>
            {productData.map((product) => {
                return (
                    <div
                        className='card'
                        key={product.id}
                        onClick={() => handleCardClick(product.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img className='card-image' src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Color: {product.color}</p>
                        <p>Price: ${product.price}</p>
                        <button className='buy-btn' onClick={(e) => e.stopPropagation()}>Buy</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard
