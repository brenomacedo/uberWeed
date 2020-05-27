import React from 'react'
import '../Login/Login.css'
import RegisterForm from '../RegisterForm/RegisterForm'
import Banner from '../../assets/imgs/banner.png'

const Login: React.FC = () => {
    return (
        <div className="login-wrapper">
            <RegisterForm />
            <div className="banner">
                <img title="smoke weed every day!" className="image-banner" src={Banner} />
            </div>
        </div>
    )
}

export default Login