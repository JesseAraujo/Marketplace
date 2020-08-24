import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'

import MarketTabs from './MarketplaceTabs'

import RecuperarSenhaEmail from '../pages/RecuperarSenha/ConfirmarEmail'
import NovaSenha from '../pages/RecuperarSenha/NovaSenha'

import CadastroUsuarios from '../pages/CadastroUsuario'

import Favoritos from '../pages/Favoritos'
import Enderecos from '../pages/ListaEnderecoEntrega'


import EditarPerfil from '../pages/EditarPerfil'
import EditarNome from '../pages/EditarPerfil/EditarNome'
import EditarCPF from '../pages/EditarPerfil/EditarCPF'
import EditarTelefone from '../pages/EditarPerfil/EditarTelefone'
import AlterarSenha from '../pages/AlterarSenha'

import Carrinho from '../pages/Carrinho'
import PaginaLoja from '../pages/PaginaLoja'

import ResultadoBusca from '../pages/ResultadoBusca'
import ListagemLojas from '../pages/ListagemLojas'


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

                <Screen name="EditarPerfil" component={EditarPerfil} />
                <Screen name="EditarNome" component={EditarNome} />
                <Screen name="EditarCPF" component={EditarCPF} />
                <Screen name="EditarTelefone" component={EditarTelefone} />

                <Screen name="Favoritos" component={Favoritos} />
                <Screen name="Enderecos" component={Enderecos} />
                <Screen name="AlterarSenha" component={AlterarSenha} />

                <Screen name="Carrinho" component={Carrinho} />

                <Screen name="PaginaLoja" component={PaginaLoja} />

                <Screen name="ResultadoBusca" component={ResultadoBusca} />

                <Screen name="ListagemLojas" component={ListagemLojas} />


            </Navigator>
        </NavigationContainer>
    )
}


export default AppStack