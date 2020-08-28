import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        marginTop: 20,
    },

    store: {
        backgroundColor: '#F9F8F8',
        width: 159,
        padding: 8,
        marginRight: 10,
        borderRadius: 4,
        marginBottom: 20,
    },

    groupStoreName: {
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
    },

    logotImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },

    nameStore: {
        backgroundColor: '#FFFFFF',
        width: 94,
        height: 15,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        fontSize: 10,
        textAlign: 'center',
        color: '#173D53',
    },

    containerImageProducts: {
        justifyContent: 'center',
    },

    productImage: {
        width: 143,
        height: 135,
        resizeMode: 'contain',
        justifyContent: 'center',
        top: -15,
    },

    informations:{
        alignItems: 'center',
    },

    nameProduct:{
        color: '#3B3B3B',
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: '700',
        textAlign: 'center',
    },

    costProduct:{
        color: '#133C54',
        fontSize: 12,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        marginTop: 2,
    },

    oldCostProduct:{
        color: '#E02A2A',
        fontSize: 10,
        textTransform: 'uppercase',
        textDecorationLine: 'line-through',
    },

    pay:{
        color: '#3B3B3B',
        fontSize: 10,       
        marginTop: 10,
    },

    buttonBuy:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 10,
        
        backgroundColor: '#285B7A',
        

        paddingTop: 10,
        paddingBottom: 10,

        width: '100%',

        borderRadius: 8,
    },
    iconButtonBuy: {
        color: '#fff',
        fontSize: 15,
    },

    textButtonBuy:{
        color: '#fff',
        fontSize: 12,
    },


    


})

export default styles