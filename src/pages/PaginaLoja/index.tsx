import React from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { Ionicons, Entypo } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import HeaderBack from '../../components/HeaderBack'
import ProductsList from '../../components/ProductsList'

import imageLogo from '../../assets/images/centauro/logos/logo.png'
import imageProduct from '../../assets/images/centauro/products/shoes.png'

import styles from './styles'

function StorePage() {

    return (
        <>
            <HeaderBack title='' />

            <View style={styles.container}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 16,
                    }}
                >

                    <View style={styles.header}>
                        <Image source={imageLogo} style={styles.imageLogo} />
                        <View style={styles.groupLabels}>
                            <Text style={styles.nameStore}>
                                Centauro
                            </Text>
                            <Text style={styles.sectorStore}>
                                Roupas - Calçados
                            </Text>
                        </View>
                        <Text style={styles.star}>
                            <Ionicons name="ios-star" /> 4,5
                        </Text>
                    </View>

                    <RectButton style={styles.informationsPay}>
                        <Text style={styles.informationsPayText}>
                            Informações | Formas de pagamento
                        </Text>
                    </RectButton>

                    <Text style={styles.title}>
                        <Text style={styles.titleBold}>Promoções</Text> da loja
                    </Text>

                    <ProductsList />

                    <Text style={styles.title}>
                        <Text style={styles.titleBold}>Produtos</Text> disponíveis
                    </Text>


                    <View style={styles.groupItem}>
                        <Image source={imageProduct} style={styles.imageProductItem} />
                        <View style={styles.informationsProduct}>
                            <Text style={styles.productName}>Neque porro quisquam</Text>
                            <Text style={styles.productDescription}> Tamanho: 44 | Preto</Text>
                            <Text style={styles.productPrice}> R$ 110,90</Text>
                            <Text style={styles.productDescriptionPrice}> 10 x 11,09 sem juros</Text>

                            <RectButton style={styles.buttonBuy}>
                                <Ionicons name="ios-cart" style={styles.iconButtonBuy} />
                                <Text style={styles.textButtonBuy}>Comprar agora</Text>
                            </RectButton>
                        </View>
                    </View>
                    

                    <View style={styles.groupItem}>
                        <Image source={imageProduct} style={styles.imageProductItem} />
                        <View style={styles.informationsProduct}>
                            <Text style={styles.productName}>Neque porro quisquam</Text>
                            <Text style={styles.productDescription}> Tamanho: 44 | Preto</Text>
                            <Text style={styles.productPrice}> R$ 110,90</Text>
                            <Text style={styles.productDescriptionPrice}> 10 x 11,09 sem juros</Text>

                            <RectButton style={styles.buttonBuy}>
                                <Ionicons name="ios-cart" style={styles.iconButtonBuy} />
                                <Text style={styles.textButtonBuy}>Comprar agora</Text>
                            </RectButton>
                        </View>
                    </View>


                    <View style={styles.groupItem}>
                        <Image source={imageProduct} style={styles.imageProductItem} />
                        <View style={styles.informationsProduct}>
                            <Text style={styles.productName}>Neque porro quisquam</Text>
                            <Text style={styles.productDescription}> Tamanho: 44 | Preto</Text>
                            <Text style={styles.productPrice}> R$ 110,90</Text>
                            <Text style={styles.productDescriptionPrice}> 10 x 11,09 sem juros</Text>

                            <RectButton style={styles.buttonBuy}>
                                <Ionicons name="ios-cart" style={styles.iconButtonBuy} />
                                <Text style={styles.textButtonBuy}>Comprar agora</Text>
                            </RectButton>
                        </View>
                    </View>


                </ScrollView>

            </View>
        </>
    )
}

export default StorePage