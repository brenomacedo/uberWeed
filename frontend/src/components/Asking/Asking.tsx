import React from 'react'
import { IAsking, IFunctionsA } from '../../interfaces'
import './Asking.css'

type Asking = IAsking & IFunctionsA

const Askings: React.FC<Asking> = props => {
    return (
        <div className="asking-wrapper">
            <div>{props.description}</div>
            <button onClick={() => props.selectAsking(props.lat, props.lng)} className="info">Clique para visualizar</button>
            <button className="ready">Pronto para a entrega!</button>
        </div>
    )
}

export default Askings