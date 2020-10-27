import React from 'react'
import './Navi.css'
import add from '../../img/add.svg'
import home from '../../img/home.svg'
import mypage from '../../img/mypage.svg'
import search from '../../img/search.svg'
import { Link } from 'react-router-dom'

export default function Navi() {
    return (
        <nav>
            <ul>
             <li><Link to="/home" className="link"><img src={home} alt="home-icon" /> <p>홈</p> </Link></li>
             <li><Link to="/search" className="link"><img src={search} alt="search-icon" /> <p>검색</p></Link></li>
             <li><Link to="/" className="link"><img src={add} alt="add-icon" /> <p>상품등록</p></Link></li>
             <li><Link to="/" className="link"><img src={mypage} alt="mypage-icon" /> <p> 마이페이지</p></Link></li>
            </ul>
        </nav>   
    )
}
