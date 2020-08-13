import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 
    header: {
        paddingTop: 20,
        paddingBottom: 20,
    },

    groupButton: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
    },

    button: {
        width: '32%',
        backgroundColor: '#285B7A',
        borderRadius: 8,
        padding: 10,       
    },

    textButton: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 12,
        color: '#fff',
    },

    groupAdress: {
        marginTop: 20,
        alignItems: 'center',
    },

    labelAdress: {
        fontSize: 10,
        color: '#275671',
        textTransform: 'uppercase',
        fontWeight: '700',
    },

    Adress: {
        fontSize: 14,
        color: '#333',
    },


})


export default styles
