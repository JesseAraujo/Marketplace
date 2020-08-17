import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 0,
        backgroundColor: '#fff',
        flex: 1,
    },

    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#285B7A',

        justifyContent: 'center',
        alignItems: 'center',
    },

    titleHeader: {
        color: '#fff',
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: '700',
        
        marginTop: 20,
    },

    request: {
        marginVertical: 5,
    },


    dateRequest: {
        color: '#272727',
        fontWeight: '700',
        fontSize: 12,
    },


    groupRequest: {
        borderWidth: 1,
        borderColor: '#EFEFEF',
        margin: 5,
        padding: 5,

        paddingBottom: 15,
    },

    headerRequest: {
        flexDirection: 'row',
        
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',

        paddingBottom: 5,
    },

    logoRequest: {
        width: 33,
        height: 33,
        marginRight: 10,
    },

    textsRequest: {},

    titleStoreRequest: {
        color: '#272727',
        fontSize: 18,
        fontWeight: '700',
    },

    sectorStoreRequest: {
        color: '#08080882',
        fontSize: 10,
        fontStyle: 'italic',
        top: -3,
    },

    itemRequest: {
        color: '#272727',
        fontSize: 10,
        margin: 10,

        alignItems: 'center',
    },

    iconCheck:{
        color: '#285B7A',
    },


    payRequest: {
        color: '#272727',
        fontSize: 10,
        marginHorizontal: 10,

        alignItems: 'center',
    },

    iconCash: {
        color: '#86BF82',
    },

    howPay: {
        color: '#218B19',
        textTransform: 'uppercase',
    },

    total: {
        color: '#E11F1F',
        fontSize: 14,
        fontWeight: '700',

        textAlign: 'right',
    }









})

export default styles