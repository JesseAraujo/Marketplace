import React from 'react'
import { View } from 'react-native'

import InputText from '../../components/InputText'
import HeaderBack from '../../components/HeaderBack'
import ButtonSimple from '../../components/ButtonSimple'

import styles from './styles'

function AlterarSenha() {
    
    return (

        <>
            <HeaderBack title='CPF' />

            <View style={styles.container}>
                <InputText label='CPF' placeholder='123.456.789-10' secure={false}/>
                <ButtonSimple text='Salvar' page='EditarPerfil'/>
                

            </View>
        </>


    )
}

export default AlterarSenha