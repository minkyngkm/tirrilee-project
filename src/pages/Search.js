import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import Product from '../components/Products/Product'
import { productContext } from '../Context'
import Searchbar from '../Search.js/Searchbar'
import Navi from '../components/Navi/Navi'

export default function Search() {
    const context = useContext(productContext)
    
    const { products } = context

    console.log(products)

    return (
        <div>
            <Header text="검색하기"></Header>
            <Searchbar></Searchbar>
            <Product products={products}></Product>
            <Navi></Navi>
        </div>
    )
}
