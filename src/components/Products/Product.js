import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom';


export default function Product({products, title}) {
    
    return (
        <div className="cards-container">
            <h3> {title}</h3>
            {products.map( product => (
            <Link to={`/${product.category}/${product._id}`} className="product-link" key={product._id}>
            <div className="product-card">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-text">
                    <div className="product-text-left">
                        <h5>{product.title}</h5>
                        <p> {product.category} <i className="fas fa-star"></i> {product.rating}</p>
                    </div> 
                    <div className="product-text-right">
                        <h5 className="product-price">{product.price} 원</h5>
                    </div>
                </div>
            </div>
            </Link>
            )
    )}
    </div>)
}
