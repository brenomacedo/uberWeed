import React, { useEffect, useState } from 'react'
import { IPosition, IUser } from '../../interfaces'
import Geolocation from '@react-native-community/geolocation'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import MapView, { Marker } from 'react-native-maps'
import axios from 'axios'

const MakeAsking: React.FC = () => {
    
    const [position, setPosition] = useState<IPosition>({ latitude: 0, longitude: 0 })
    const [users, setUsers] = useState<IUser[]>([])

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


    return (
            <View style={styles.map}>
                <MapView  region={{...position, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
                style={styles.mapView} showsUserLocation >
                    
                </MapView>
                <View style={styles.searchBar}>
                    <TextInput style={styles.input} />
                    <TouchableOpacity style={styles.search}>
                        <Icon size={15} name='search' color='#5dcfa3' />
                    </TouchableOpacity>
                </View>
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
        backgroundColor: 'white',
        borderRadius: 80,
        marginRight: 10,
        flex: 1
    },
    search: {
        height: 40,
        padding: 10,
        backgroundColor: '#fff',
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
    }
})

export default MakeAsking