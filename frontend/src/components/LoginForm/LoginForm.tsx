import React, { useState, useEffect } from 'react'
import { IAuth } from '../../interfaces'
import axios from 'axios'
import '../Login/Login.css'
import { useHistory } from 'react-router-dom'

const LoginForm: React.FC = () => {

    const history = useHistory()
    
    useEffect(() => {
        if(localStorage.getItem('loginToken')) {
            history.push('/profile')
        }
    }, [history])

    const toRegisterScreen = () => {
        history.push('/register')
    }

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errors, setErrors] = useState<string[]>([])

    const handleLogin = async () => {
        try {
            const user = await axios.post<IAuth>('/authenticate', {
                username: email,
                password: password
            })

            localStorage.setItem('loginToken', user.data.token)
            axios.defaults.headers.common.authorization = `Bearer ${user.data.token}`
            
            history.push('/profile', user.data.user)
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