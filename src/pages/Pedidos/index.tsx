import React from 'react'
import { Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { Ionicons } from '@expo/vector-icons'

import Header from '../../components/Header'

import LogoImage from '../../assets/images/centauro/logos/logo.png'

import styles from './styles'


function Pedidos() {
    return (
        <>

        <Header title='Meus Pedidos'/>
            

            <View style={styles.container}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 16,
                    }}
                >

                    <View style={styles.request}>
                        <Text style={styles.dateRequest}>
                            Qua, 27 de fevereiro 2020
                        </Text>

                        <View style={styles.groupRequest}>
                            <View style={styles.headerRequest}>
                                <Image source={LogoImage} style={styles.logoRequest} />
                                <View style={styles.textsRequest}>
                                    <Text style={styles.titleStoreRequest}>
                                        Centauro
                                </Text>
                                    <Text style={styles.sectorStoreRequest}>
                                        Roupas - Calçados
                                </Text>
                                </View>
                            </View>

                            <Text style={styles.itemRequest}>
                                <Ionicons name="ios-checkmark" style={styles.iconCheck} />
                                {'   '} Bola de basquete Masculina 7.8 - Wilson
                            </Text>


                            <Text style={styles.payRequest}>
                                <Ionicons name="ios-cash" style={styles.iconCash} />
                                {'   '} Pagamento feito: <Text style={styles.howPay}>DINHEIRO</Text>
                            </Text>

                            <Text style={styles.total}>
                                R$ 170,80
                        </Text>
                        </View>
                    </View>




                    <View style={styles.request}>
                        <Text style={styles.dateRequest}>
                            Qua, 27 de fevereiro 2020
                        </Text>

                        <View style={styles.groupRequest}>
                            <View style={styles.headerRequest}>
                                <Image source={LogoImage} style={styles.logoRequest} />
                                <View style={styles.textsRequest}>
                                    <Text style={styles.titleStoreRequest}>
                                        Centauro
                                </Text>
                                    <Text style={styles.sectorStoreRequest}>
                                        Roupas - Calçados
                                </Text>
                                </View>
                            </View>

                            <Text style={styles.itemRequest}>
                                <Ionicons name="ios-checkmark" style={styles.iconCheck} />
                                {'   '} Bola de basquete Masculina 7.8 - Wilson
                            </Text>


                            <Text style={styles.payRequest}>
                                <Ionicons name="ios-card" style={styles.iconCash} />
                                {'   '} Pagamento feito: <Text style={styles.howPay}>CARTÃO DE CRÉDITO</Text>
                            </Text>

                            <Text style={styles.total}>
                                R$ 170,80
                        </Text>
                        </View>
                    </View>




                    <View style={styles.request}>
                        <Text style={styles.dateRequest}>
                            Qua, 27 de fevereiro 2020
                        </Text>

                        <View style={styles.groupRequest}>
                            <View style={styles.headerRequest}>
                                <Image source={LogoImage} style={styles.logoRequest} />
                                <View style={styles.textsRequest}>
                                    <Text style={styles.titleStoreRequest}>
                                        Centauro
                                </Text>
                                    <Text style={styles.sectorStoreRequest}>
                                        Roupas - Calçados
                                </Text>
                                </View>
                            </View>

                            <Text style={styles.itemRequest}>
                                <Ionicons name="ios-checkmark" style={styles.iconCheck} />
                                {'   '} Bola de basquete Masculina 7.8 - Wilson
                            </Text>


                            <Text style={styles.payRequest}>
                                <Ionicons name="ios-card" style={styles.iconCash} />
                                {'   '} Pagamento feito: <Text style={styles.howPay}>Aplicativo Marketplace</Text>
                            </Text>

                            <Text style={styles.total}>
                                R$ 170,80
                        </Text>
                        </View>
                    </View>

                </ScrollView>

            </View>
        </>
    )
}

export default Pedidos