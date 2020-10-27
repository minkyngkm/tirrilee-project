import React from 'react'
import './Login.css'
import GoogleLogin from 'react-google-login'

export default function Google() {
    const responseGoogle = (response) => {
        console.log(response)
        console.log(response.profileObj)
    }
    return (
        <div>
            <GoogleLogin 
            clientId="267580743448-p3h4kjim1g4hot9f7jd0col7bl4m24vb.apps.googleusercontent.com" 
            buttonText="구글계정으로 로그인" 
            onSuccess={responseGoogle} 
            onFailure={responseGoogle} 
            cookiePolicy={'single_host_origin'} 
            className="login-button"
            />
        </div>
    )
}
