import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const MakeAsking: React.FC = () => {
    return (
            <View style={styles.map}>
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
        height: '100%',
        padding: 10
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
        bottom: 10,
        left: 10
    }
})

export default MakeAsking