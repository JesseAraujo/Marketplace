import React, { useState } from 'react'
import { Text, View, Picker } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { Ionicons } from '@expo/vector-icons'

import styles from './styles'

interface FiltersProps {
    title: string,
}

const Filters: React.FC<FiltersProps> = ({ title, children }) => {
    const [selectedValue, setSelectedValue] = useState("");

    return (
        <View style={styles.filterGroup}>
            <Text style={styles.filterGroupTitle}>
                {title}
            </Text>

            <View style={styles.filter}>

                <Picker
                    selectedValue={selectedValue}
                    style={styles.pickerSelect}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Tipo de loja" value="" />
                    <Picker.Item label="Restaurantes" value="Restaurantes" />
                    <Picker.Item label="Calçados" value="Calçados" />
                    <Picker.Item label="Roupas" value="Roupas" />
                    <Picker.Item label="Acessórios" value="Acessórios" />
                    <Picker.Item label="Lanchonetes" value="Lanchonetes" />
                    <Picker.Item label="Pizzaria" value="Pizzaria" />
                    <Picker.Item label="Informática/ Eletrônicos" value="Informática/ Eletrônicos" />
                    <Picker.Item label="Móveis" value="Móveis" />
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