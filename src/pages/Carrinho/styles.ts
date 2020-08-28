import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 0,
        backgroundColor: '#fff',
        flex: 1,
    },

    store: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#08080824',

        alignItems: 'center',
    },


    imageLogo: {
        width: 28,
        height: 28,
    },

    groupLabels: {
        marginLeft: 10,
    },

    nameStore: {
        color: '#272727',
        fontSize: 15,
        fontWeight: '700',
    },

    sectorStore: {
        color: '#272727',
        fontSize: 9,
        fontWeight: '100',
        
        marginTop: -4,
    },

    groupAdress: {
        marginLeft: 50,
    },

    textAdress: {
        fontSize: 12,
    },

    icon: {
        fontSize: 12,
        color: '#225776',
    },

    productItem: {
        marginTop: 20
    },

    textSimple: {
        fontSize: 12,
        textTransform: 'uppercase'
    },

    textBold: {
        fontWeight: '700'
    },

    groupItem: {
        marginTop: 10,

        borderWidth: 0.5,
        borderColor: '#08080824',

        padding: 10,

        flexDirection: 'row',
    },

    imageProductItem: {
        width: 94,
        height: 94,
    },
    productName: {
        marginLeft: 10,

        color: '#3B3B3B',
        fontWeight: '700',
        fontSize: 12,
        textTransform:'uppercase',

        lineHeight: 20
    },

    productDescription: {
        fontWeight: 'normal',
        fontSize: 11,
        textTransform:'none',
    },



})

export default styles