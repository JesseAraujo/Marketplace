import React from 'react'
import { View } from 'react-native'

import InputText from '../../../components/InputText'
import HeaderBack from '../../../components/HeaderBack'
import ButtonSimple from '../../../components/ButtonSimple'

import styles from './styles'

function EditName() {

    return (

        <>
            <HeaderBack title='Nome' />

            <View style={styles.container}>
                <InputText label='Nome completo' placeholder='Seu nome completo' secure={false} />
            </View>
            <ButtonSimple text='Salvar' page='EditarPerfil' />
        </>


    )
}

export default EditName