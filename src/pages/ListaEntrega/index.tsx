import React from 'react'
import { View, Image, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import ProductsList from '../../components/ProductsList'
import Carousel from '../../components/Carousel'
import Filters from '../../components/Filters'
import ListStores from '../../components/ListStore'

import styles from './styles'


function ListaEntrega() {

    return (
        <View style={styles.container}>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 16,
                }}
            >
                <Carousel />
                
                <ProductsList />

                <Filters title='Encontre na cidade'/>

                <ListStores />


            </ScrollView>

        </View>
    )
}

export default ListaEntrega