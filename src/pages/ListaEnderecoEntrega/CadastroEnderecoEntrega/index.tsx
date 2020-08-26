import React from 'react'

import styles from './styles'
import HeaderBack from '../../../components/HeaderBack'
import ButtonSimple from '../../../components/ButtonSimple'
import { View, ScrollView } from 'react-native'
import InputText from '../../../components/InputText'

function Login() {
    return (
        <>
            <HeaderBack title='Editar Endereço' />

            <View style={styles.container}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 16,
                    }}
                >
                    <InputText label='CEP' placeholder='12345-678' secure={false} />
                    <View style={styles.groupInput}>
                        <View style={styles.itemLeft}>
                            <InputText label='Endereço' placeholder='Rua/Av.' secure={false} />
                        </View>
                        <View style={styles.itemRigth}>
                            <InputText label='Numero' placeholder='123' secure={false} />
                        </View>
                    </View>
                    <InputText label='Complemento' placeholder='Apto/ Bloco' secure={false} />
                    <InputText label='Bairro' placeholder='Bairro' secure={false} />
                    <View style={styles.groupInput}>
                        <View style={styles.itemLeft}>
                            <InputText label='Cidade' placeholder='Cidade' secure={false} />
                        </View>
                        <View style={styles.itemRigth}>
                            <InputText label='UF' placeholder='SP' secure={false} />
                        </View>
                    </View>

                </ScrollView>
            </View>

            <ButtonSimple text='Salvar' page='Enderecos' />
        </>
    )
}

export default Login