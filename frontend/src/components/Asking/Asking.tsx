import React from 'react'
import { IAsking } from '../../interfaces'
import './Asking.css'

const Askings: React.FC<IAsking> = props => {
    return (
        <div className="asking-wrapper">
            <div>Descrição do pedido</div>
            <button className="info">Clique para visualizar</button>
            <button className="ready">Pronto para a entrega!</button>
        </div>
    )
}

export default Askings