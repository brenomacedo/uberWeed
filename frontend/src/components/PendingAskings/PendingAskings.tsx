import React from 'react'
import { IAsking } from '../../interfaces'
import './PendingAskings.css'

const PendingAskings: React.FC<IAsking> = () =>  {
    return (
        <div className="pending-askings-wrapper">
            <div>Novo pedido!</div>
            <h3>Descrição do pedido</h3>
            <button className="accept">Aceitar</button>
            <button className="deny">Recusar</button>
        </div>
    )
}

export default PendingAskings