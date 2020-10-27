import React from 'react'
import './SignUp.css'
import Header from '../Header/Header'

export default function SignUp() {
    return (
        <div className="signup-container">
            <Header text="회원가입"></Header>
            <h4>가입 정보를 입력해주세요 :)</h4>
            <form className="signup-form">
                <div>
                    <label htmlFor="email"> 이메일 </label>
                    <input id="email" type="text" placeholder="이메일을 입력해주세요."></input>
                </div>
                <div>
                    <label htmlFor="password"> 비밀번호 </label>
                    <input id="password" type="text" placeholder="숫자, 영문, 특수문자 포함 12자"></input>
                </div>
                <div>
                    <label htmlFor="nickname"> 닉네임 </label>
                    <input id="nickname" type="text" placeholder="티릴리에서 사용할 닉네임을 입력해주세요"></input>
                </div>
                <div>
                    <label htmlFor="contact"> 연락처 </label>
                    <input id="contact" type="text" placeholder='"-" 제외, 숫자만 입력해주세요'></input>
                </div>
                <button type="submit" className="signup-button"> 가입완료</button>
            </form>
            
           
        </div>
    )
}
