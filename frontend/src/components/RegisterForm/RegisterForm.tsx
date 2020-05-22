import React from 'react'

const RegisterForm: React.FC = () => {
    return (
        <form className="form-login">
            <input type="email" placeholder="Email" className="input-100" />
            <input type="password" placeholder="senha" className="input-100" />
            
            <button type="submit" className="button-submit">Logar</button>
            <p>Não possui uma conta? <strong>Registre-se!</strong></p>
        </form>
    )
}

export default RegisterForm