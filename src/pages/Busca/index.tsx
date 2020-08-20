import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView, TextInput, RectButton } from 'react-native-gesture-handler'

import { Ionicons } from '@expo/vector-icons'

import Header from '../../components/Header'

import styles from './styles'

function Busca() {
    return (
        <>
            <Header title='Busca' />

            <View style={styles.container}>
                <View style={styles.groupSearch}>
                    <TextInput style={styles.inputSearch} placeholder="Item ou loja" placeholderTextColor="#c1bccc" />
                    <RectButton style={styles.buttonSearch}>
                        <Ionicons name="ios-search" style={styles.iconSearch} />
                    </RectButton>

                </View>


                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 16,
                    }}
                >

                    <View style={styles.recentSearchGroup}>
                        <Text style={styles.recentSearchTitle}>Buscas recentes</Text>

                        <View style={styles.recentSearchItemList}>
                            <Ionicons name="ios-timer" style={styles.iconRecentSearch} />
                            <Text style={styles.recentSearchItemText}>
                                Refrigerante
                            </Text>
                        </View>

                        <View style={styles.recentSearchItemList}>
                            <Ionicons name="ios-timer" style={styles.iconRecentSearch} />
                            <Text style={styles.recentSearchItemText}>
                                Refrigerante
                            </Text>
                        </View>

                        <View style={styles.recentSearchItemList}>
                            <Ionicons name="ios-timer" style={styles.iconRecentSearch} />
                            <Text style={styles.recentSearchItemText}>
                                Refrigerante
                            </Text>
                        </View>

                    </View>


                    <View style={styles.categoryGroup}>
                        <Text style={styles.recentSearchTitle}>Categorias</Text>

                        <View style={styles.groupButton}>
                            <RectButton style={styles.buttonCategory}>
                                <Text style={styles.textButton}>Promoções</Text>
                            </RectButton>

                            <RectButton style={styles.buttonCategory}>
                                <Text style={styles.textButton}>LANCHES</Text>
                            </RectButton>

                            <RectButton style={styles.buttonCategory}>
                                <Text style={styles.textButton}>VESTUÁRIO</Text>
                            </RectButton>

                            <RectButton style={styles.buttonCategory}>
                                <Text style={styles.textButton}>DOCES & BOLOS</Text>
                            </RectButton>

                            <RectButton style={styles.buttonCategory}>
                                <Text style={styles.textButton}>SORVETES</Text>
                            </RectButton>

                            <RectButton style={styles.buttonCategory}>
                                <Text style={styles.textButton}>JAPONESA</Text>
                            </RectButton>

                            <RectButton style={styles.buttonCategory}>
                                <Text style={styles.textButton}>PASTEL</Text>
                            </RectButton>

                            <RectButton style={styles.buttonCategory}>
                                <Text style={styles.textButton}>Salgados</Text>
                            </RectButton>

                            <RectButton style={styles.buttonCategory}>
                                <Text style={styles.textButton}>INFORMÁTICA</Text>
                            </RectButton>

                            <RectButton style={styles.buttonCategory}>
                                <Text style={styles.textButton}>PAPELARIA</Text>
                            </RectButton>

                            <RectButton style={styles.buttonCategory}>
                                <Text style={styles.textButton}>PET SHOP</Text>
                            </RectButton>

                            <RectButton style={styles.buttonCategory}>
                                <Text style={styles.textButton}>ESCRITÓRIO</Text>
                            </RectButton>
                        </View>



                    </View>



                </ScrollView>


            </View>

        </>
    )
}

export default Busca