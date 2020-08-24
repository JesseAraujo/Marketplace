import React from 'react'
import { View, ScrollView } from 'react-native'

import ListStores from '../../components/ListStore'

import styles from './styles'
import HeaderBack from '../../components/HeaderBack'

function Favoritos() {
    return (
        <>
            <HeaderBack title='Favoritos' />

            <View style={styles.container}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 16,
                    }}
                >

                    <ListStores />

                </ScrollView>

            </View>

        </>
    )
}

export default Favoritos