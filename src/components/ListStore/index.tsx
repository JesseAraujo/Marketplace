import React from 'react'
import { View, Image, Text } from 'react-native'

import { Ionicons, Entypo } from '@expo/vector-icons'

import styles from './styles'

import logoImage from '../../assets/images/centauro/logos/logo.png'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

function ListStores() {
    const { navigate } = useNavigation()

    function HandleNagigateTo() {
        navigate('PaginaLoja')
    }

    return (

        <View style={styles.groupStore}>

            <RectButton style={styles.button} onPress={HandleNagigateTo}>
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
                                <Entypo name="location-pin" /> {' '} Av. Tal, 123 - Centro
                            </Text>

                            <Text style={styles.phone}>
                                <Entypo name="phone" /> {' '} (14) 3351-2542
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.star}>
                        <Ionicons name="ios-star" /> 4,5
                    </Text>
                </View>
            </RectButton>


            <RectButton style={styles.button} onPress={HandleNagigateTo}>
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
                                <Entypo name="location-pin" /> {' '} Av. Tal, 123 - Centro
                            </Text>

                            <Text style={styles.phone}>
                                <Entypo name="phone" /> {' '} (14) 3351-2542
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.star}>
                        <Ionicons name="ios-star" /> 4,5
                    </Text>
                </View>
            </RectButton>

            <RectButton style={styles.button} onPress={HandleNagigateTo}>
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
                                <Entypo name="location-pin" /> {' '} Av. Tal, 123 - Centro
                            </Text>

                            <Text style={styles.phone}>
                                <Entypo name="phone" /> {' '} (14) 3351-2542
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.star}>
                        <Ionicons name="ios-star" /> 4,5
                    </Text>
                </View>
            </RectButton>

            <RectButton style={styles.button} onPress={HandleNagigateTo}>
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
                                <Entypo name="location-pin" /> {' '} Av. Tal, 123 - Centro
                            </Text>

                            <Text style={styles.phone}>
                                <Entypo name="phone" /> {' '} (14) 3351-2542
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