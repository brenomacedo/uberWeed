import React, { useEffect, useState } from 'react'
import './Profile.css'
import { GoogleApiWrapper, Map } from 'google-maps-react'
import { IMapProps, IProfileState } from '../../interfaces'
import Asking from '../Asking/Asking'
import PendingAsking from '../PendingAskings/PendingAskings'


const Profile: React.FC<IMapProps> = props => {

    const [mapPosition, setMapPosition] = useState<IProfileState>({ lat: 0, lng: 0 })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setMapPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        })

    }, [])

    return (
        <div className="profile-wrapper">
            <div className="top-bar">
                <div className="weed"></div>
                <h3>Profile Name</h3>
                <div className="weed"></div>
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