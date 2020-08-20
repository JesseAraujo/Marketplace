import React from 'react'
import { View, Image, Text } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import styles from './styles'

import logoImage from '../../assets/images/centauro/logos/logo.png'
import { RectButton } from 'react-native-gesture-handler'

function ListStores() {
    return (

        <View style={styles.groupStore}>

            <RectButton style={styles.button}>
                <View style={styles.store}>
                    <Image source={logoImage} style={styles.imageLogo} />
                    <View style={styles.groupLabels}>
                        <Text style={styles.nameStore}>
                            Centauro
                        </Text>
                        <Text style={styles.sectorStore}>
                            Roupas - Calçados
                        </Text>

                        <View style={styles.groupAdress}>

                            <Text style={styles.adress}>
                                <Ionicons name="ios-navigate" /> {' '} Av. Tal, 123 - Centro
                            </Text>

                            <Text style={styles.phone}>
                                <Ionicons name="ios-call" /> {' '} Roupas - Calçados
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.star}>
                        <Ionicons name="ios-star" /> 4,5
                    </Text>
                </View>
            </RectButton>


            <RectButton style={styles.button}>
                <View style={styles.store}>
                    <Image source={logoImage} style={styles.imageLogo} />
                    <View style={styles.groupLabels}>
                        <Text style={styles.nameStore}>
                            Centauro
                        </Text>
                        <Text style={styles.sectorStore}>
                            Roupas - Calçados
                        </Text>

                        <View style={styles.groupAdress}>

                            <Text style={styles.adress}>
                                <Ionicons name="ios-navigate" /> {' '} Av. Tal, 123 - Centro
                            </Text>

                            <Text style={styles.phone}>
                                <Ionicons name="ios-call" /> {' '} Roupas - Calçados
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.star}>
                        <Ionicons name="ios-star" /> 4,5
                    </Text>
                </View>
            </RectButton>



            <RectButton style={styles.button}>
                <View style={styles.store}>
                    <Image source={logoImage} style={styles.imageLogo} />
                    <View style={styles.groupLabels}>
                        <Text style={styles.nameStore}>
                            Centauro
                        </Text>
                        <Text style={styles.sectorStore}>
                            Roupas - Calçados
                        </Text>

                        <View style={styles.groupAdress}>

                            <Text style={styles.adress}>
                                <Ionicons name="ios-navigate" /> {' '} Av. Tal, 123 - Centro
                            </Text>

                            <Text style={styles.phone}>
                                <Ionicons name="ios-call" /> {' '} Roupas - Calçados
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.star}>
                        <Ionicons name="ios-star" /> 4,5
                    </Text>
                </View>
            </RectButton>

            

            <RectButton style={styles.button}>
                <View style={styles.store}>
                    <Image source={logoImage} style={styles.imageLogo} />
                    <View style={styles.groupLabels}>
                        <Text style={styles.nameStore}>
                            Centauro
                        </Text>
                        <Text style={styles.sectorStore}>
                            Roupas - Calçados
                        </Text>

                        <View style={styles.groupAdress}>

                            <Text style={styles.adress}>
                                <Ionicons name="ios-navigate" /> {' '} Av. Tal, 123 - Centro
                            </Text>

                            <Text style={styles.phone}>
                                <Ionicons name="ios-call" /> {' '} Roupas - Calçados
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.star}>
                        <Ionicons name="ios-star" /> 4,5
                    </Text>
                </View>
            </RectButton>




        </View>

    )
}

export default ListStores