import React from 'react'
import { IAsking, IFunctions } from '../../interfaces'
import './Asking.css'

type Asking = IAsking

const Askings: React.FC<IAsking> = props => {
    return (
        <div className="asking-wrapper">
            <div>{props.description}</div>
            <button className="info">Clique para visualizar</button>
            <button className="ready">Pronto para a entrega!</button>
        </div>
    )
}

export default Askings