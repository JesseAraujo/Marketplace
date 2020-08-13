import React from 'react'
import { Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import {useNavigation} from '@react-navigation/native'

import styles from './styles'

function Landing() {
    const { navigate } = useNavigation()

    function Load() {
        navigate('MarketTabs')
    }

    return (
       
                <View style={styles.groupButton}>
                    <RectButton style={styles.button} onPress={Load}>
                        <Text style={styles.textButton}>
                            Entrar
                        </Text>
                    </RectButton>                    
                </View>
                
    )
}

export default Landing