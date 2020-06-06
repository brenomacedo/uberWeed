import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from '../SplashScreen/SplashScreen'
import MakeAsking from '../MakeAsking/MakeAskings'

const Routes = () => {

    const StackNavigator = createStackNavigator()

    return (
        <NavigationContainer>
            <StackNavigator.Navigator headerMode='none'>
                <StackNavigator.Screen component={SplashScreen} name='splash' />
                <StackNavigator.Screen component={MakeAsking} name='home' />
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default Routes