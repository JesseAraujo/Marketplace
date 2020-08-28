import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 0,
        backgroundColor: '#fff',
        flex: 1,
    },

    header: {
        flexDirection:'row',

        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',

        paddingBottom: 20,

        marginBottom: 20,
    },

    imageLogo: {
        width: 60,
        height: 60,
    },

    groupLabels:{
        marginLeft: 10,
    },

    nameStore:{
        color: '#272727',
        fontSize: 20,
        fontWeight: '700'
    },

    sectorStore:{
        color: '#08080882',
        fontSize: 10,
        fontStyle: 'italic',
        top: -3,
    },

    star:{
        marginLeft: 130,
        color: '#FFE45D',
    },

    informationsPay: {        
        backgroundColor: '#ADADAD82',
        padding: 5,
        marginBottom: 20,
    },

    informationsPayText: {     
        color: '#08080882',
        fontSize: 12,
        textAlign: 'center',
    },

    title: {
        textTransform: 'uppercase',
        color: '#3B3B3B',
    },

    titleBold: {
        fontWeight: '700'
    },

    

    groupItem: {
        borderWidth: 0.5,
        borderColor: '#08080824',

        padding: 10,

        flexDirection: 'row',
        alignItems: 'center',

        marginTop: 10
    },


    imageProductItem: {
        width: 110,
        height: 110,
    },

    informationsProduct: {
        width: 180,
        marginLeft: 10,
    },

    productName: {
        color: '#3B3B3B',
        fontWeight: '700',
        fontSize: 12,
        textTransform:'uppercase',
    },

    productDescription: {
        color: '#3B3B3B',
        fontSize: 11,
    },

    productPrice: {
        color: '#133C54',
        fontSize: 15,
        fontStyle: 'italic',
        marginVertical: 5
    },

    productDescriptionPrice: {
        color: '#3B3B3B',
        fontSize: 10,
    },

    buttonBuy:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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