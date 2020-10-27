import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header';
import { productContext } from '../../Context';
import './Products.css'

export default function ProductDetails() {
    const params = useParams();

    const context = useContext(productContext)

    const { products } = context

    let productOne = products.filter(product => product._id === params.id)
    console.log(productOne)



    return (
        <div>
            <Header text="상품정보"></Header>
            {productOne.map(item => (
                <div key={item._id} className="product-card">
                    <div className="product-image">
                        <img src={item.image} alt={item.title}></img>
                    </div>
                    <div>{item.title}</div>
                    <div> 사이즈
                        <p>{item.availableSizes.map((size, index) => <span key={index}> {size} </span>)}</p>
                    </div>
                    <div> 상품상세 <p>{item.description}</p></div>
                </div>

            ))}
        </div>
    )
}
