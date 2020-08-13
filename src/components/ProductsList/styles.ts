import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        marginTop: 20,
    },

    store: {
        backgroundColor: '#F9F8F8',
        width: 159,
        height: 243,
        padding: 8,
        marginRight: 10,
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


})

export default styles