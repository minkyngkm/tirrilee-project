import React from 'react'
import './Banner.css'

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner-text"> 
                <h3>이번달 <br></br>티릴리 새 상품 </h3> 
                <button> 보러가기 </button>
            </div>
            <div className="banner-img"> 
                <img src="../img/banner-img.jpg" alt="banner"></img>
            </div>
        </div>
    )
}
