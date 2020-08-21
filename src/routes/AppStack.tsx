import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import MarketTabs from './MarketplaceTabs'

import RecuperarSenhaEmail from '../pages/RecuperarSenha/ConfirmarEmail'
import NovaSenha from '../pages/RecuperarSenha/NovaSenha'
import CadastroUsuarios from '../pages/CadastroUsuario'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>

                <Screen name="Login" component={Login} />

                <Screen name="MarketTabs" component={MarketTabs} />
                <Screen name="RecuperarSenhaEmail" component={RecuperarSenhaEmail} />
                <Screen name="NovaSenha" component={NovaSenha} />
                <Screen name="CadastroUsuarios" component={CadastroUsuarios} />

            </Navigator>
        </NavigationContainer>
    )
}


export default AppStack