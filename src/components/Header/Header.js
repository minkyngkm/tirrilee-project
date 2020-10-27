import React from 'react'
import './Header.css'
import logo from '../../img/header_logo.png'

export default function Header({text}) {
    return (
        <header>
            <div className="header-image-container">
            {text? <h5> {text}</h5> : <img src={logo} alt="tirrilee-logo" className="header-logo"/>}
            </div>
        </header>
    )
}
