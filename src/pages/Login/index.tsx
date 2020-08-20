import React from 'react'
import { View, Text, TextInput } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>

            <View style={styles.content}>
                <Text style={styles.label}>Login</Text>
                <TextInput style={styles.input} />

                <Text style={styles.label} >Senha</Text>
                <TextInput style={styles.input} secureTextEntry={true} />


                <Text style={styles.esqueceuSenhaCadastro}>
                    Esqueceu sua senha? Recupere aqui
                </Text>
                <Text style={styles.esqueceuSenhaCadastro}>
                    Novo aqui? Faça seu cadastro :)
                </Text>

                <RectButton style={styles.loginButton}>
                    <Text style={styles.textButton} >Entrar</Text>
                </RectButton>


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