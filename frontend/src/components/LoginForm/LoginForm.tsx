import React, { useState } from 'react'
import axios from 'axios'
import '../Login/Login.css'
import { useHistory } from 'react-router-dom'

const LoginForm: React.FC = () => {

    const history = useHistory()

    const toRegisterScreen = () => {
        history.push('/register')
    }

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errors, setErrors] = useState<string[]>([])

    const handleLogin = async () => {
        try {
            await axios.post('/authenticate', {
                username: email,
                password: password
            })

            history.push('/profile')
        } catch {
            setErrors(['User or password incorrects!'])
        }
    }

    return (
        <form className="form-login">
            <input value={email} onChange={e => setEmail(e.target.value)} type="email"
            placeholder="Email" className="input-100" />
            <input value={password} onChange={e => setPassword(e.target.value)} type="password"
            placeholder="senha" className="input-100" />
            <div className="validations">
                {errors.map(error => <h4 className="validation">- {error}</h4>)}
            </div>
            <button onClick={handleLogin} type="button" className="button-submit">Logar</button>
            <p>Não possui uma conta? <strong onClick={toRegisterScreen}>Registre-se!</strong></p>
        </form>
    )
}

export default LoginForm