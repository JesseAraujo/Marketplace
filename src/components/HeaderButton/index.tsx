import React from 'react'
import { Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

function headerButton() {
    return (
            <View style={styles.header}>
                <View style={styles.groupButton}>
                    <RectButton style={styles.button}>
                        <Text style={styles.textButton}>
                            Promoção
                        </Text>
                    </RectButton>
                    <RectButton style={styles.button}>
                        <Text style={styles.textButton}>
                            Entrega
                        </Text>
                    </RectButton>
                    <RectButton style={styles.button}>
                        <Text style={styles.textButton}>
                            Retirada
                        </Text>
                    </RectButton>
                </View>
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

export default headerButton