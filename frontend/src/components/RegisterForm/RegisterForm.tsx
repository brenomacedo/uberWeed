import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { IRegisterPosition } from '../../interfaces'
import axios from 'axios'

const RegisterForm: React.FC = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [details, setDetails] = useState<string>('')
    const [errors, setErrors] = useState<string[]>([])
    const [position, setPosition] = useState<IRegisterPosition>({ lat: 0, lng: 0, position: false })
    const history = useHistory()

    const toLoginScreen = () => {
        history.push('/')
    }

    const handleRegister = async () => {

        let validations: string[] = []

        if(name.length < 4 || name.length > 16)
            validations = [...validations, 'O nome deve ter entre 4 e 16 letras!']
        
        if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
            validations = [...validations, 'Insira um email válido!']
                  
        if(password.length < 8 || password.length > 20)
            validations = [...validations, 'Sua senha deve conter entre 8 e 20 caracteres!']      
               
        if(details.length < 20)
            validations = [...validations, 'Escreva mais detalhes sobre seu serviço!']
               
        if(password !== confirmPassword)
            validations = [...validations, 'A senha deve ser igual a confirmação de senha!']
        
        if(validations.length >= 1) {
            setErrors(validations)
            return
        }

        try {
            await axios.post('/user/create', {
                name, username: email, password, description: details
            })

            localStorage.clear()
            history.push('/')
        } catch(error) {
            validations = ['Email já cadastrado!']
            setErrors(validations)
        }
            
    }

    return (
        <form className="form-login">
            <input value={name} type="text" placeholder="Nome do fornecedor" className="input-100"
            onChange={e => setName(e.target.value)} />
            <input value={email} type="email" placeholder="Email" className="input-100"
            onChange={e => setEmail(e.target.value)} />
            <div className="inputs-50">
                <input value={password} type="password" placeholder="Senha" className="input-50"
                onChange={e => setPassword(e.target.value)} />
                <input value={confirmPassword} type="password" placeholder="Confirme sua senha"
                className="input-50" onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <textarea value={details} placeholder="Detalhes do fornecedor"
            onChange={e => setDetails(e.target.value)}></textarea>
            <div className="validations">
                {errors.map((error, index) => <h4 className="validation" key={index} >- {error}</h4>)}
            </div>
            <button type="button" onClick={handleRegister} className="button-submit">Cadastrar</button>
            <p>Já possui uma conta? <strong onClick={toLoginScreen}>Entrar</strong></p>
        </form>
    )

    
}

export default RegisterForm