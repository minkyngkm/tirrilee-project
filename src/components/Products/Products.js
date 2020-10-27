import React, { useContext } from 'react'
import { productContext } from '../../Context'
import Product from './Product'


export default function Products() {
    const context = useContext(productContext)
    
    const { bestproduct, newproduct } = context

    
    return (
        <div className="products-container">    
                
                <Product products={bestproduct} title="티릴리 베스트 상품"></Product>
                <Product products={newproduct} title="티릴리 새상품"></Product>
        
        </div>

    )
}
