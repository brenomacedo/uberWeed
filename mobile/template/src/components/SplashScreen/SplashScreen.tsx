import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('home')
        }, 2000)
    }, [])

    return (
        <View style={styles.background}>
            <Image resizeMode='contain' style={styles.image} source={require('../../assets/imgs/logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '70%'
    },
    background: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SplashScreen