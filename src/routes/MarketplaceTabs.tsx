import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, Entypo } from '@expo/vector-icons'


import Teste from './MarketplaceTabsTop'
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
                    flexDirection: 'column',
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
                    justifyContent: 'center',
                    marginTop: 5,
                },
                inactiveBackgroundColor: '#285B7A',
                activeBackgroundColor: '#fff',

                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',
            }}
        
        >
            <Screen 
                name="Teste" 
                component={Teste} 
                options={{ 
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="md-home" size={size} color={focused? '#285B7A' : color} />
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
                            <Ionicons name="md-search" size={size} color={focused? '#285B7A' : color}/>
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
                            <Entypo name="ticket" size={size} color={focused? '#285B7A' : color}/>
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
                            <Ionicons name="md-person" size={size} color={focused? '#285B7A' : color}/>
                        )
                    }
                }}
            />
        </Navigator>
    )
}

export default MarketTabs