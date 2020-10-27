import React from 'react'
import logo from '../../img/header_logo.png'
import './Login.css'
import { Link } from 'react-router-dom'
import Google from './Google'

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-logo">
                <img src={logo}></img>
            </div>
            <form className="login-form">
                <input id="username" className="login-input" type="text" placeholder="아이디(이메일)"></input>
                <input id="password" className="login-input" type="text" placeholder="비밀번호"></input>
                <div className="checkbox-text"> <input type="checkbox" className="checkbox"></input> 로그인 상태 유지하기</div>
            </form>
            <Google></Google>
            <button className="login-button login"> 로그인 </button>
            <Link to="/signup"> <button className="login-button signup"> 회원가입 </button> </Link>
            
            <p className="login-text"> 회원가입 없이 카카오톡 계정만으로 바로 이용이 가능합니다. 로그인시, <span>이용약관 및 개인정보처리방침 동의</span>로 간주됩니다.</p>
        </div>
    )
}
