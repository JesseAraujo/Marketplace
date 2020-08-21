import React from 'react'

import styles from './styles'
import HeaderBack from '../../components/HeaderBack'
import InputText from '../../components/InputText'
import ButtonSimple from '../../components/ButtonSimple'
import { View } from 'react-native'

function Login() {
    return(
        <>
            <HeaderBack title='Cadastro de Usuário' />

            <View style={styles.container}>

                <InputText label='Nome Completo' placeholder='Nome Completo' secure={false}/>
                <InputText label='Telefone/ Celular' placeholder='(00) 00000-0000' secure={false}/>
                <InputText label='E-mail' placeholder='seuemail@email.com' secure={false}/>
                <InputText label='Senha' placeholder='*********' secure={true}/>
                <InputText label='Confirma Senha' placeholder='*********' secure={true}/>
                <ButtonSimple text='Salvar' page='Login'/>  
                
            </View>
        </>
    )
}

export default Login