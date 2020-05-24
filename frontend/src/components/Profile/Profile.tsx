import React from 'react'
import './Profile.css'
import { GoogleApiWrapper, Map, GoogleAPI } from 'google-maps-react'

interface IMapProps{
    google: GoogleAPI
}

const Profile: React.FC<IMapProps> = props => {
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
                        height: '100%' }}  google={props.google} />
                </div>
                <div className="askings">

                </div>
                <div className="pendingAskings">

                </div>
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY || ''
})(Profile)