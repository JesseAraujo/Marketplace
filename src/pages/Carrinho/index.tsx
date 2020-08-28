import React from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import RadioGroup, { Radio } from 'react-native-radio-input'


import HeaderBack from '../../components/HeaderBack'
import ButtonSimple from '../../components/ButtonSimple'

import logoImage from '../../assets/images/centauro/logos/logo.png'
import productImage from '../../assets/images/centauro/products/shoes.png'

import styles from './styles'

function Cart() {

    return (

        <>
            <HeaderBack title='Carrinho' />

            <View style={styles.container}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 16,
                    }}
                >

                    <View style={styles.store} >
                        <Image source={logoImage} style={styles.imageLogo} />
                        <View style={styles.groupLabels}>
                            <Text style={styles.nameStore}>
                                Centauro
                            </Text>
                            <Text style={styles.sectorStore}>
                                Roupas - Calçados
                            </Text>
                        </View>

                        <View style={styles.groupAdress}>
                            <Text style={styles.textAdress}>
                                <Entypo name="location-pin" style={styles.icon} /> Av. Tal, 123 - Centro
                            </Text>
                            <Text style={styles.textAdress}>
                                <Entypo name="phone" style={styles.icon} /> (14) 3351-2524
                            </Text>
                        </View>
                    </View>

                    <View style={styles.productItem}>
                        <Text style={styles.textSimple} >
                            <Text style={styles.textBold}>ITEM</Text> DO pedido
                        </Text>

                        <View style={styles.groupItem}>
                            <Image source={productImage} style={styles.imageProductItem} />
                            <Text style={styles.productName}>Neque porro quisquam
                                <Text style={styles.productDescription}> {'\n'}Tamanho: 44 | Preto</Text>
                            </Text>
                        </View>

                    </View>

                    <View style={styles.productItem}>
                        <Text style={styles.textSimple} >
                            <Text style={styles.textBold}>Forma</Text> de pagamento
                        </Text>

                        <RadioGroup>
                            <Radio iconName={"lens"} label={"The first option"} value={"A"} />
                            <Radio iconName={"lens"} label={"The first option"} value={"B"} />
                            <Radio iconName={"lens"} label={"The first option"} value={"C"} />
                        </RadioGroup>



                    </View>

                </ScrollView>


            </View>

            <ButtonSimple text='Continuar' page='' />
        </>


    )
}

export default Cart