import React from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, RectButton } from 'react-native-gesture-handler'

import HeaderBack from '../../components/HeaderBack'

import styles from './styles'
import ButtonSimple from '../../components/ButtonSimple';

function Enderecos() {
    return (
        <>
            <HeaderBack title='Endereço de entrega' />

            <View style={styles.container}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 16,
                    }}
                >

                    <View style={styles.adressContent}>
                        <MaterialIcons name="my-location" size={24} color="black" />
                        <View style={styles.adressText}>
                            <Text style={styles.adress}>
                                Av. São Sebastião, 125 {'\n'}
                                <Text style={styles.adressComplements}>
                                    Jd. Europa, Piraju - SP {'\n'}
                                    complemento
                                </Text>
                            </Text>
                        </View>
                        <RectButton>
                            <MaterialCommunityIcons name="delete-circle" size={24} color="red" />
                        </RectButton>
                    </View>


                </ScrollView>
            </View>
            
            <ButtonSimple text='Alterar' page='CadastroEnderecoEntrega' />
        </>
    )
}

export default Enderecos