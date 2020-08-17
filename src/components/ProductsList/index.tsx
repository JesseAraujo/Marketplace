import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'

import { Ionicons } from '@expo/vector-icons'

import ProductImage from '../../assets/images/centauro/products/shoes.png'
import logoImage from '../../assets/images/centauro/logos/logo.png'

import styles from './styles'

function ProductsList() {
    const [selectedValue, setSelectedValue] = useState("");

    return (


        <View style={styles.content}>
            <ScrollView 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >

                <View style={styles.store}>
                    <View style={styles.groupStoreName}>
                        <Image source={logoImage} style={styles.logotImage} />
                        <Text style={styles.nameStore}>Centauro</Text>
                    </View>

                    <Image source={ProductImage} style={styles.productImage} />

                    <View style={styles.informations}>
                        <Text style={styles.nameProduct}>Neque porro dfs s das das quisquam</Text>
                        <Text style={styles.costProduct}>R$ 110,90</Text>
                        <Text style={styles.oldCostProduct}>R$ 150,85</Text>
                        <Text style={styles.pay}>10 x 11,09 sem juros</Text>
                        <RectButton style={styles.buttonBuy}>
                            <Ionicons name="ios-cart" style={styles.iconButtonBuy}/>
                            <Text style={styles.textButtonBuy}>Comprar agora</Text>
                        </RectButton>
                    </View>
                </View>


                <View style={styles.store}>
                    <View style={styles.groupStoreName}>
                        <Image source={logoImage} style={styles.logotImage} />
                        <Text style={styles.nameStore}>Centauro</Text>
                    </View>

                    <Image source={ProductImage} style={styles.productImage} />

                    <View style={styles.informations}>
                        <Text style={styles.nameProduct}>Neque porro dfs s das das quisquam</Text>
                        <Text style={styles.costProduct}>R$ 110,90</Text>
                        <Text style={styles.oldCostProduct}>R$ 150,85</Text>
                        <Text style={styles.pay}>10 x 11,09 sem juros</Text>
                        <RectButton style={styles.buttonBuy}>
                            <Ionicons name="ios-cart" style={styles.iconButtonBuy}/>
                            <Text style={styles.textButtonBuy}>Comprar agora</Text>
                        </RectButton>
                    </View>
                </View>


                <View style={styles.store}>
                    <View style={styles.groupStoreName}>
                        <Image source={logoImage} style={styles.logotImage} />
                        <Text style={styles.nameStore}>Centauro</Text>
                    </View>

                    <Image source={ProductImage} style={styles.productImage} />

                    <View style={styles.informations}>
                        <Text style={styles.nameProduct}>Neque porro dfs s das das quisquam</Text>
                        <Text style={styles.costProduct}>R$ 110,90</Text>
                        <Text style={styles.oldCostProduct}>R$ 150,85</Text>
                        <Text style={styles.pay}>10 x 11,09 sem juros</Text>
                        <RectButton style={styles.buttonBuy}>
                            <Ionicons name="ios-cart" style={styles.iconButtonBuy}/>
                            <Text style={styles.textButtonBuy}>Comprar agora</Text>
                        </RectButton>
                    </View>
                </View>


                <View style={styles.store}>
                    <View style={styles.groupStoreName}>
                        <Image source={logoImage} style={styles.logotImage} />
                        <Text style={styles.nameStore}>Centauro</Text>
                    </View>

                    <Image source={ProductImage} style={styles.productImage} />

                    <View style={styles.informations}>
                        <Text style={styles.nameProduct}>Neque porro dfs s das das quisquam</Text>
                        <Text style={styles.costProduct}>R$ 110,90</Text>
                        <Text style={styles.oldCostProduct}>R$ 150,85</Text>
                        <Text style={styles.pay}>10 x 11,09 sem juros</Text>
                        <RectButton style={styles.buttonBuy}>
                            <Ionicons name="ios-cart" style={styles.iconButtonBuy}/>
                            <Text style={styles.textButtonBuy}>Comprar agora</Text>
                        </RectButton>
                    </View>
                </View>




            </ScrollView>
        </View >





    )
}

export default ProductsList