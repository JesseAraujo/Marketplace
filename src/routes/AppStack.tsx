import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MarketTabs from './MarketplaceTabs'
import Login from '../pages/Login'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>

                <Screen name="MarketTabs" component={MarketTabs} />

                <Screen name="Login" component={Login} />

            </Navigator>
        </NavigationContainer>
    )
}


export default AppStack