import React from 'react'
import './Asking.css'

const Askings: React.FC = () => {
    return (
        <div className="asking-wrapper">
            <div>Descrição do pedido</div>
            <button className="info">Clique para visualizar</button>
            <button className="ready">Pronto para a entrega!</button>
        </div>
    )
}

export default Askings