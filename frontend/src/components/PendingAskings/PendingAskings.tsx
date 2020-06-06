import React from 'react'
import { IAsking, IFunctionsPA } from '../../interfaces'
import './PendingAskings.css'


type Asking = IAsking & IFunctionsPA

const PendingAskings: React.FC<Asking> = props =>  {
    return (
        <div className="pending-askings-wrapper">
            <div>Novo pedido!</div>
            <h3>{props.description}</h3>
            <button onClick={() => props.accept(props.id)} className="accept">Aceitar</button>
            <button onClick={() => props.deny(props.id)} className="deny">Recusar</button>
        </div>
    )
}

export default PendingAskings