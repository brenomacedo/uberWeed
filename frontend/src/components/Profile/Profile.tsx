import React, { useEffect, useState } from 'react'
import { FaDoorOpen } from 'react-icons/fa'
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom'
import './Profile.css'
import { GoogleApiWrapper, Map } from 'google-maps-react'
import { IMapProps, IProfileState, IUser } from '../../interfaces'
import Asking from '../Asking/Asking'
import PendingAsking from '../PendingAskings/PendingAskings'


const Profile: React.FC<IMapProps> = props => {

    const history = useHistory()

    const [mapPosition, setMapPosition] = useState<IProfileState>({ lat: 0, lng: 0 })
    const [user, setUser] = useState<IUser>({
        id: 0,
        name: '',
        username: '',
        description: '',
        asking: []
    })
    
    const location = useLocation<IUser>()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setMapPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        })

        userInfo()

    }, [])

    const userInfo = async () => {
        if(location.state) {
            setUser({...location.state})
            return
        }

        if(localStorage.getItem('loginToken')) {
            try {
                axios.defaults.headers.common.authorization = `Bearer ${localStorage.getItem('loginToken')}`
                const userByToken = await axios.post<IUser>('/tokenprovided')
                setUser({...userByToken.data})
            } catch (error) {
                localStorage.clear()
                history.push('/')
            }

            return
        }

        history.push('/')
    }

    const logout = () => {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-wrapper">
            <div className="top-bar">
                <div className="profile-info">
                    <div className="weed"></div>
                        <h3>{user.name}</h3>
                    <div className="weed"></div>
                </div>
                <h3 className="logout" onClick={logout}>
                    <strong><FaDoorOpen size={20} color='green' /></strong>Logout
                </h3>
            </div>
            <div className="widgets-grid">
                <div className="map">
                    <Map containerStyle={{
                        position: 'relative',  
                        width: '100%',
                        height: '100%' }} center={mapPosition} initialCenter={{ lat: 0, lng: 0 }}
                        google={props.google} />
                </div>
                <div className="askings">
                    <Asking />
                    <Asking />
                    <Asking />
                    <Asking />
                    <Asking />
                    <Asking />
                </div>
                <div className="pendingAskings">
                    <PendingAsking />
                    <PendingAsking />
                    <PendingAsking />
                    <PendingAsking />
                    <PendingAsking />
                </div>
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY || ''
})(Profile)