import React, { useState } from 'react'
import { Text, View, Picker } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { Ionicons } from '@expo/vector-icons'

import styles from './styles'

function Filters() {
    const [selectedValue, setSelectedValue] = useState("");

    return (
            <View style={styles.filterGroup}>
                <Text style={styles.filterGroupTitle}>
                    Promoções
                    </Text>
                <Text style={styles.filterGroupSubTitle}>
                    <Text style={styles.SubTitleTextColor}>
                        Confira as promoções {' '}
                    </Text>
                        nas lojas da cidade
                    </Text>

                <View style={styles.filter}>

                    <Picker
                        selectedValue={selectedValue}
                        style={styles.pickerSelect}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Tipo de loja" value="tipo de loja" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>

                    <RectButton style={styles.filterButton}>
                        <Ionicons name="ios-funnel" />
                        <Text style={styles.textButtonFilter}>
                            Filtrar
                            </Text>
                    </RectButton>
                </View>
            </View>
    )
}

export default Filters