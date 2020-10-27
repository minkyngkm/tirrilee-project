import React, { createContext, useState, useEffect } from 'react'
import rawData from './data.json'

export const productContext = createContext()

export function ContextProvider(props) {

    const [products, setProducts] = useState([])
    const [bestproduct, setBestproduct] = useState([])
    const [newproduct, setNewprorduct] = useState([])
    
    
    useEffect(() => {
        let allproducts = rawData.products
        let best = rawData.products.filter(product => product.best === true)
        let newp = rawData.products.filter(product => product.new === true)

        setProducts(allproducts)
        setBestproduct(best)
        setNewprorduct(newp)
    }, [products])
    

    return (
        <div>
            <productContext.Provider value={{products, bestproduct, newproduct}}>
                {props.children}
            </productContext.Provider>
        </div>
    )
}
