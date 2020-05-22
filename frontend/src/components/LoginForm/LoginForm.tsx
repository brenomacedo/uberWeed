import React from 'react'
import '../Login/Login.css'

const LoginForm: React.FC = () => {
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
        </form>
    )
}

export default LoginForm