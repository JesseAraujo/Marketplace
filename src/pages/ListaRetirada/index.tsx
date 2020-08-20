import React from 'react'
import { View, ScrollView } from 'react-native'

import Filters from '../../components/Filters'
import ListStores from '../../components/ListStore'

import styles from './styles'

function ListaRetirada() {
    return (
        <View style={styles.container}>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 16,
                }}
            >
                
                <Filters title='Encontre na cidade'/>

                <ListStores />


            </ScrollView>

        </View>
    )
}

export default ListaRetirada