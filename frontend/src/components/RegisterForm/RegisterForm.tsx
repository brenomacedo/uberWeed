import React from 'react'
import { useHistory } from 'react-router-dom'

const RegisterForm: React.FC = () => {

    const history = useHistory()

    const toLoginScreen = () => {
        history.push('/')
    }

    return (
        <form className="form-login">
            <input type="text" placeholder="Nome do fornecedor" className="input-100" />
            <input type="text" placeholder="Email" className="input-100" />
            <div className="inputs-50">
                <input type="text" placeholder="Senha" className="input-50" />
                <input type="text" placeholder="Confirme sua senha" className="input-50" />
            </div>
            <textarea placeholder="Detalhes do fornecedor"></textarea>
            <button type="submit" className="button-submit">Cadastrar</button>
            <p>Já possui uma conta? <strong onClick={toLoginScreen}>Entrar</strong></p>
        </form>
    )

    
}

export default RegisterForm