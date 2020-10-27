import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Navi from '../components/Navi/Navi'
import Products from '../components/Products/Products'

export default function Home() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Navi></Navi>
        </div>
    )
}
