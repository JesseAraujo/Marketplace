import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Tab, Tabs, Text, TabHeading, Header } from 'native-base';

import ListaPromocao from '../pages/ListaPromocao';
import ListaEntrega from '../pages/ListaEntrega';
import AdressBottom from '../components/AdressBottom';
import ListaRetirada from '../pages/ListaRetirada';

export default class App extends Component {

    render() {
        return (
<>
            <Container>
                <Header androidStatusBarColor="#133C54" style={styles.header}/>

                <Tabs initialPage={0}>
                    <Tab heading={<TabHeading style={styles.tabHeading} ><Text>Promoção</Text></TabHeading>}>
                        <View style={styles.container}>
                            <ListaPromocao />
                        </View>
                    </Tab>
                    <Tab heading={<TabHeading style={styles.tabHeading} ><Text>Entrega</Text></TabHeading>}>
                        <View style={styles.container}>
                            <ListaEntrega />
                        </View>
                    </Tab>
                    <Tab heading={<TabHeading style={styles.tabHeading} ><Text>Retirada</Text></TabHeading>}>
                        <View style={styles.container}>
                            <ListaRetirada />
                        </View>
                    </Tab>
                </Tabs>
            </Container>

            <AdressBottom />
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: '#285B7A',
        marginTop:-36
    },

    tabHeading: {
        backgroundColor: '#285B7A',
        borderWidth: 0
    }
});