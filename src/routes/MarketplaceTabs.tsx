import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import ListaPromocao from '../pages/ListaPromocao'
import Busca from '../pages/Busca'
import Pedidos from '../pages/Pedidos'
import Perfil from '../pages/Perfil'


const { Navigator, Screen } = createBottomTabNavigator()

function MarketTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontSize: 10,
                    marginLeft: 10,
                },
                inactiveBackgroundColor: '#285B7A',
                activeBackgroundColor: '#fff',

                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',
            }}
        
        >
            <Screen 
                name="ListaPromocao" 
                component={ListaPromocao} 
                options={{ 
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-home" size={size} color={focused? '#285B7A' : color} />
                        )
                    }
                }}
            />
            <Screen 
                name="Busca" 
                component={Busca} 
                options={{ 
                    tabBarLabel: 'Busca',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-search" size={size} color={focused? '#285B7A' : color}/>
                        )
                    }
                }}
            />
            <Screen 
                name="Pedidos" 
                component={Pedidos} 
                options={{ 
                    tabBarLabel: 'Pedidos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-bookmark" size={size} color={focused? '#285B7A' : color}/>
                        )
                    }
                }}
            />
            <Screen 
                name="Perfil" 
                component={Perfil} 
                options={{ 
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-person" size={size} color={focused? '#285B7A' : color}/>
                        )
                    }
                }}
            />
        </Navigator>
    )
}

export default MarketTabs