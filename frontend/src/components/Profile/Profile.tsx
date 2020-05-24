import React from 'react'
import './Profile.css'


const Profile: React.FC = () => {
    return (
        <div className="profile-wrapper">
            <div className="top-bar">
                <div className="weed"></div>
                <h3>Profile Name</h3>
                <div className="weed"></div>
            </div>
            <div className="widgets-grid">
                <div className="map"></div>
                <div className="askings"></div>
                <div className="pendingAskings"></div>
            </div>
        </div>
    )
}

export default Profile