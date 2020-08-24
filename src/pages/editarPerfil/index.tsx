import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { Text, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

import HeaderBack from '../../components/HeaderBack'

import styles from './styles'


function EditProfile() {
    const { navigate } = useNavigation()

    function handleNavigateToEditName() {
        navigate('EditarNome')
    }

    function handleNavigateToEditCPF() {
        navigate('EditarCPF')
    }

    function handleNavigateToEditPhone() {
        navigate('EditarTelefone')
    }


    return (
        <>
            <HeaderBack title='Editar Dados' />

            <View style={styles.container}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 16,
                    }}
                >

                    <RectButton onPress={handleNavigateToEditName}>
                        <View style={styles.item}>
                            <Text style={styles.titleItem}>
                                Nome Completo   {'\n'}
                                <Text style={styles.subTitle}>
                                    Jessé Brisola de Araujo
                                </Text>
                            </Text>

                            <AntDesign name="right" size={15} color="black" />
                        </View>
                    </RectButton>

                    <RectButton onPress={handleNavigateToEditCPF}>
                        <View style={styles.item}>
                            <Text style={styles.titleItem}>
                                CPF   {'\n'}
                                <Text style={styles.subTitle}>
                                    440.697.878-01
                                </Text>
                            </Text>

                            <AntDesign name="right" size={15} color="black" />
                        </View>
                    </RectButton>

                    <RectButton onPress={handleNavigateToEditPhone}>
                        <View style={styles.item}>
                            <Text style={styles.titleItem}>
                                Telefone   {'\n'}
                                <Text style={styles.subTitle}>
                                    (14)12345-1234
                                </Text>
                            </Text>

                            <AntDesign name="right" size={15} color="black" />
                        </View>
                    </RectButton>



                    <View style={styles.item}>
                        <Text style={styles.titleItem}>
                            E-mail   {'\n'}
                            <Text style={styles.subTitle}>
                                exemplo@exemplo.com.br
                            </Text>
                        </Text>
                    </View>

                </ScrollView>
            </View>
        </>
    )
}

export default EditProfile