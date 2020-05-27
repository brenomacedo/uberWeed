import { GoogleAPI } from 'google-maps-react'

export interface IMapProps {
    google: GoogleAPI
}

export interface IProfileState {
    lat: number
    lng: number
}

export interface IRegisterPosition {
    lat: number
    lng: number
    position: boolean
}