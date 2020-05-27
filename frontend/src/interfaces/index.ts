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

export interface IUser {
    id: number
    name: string
    username: string
    description: string
    asking: IAsking[]
}

export interface IAsking {
    id: number
    lat: number
    lng: number
    userId: number
    description: string
    pending: boolean
    done: boolean
}

export interface IAuth{
    user: IUser
    token: string
}