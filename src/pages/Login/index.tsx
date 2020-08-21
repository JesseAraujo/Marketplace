import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'

import InputText from '../../components/InputText'
import ButtonSimple from '../../components/ButtonSimple'

import styles from './styles'

function Login() {
    const { navigate } = useNavigation()


    function handleNavigateToResetPassword() {
        navigate('RecuperarSenhaEmail')
    }

    function handleNavigateToNewUser() {
        navigate('CadastroUsuarios')
    }
    
    return (
        <View style={styles.container}>
            
            <View style={styles.header} ></View>

            <View style={styles.content}>
                <InputText label='E-mail/CPF' placeholder='E-mail/ CPF' secure={false}/>
                <InputText label='Senha' placeholder='Senha' secure={true}/>


                <View style={styles.esqueceuSenhaCadastro}>
                    <Text style={styles.SenhaCadastro}>
                        Esqueceu sua senha?
                    </Text>
                    <RectButton onPress={handleNavigateToResetPassword}>
                        <Text style={styles.SenhaCadastroButton}>
                            Recupere aqui!
                        </Text>
                    </RectButton>
                </View>

                <View style={styles.esqueceuSenhaCadastro}>
                    <Text style={styles.SenhaCadastro}>
                        Novo aqui?
                    </Text>
                    <RectButton onPress={handleNavigateToNewUser}>
                        <Text style={styles.SenhaCadastroButton}>
                            Faça seu cadastro!
                        </Text>
                    </RectButton>
                </View>

                <ButtonSimple text='Entrar' page='MarketTabs'/>


                <Text style={styles.textOu} >ou</Text>

                <RectButton style={styles.facebook}>
                    <Ionicons name="logo-facebook" style={styles.icon} />
                    <Text style={styles.textButton} >Entre com Facebook</Text>
                </RectButton>

                <RectButton style={styles.google}>
                    <Ionicons name="logo-google" style={styles.icon} />
                    <Text style={styles.textButton} >Entre com Google</Text>
                </RectButton>



            </View>
        </View>
    )
}

export default Login