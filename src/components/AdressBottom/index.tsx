import React from 'react'
import { Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

function AdressBottom() {
    return (
            <View style={styles.header}>                
                <View style={styles.groupAdress}>
                    <Text style={styles.labelAdress}>
                        Endereço
                    </Text>
                    <Text style={styles.Adress}>
                        Av. São Sebastião, 125 - Jd. Europa
                    </Text>
                </View>
            </View>
    )
}

export default AdressBottom