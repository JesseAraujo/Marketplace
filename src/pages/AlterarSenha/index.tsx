import React from 'react'
import { View } from 'react-native'

import InputText from '../../components/InputText'
import HeaderBack from '../../components/HeaderBack'
import ButtonSimple from '../../components/ButtonSimple'

import styles from './styles'

function AlterarSenha() {
    
    return (

        <>
            <HeaderBack title='ALterar Senha' />

            <View style={styles.container}>
                <InputText label='Senha atual' placeholder='Digite a senha atual' secure={true} />

                <View style={styles.line}></View>

                <InputText label='Nova senha' placeholder='Digite uma nova senha' secure={true} />
                <InputText label='Confirma senha' placeholder='Confirme senha' secure={true} />
            </View>
            
            <ButtonSimple text='Alterar' page='Perfil' />
        </>


    )
}

export default AlterarSenha