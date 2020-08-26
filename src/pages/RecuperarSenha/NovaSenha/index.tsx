import React from 'react'
import { View } from 'react-native'

import HeaderBack from '../../../components/HeaderBack'
import InputText from '../../../components/InputText'
import ButtonSimple from '../../../components/ButtonSimple'

import styles from './styles'

function Resetpassword() {
    return (
        <>
            <HeaderBack title='Nova Senha' />

            <View style={styles.container}>
                <InputText label='Nova Senha' placeholder='Digite uma nova senha' secure={true} />
                <InputText label='Confirma Senha' placeholder='Confirme senha' secure={true} />
            </View>
            
            <ButtonSimple text='Alterar Senha' page='Login' />
        </>
    )
}

export default Resetpassword