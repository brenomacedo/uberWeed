import React, { useEffect, useState } from 'react'
import { IPosition, IUser } from '../../interfaces'
import Geolocation from '@react-native-community/geolocation'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import MapView, { Marker, MarkerProps, Callout } from 'react-native-maps'
import axios from 'axios'

const MakeAsking: React.FC = () => {
    
    const [position, setPosition] = useState<IPosition>({ latitude: 0, longitude: 0 })
    const [users, setUsers] = useState<IUser[]>([])
    const [modal, setModal] = useState<boolean>(true)

    useEffect(() => {
        Geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            setPosition({ latitude, longitude })
        }, () => {})

        getUsers('')
    }, [])

    const getUsers = async (query: string) => {
        const Users = await axios.get<IUser[]>(`/user/select?name=${query}`)
        setUsers([...Users.data])
    }
    
    const renderMarkers = () => {
        return users.map(user => (
            <Marker key={user.id} coordinate={{
                latitude: user.lat,
                longitude: user.lng
            }}>
                <Callout tooltip={true} style={styles.infoWindow}>
                    <View >
                        <Text style={styles.infoName}>{user.name}</Text>
                        <Text style={styles.infoDescription}>{user.description}</Text>
                    </View>
                </Callout>
            </Marker>
        ))
    }

    const modalClose = () => {
        setModal(false)
    }


    return (
            <View style={styles.map} >
                <MapView  region={{...position, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
                style={styles.mapView} showsUserLocation >
                    {renderMarkers()}
                </MapView>
                <View style={styles.searchBar}>
                    <TextInput style={styles.input} />
                    <TouchableOpacity style={styles.search} >
                        <Icon size={15} name='search' color='#fff' />
                    </TouchableOpacity>
                </View>
                <Modal onRequestClose={modalClose} animationType='slide' visible={modal} transparent={true}>
                    <View style={styles.modalWrapper}>
                        <View style={styles.modalInfo}>
                            <Text style={styles.modalName}>HELLO WORLD</Text>
                            <Text style={styles.modalDescription}>INFO OF MY HELLO WORLD</Text>
                        </View>
                    </View>
                </Modal>
            </View>
    )
}

const styles = StyleSheet.create({
    map: {
        backgroundColor: '#5dcfa3',
        height: '100%'
    },
    input: {
        height: 40,
        padding: 10,
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: 80,
        marginRight: 10,
        flex: 1
    },
    search: {
        height: 40,
        padding: 10,
        backgroundColor: '#5dcfa3',
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBar: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        padding: 10
    },
    mapView: {
        flex: 1
    },
    infoWindow: {
        backgroundColor: '#5dcfa3',
        padding: 10,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    infoName: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    infoDescription: {
        color: 'white',
        fontSize: 13
    },
    modalInfo: {
        backgroundColor: '#69d686',
        padding: 10,
        width: '70%'
    },
    modalName: {
        fontSize: 17,
        margin: 3,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalDescription: {
        fontSize: 15,
        margin: 3,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    }
})

export default MakeAsking