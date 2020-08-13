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
            <ScrollView horizontal={true}>
                <View style={styles.store}>
                    <View style={styles.groupStoreName}>
                        <Image source={logoImage} style={styles.logotImage} />
                        <Text style={styles.nameStore}>Centauro</Text>
                    </View>

                    <Image source={ProductImage} style={styles.productImage} />
                </View>

                <View style={styles.store}>
                    <View style={styles.groupStoreName}>
                        <Image source={logoImage} style={styles.logotImage} />
                        <Text style={styles.nameStore}>Centauro</Text>
                    </View>
                    <View style={styles.containerImageProducts}>
                        <Image source={ProductImage} style={styles.productImage} />
                    </View>
                </View>

                <View style={styles.store}>
                    <View style={styles.groupStoreName}>
                        <Image source={logoImage} style={styles.logotImage} />
                        <Text style={styles.nameStore}>Centauro</Text>
                    </View>
                    <View style={styles.containerImageProducts}>
                        <Image source={ProductImage} style={styles.productImage} />
                    </View>
                </View>

                <View style={styles.store}>
                    <View style={styles.groupStoreName}>
                        <Image source={logoImage} style={styles.logotImage} />
                        <Text style={styles.nameStore}>Centauro</Text>
                    </View>
                    <View style={styles.containerImageProducts}>
                        <Image source={ProductImage} style={styles.productImage} />
                    </View>
                </View>


            </ScrollView>
        </View >





    )
}

export default ProductsList