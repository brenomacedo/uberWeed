import React from 'react'
import './Login.css'
import LoginForm from '../LoginForm/LoginForm'
import Banner from '../../assets/imgs/banner.png'

const Login: React.FC = () => {
    return (
        <div className="login-wrapper">
            <LoginForm />
            <div className="banner">
                <img alt="smoke weed every day!" className="image-banner" src={Banner} />
            </div>
        </div>
    )
}

export default Login