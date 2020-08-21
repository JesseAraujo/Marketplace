import React from 'react'
import { View } from 'react-native'

import HeaderBack from '../../../components/HeaderBack'
import InputText from '../../../components/InputText'
import ButtonSimple from '../../../components/ButtonSimple'

import styles from './styles'

function Resetpassword() {
    return(
        <>
            <HeaderBack title='Nova Senha' />

            <View style={styles.container}>
                <InputText label='Nova Senha' placeholder='Digite uma nova senha' secure={false}/>
                <InputText label='Confirma Senha' placeholder='Confirme senha' secure={false}/>
                <ButtonSimple text='Alterar Senha' page='Login'/>  
            </View>
        </>
    )
}

export default Resetpassword