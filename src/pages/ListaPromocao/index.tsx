import React, { useState } from 'react'
import { Text, View, Picker } from 'react-native'
import { ScrollView, RectButton, BorderlessButton } from 'react-native-gesture-handler'


import Filters from '../../components/Filters'
import ProductsList from '../../components/ProductsList'
import Carousel from '../../components/Carousel'

import styles from './styles'

function ListaPromocao() {
    const [selectedValue, setSelectedValue] = useState("");

    return (
        <View style={styles.container}>
            
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 16,
                }}
            >
                
                <Filters title='Confira nas lojas da cidade' />

                <View style={styles.sector}>
                    <View style={styles.sectorLabel}>
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
                </View>


                <View style={styles.sector}>
                    <View style={styles.sectorLabel}>
                        <Text style={styles.labelSector}>
                            Roupas
                        </Text>

                        <BorderlessButton>
                            <Text style={styles.viewMoreLabel}>
                                Ver mais +
                        </Text>
                        </BorderlessButton>
                    </View>

                    <ProductsList />
                </View>              


                <View style={styles.sector}>
                    <View style={styles.sectorLabel}>
                        <Text style={styles.labelSector}>
                            Diversos
                        </Text>

                        <BorderlessButton>
                            <Text style={styles.viewMoreLabel}>
                                Ver mais +
                        </Text>
                        </BorderlessButton>
                    </View>

                    <ProductsList />
                </View>

            </ScrollView>

        </View>
    )
}

export default ListaPromocao