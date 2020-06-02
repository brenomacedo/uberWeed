import React, { useEffect, useState } from 'react'
import { FaDoorOpen } from 'react-icons/fa'
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom'
import './Profile.css'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import { IMapProps, IProfileState, IUser, IAsking } from '../../interfaces'
import Asking from '../Asking/Asking'
import MarkerIcon from '../../assets/imgs/cannabis2.png'
import PendingAsking from '../PendingAskings/PendingAskings'


const Profile: React.FC<IMapProps> = props => {

    const socket = props.socket
    
    socket.once('newAskingToUser', (asking: IAsking) => {
        if(asking.userId === user.id) {
            
            setUser({...user, asking: [...user.asking, asking]})
        }
    })

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

    const renderAskings = () => {
        const acceptedAskings = user.asking.filter(item => item.pending === false)
        return acceptedAskings.map((item, index) => <Asking key={index} {...item} />)
    }

    const renderPendingAskings = () => {
        const pendingAskings = user.asking.filter(item => item.pending === true)
        return pendingAskings.map((item, index) => <PendingAsking key={index} {...item} />)
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
                        google={props.google}>
                            <Marker position={mapPosition} 
                            icon={{
                                url: MarkerIcon,
                                anchor: new google.maps.Point(16,16),
                                scaledSize: new google.maps.Size(16,16)
                            }} />
                    </Map>
                </div>
                <div className="askings">
                    {renderAskings()}
                </div>
                <div className="pendingAskings">
                    {renderPendingAskings()}
                </div>
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY || ''
})(Profile)