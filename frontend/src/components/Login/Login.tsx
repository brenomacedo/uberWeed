import React from 'react'
import './Login.css'

const Login: React.FC = () => {
    return (
        <div className="login-wrapper">
            <form className="form-login">
                <input type="text" placeholder="Nome do fornecedor" className="input-100" />
                <div className="inputs-50">
                    <input type="text" className="input-50" />
                    <input type="text" className="input-50" />
                </div>
                <textarea></textarea>
            </form>
        </div>
    )
}

export default Login