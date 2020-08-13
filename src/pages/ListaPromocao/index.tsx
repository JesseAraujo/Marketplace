import React, { useState } from 'react'
import { Text, View, Picker } from 'react-native'
import { ScrollView, RectButton, BorderlessButton } from 'react-native-gesture-handler'

import HeaderButton from '../../components/HeaderButton'
import Filters from '../../components/Filters'
import ProductsList from '../../components/ProductsList'

import styles from './styles'

function ListaPromocao() {
    const [selectedValue, setSelectedValue] = useState("");

    return (
        <View style={styles.container}>
            <HeaderButton />

            <ScrollView>
                <Filters />

                <View style={styles.sector}>
                    <Text style={styles.labelSector}>
                        Calçados
                   </Text>

                    <BorderlessButton>
                        <Text style={styles.viewMoreLabel}>
                            Ver mais +
                        </Text>
                    </BorderlessButton>
                </View>

                <ProductsList />


            </ScrollView>

        </View>
    )
}

export default ListaPromocao