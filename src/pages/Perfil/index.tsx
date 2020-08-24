import React from 'react'
import { Text, View, Image } from 'react-native'
import { ScrollView, RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import { FontAwesome5, Ionicons } from '@expo/vector-icons'

import Header from '../../components/Header'

import imageProfile from '../../assets/images/avatar/avatar3.jpg'

import styles from './styles'

function Perfil() {
    const { navigate } = useNavigation()

    function handleNavigateToLogout() {
        navigate('Login')
    }

    function handleNavigateToEditProfile() {
        navigate('EditarPerfil')
    }

    function handleNavigateToFavorites() {
        navigate('Favoritos')
    }

    return (

        <>
            <Header title='' />

            <View style={styles.header}>

                <View style={styles.button}>
                    <RectButton onPress={handleNavigateToEditProfile} style={styles.buttonEdit}>
                        <FontAwesome5 name="edit" style={styles.iconEdit} />
                    </RectButton>
                </View>

                <View style={styles.profile}>
                    <Image source={imageProfile} style={styles.imageProfile} />

                    <Text style={styles.nameProfle}>
                        Jessé Brisola de Araujo
                    </Text>

                </View>
            </View>

            <View style={styles.container}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 16,
                    }}
                >

                    <RectButton onPress={handleNavigateToFavorites}>
                        <View style={styles.item}>
                            <Ionicons name="ios-heart" style={styles.iconItem} />

                            <Text style={styles.titleItem}>
                                Favoritos   {'\n'}
                                <Text style={styles.subTitle}>
                                    Meus locais favoritos
                                </Text>
                            </Text>
                        </View>
                    </RectButton>

                    <RectButton>
                        <View style={styles.item}>
                            <Ionicons name="ios-navigate" style={styles.iconItem} />

                            <Text style={styles.titleItem}>
                                Endereços   {'\n'}
                                <Text style={styles.subTitle}>
                                    Meus endereços de entrega
                                </Text>
                            </Text>
                        </View>
                    </RectButton>

                    <RectButton>
                        <View style={styles.item}>
                            <Ionicons name="ios-lock" style={styles.iconItem} />

                            <Text style={styles.titleItem}>
                                Alterar senha   {'\n'}
                                <Text style={styles.subTitle}>
                                    Alterar sua senha atual
                                </Text>
                            </Text>
                        </View>
                    </RectButton>

                    <RectButton style={styles.buttonLogout} onPress={handleNavigateToLogout}>
                        <Text style={styles.textLogout}>
                            Sair
                        </Text>
                    </RectButton>

                </ScrollView>
            </View>
        </>
    )
}

export default Perfil