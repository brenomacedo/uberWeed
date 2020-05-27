import React from 'react'
import '../Login/Login.css'
import { useHistory } from 'react-router-dom'

const LoginForm: React.FC = () => {

    const history = useHistory()

    const toRegisterScreen = () => {
        history.push('/register')
    }

    return (
        <form className="form-login">
            <input type="email" placeholder="Email" className="input-100" />
            <input type="password" placeholder="senha" className="input-100" />
            
            <button type="submit" className="button-submit">Logar</button>
            <p>Não possui uma conta? <strong onClick={toRegisterScreen}>Registre-se!</strong></p>
        </form>
    )
}

export default LoginForm