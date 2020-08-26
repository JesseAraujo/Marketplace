import React from 'react'
import { View } from 'react-native'

import InputText from '../../../components/InputText'
import HeaderBack from '../../../components/HeaderBack'
import ButtonSimple from '../../../components/ButtonSimple'

import styles from './styles'

function EditPhone() {

    return (

        <>
            <HeaderBack title='Telefone' />

            <View style={styles.container}>
                <InputText label='Telefone/Celular' placeholder='(14)12345-1234' secure={false} />
            </View>
            <ButtonSimple text='Salvar' page='EditarPerfil' />
        </>


    )
}

export default EditPhone