import React from 'react'
import { View } from 'react-native'

import InputText from '../../../components/InputText'
import HeaderBack from '../../../components/HeaderBack'
import ButtonSimple from '../../../components/ButtonSimple'

import styles from './styles'

function ResetPassword() {

    return (

        <>
            <HeaderBack title='Recuperar Senha' />

            <View style={styles.container}>
                <InputText label='E-mail' placeholder='E-mail cadastrado' secure={false} />
            </View>
            
            <ButtonSimple text='Continuar' page='NovaSenha' />
        </>


    )
}

export default ResetPassword