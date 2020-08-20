import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        alignItems: 'center'
    },

    header: {
        width: '100%',
        height: 158,
        backgroundColor: '#285B7A',
    },

    content: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingBottom: 0,
        backgroundColor: '#fff',       

        width: '80%',
        marginTop: -30,

        borderRadius: 8,
    },

    label: {
        color: '#5D5D5D',
        fontSize: 10,
    },

    input: {
        height: 33,

        borderWidth: 0.5,
        borderColor: '#08080824',

        paddingLeft: 20,

        marginTop: 10,
        marginBottom: 20,
    },

    esqueceuSenhaCadastro: {
        color: '#727272',
        fontSize: 12,
    },

    loginButton: {
        backgroundColor: '#285B7A',
        padding: 10,
        borderRadius: 8,

        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',

        marginTop: 10,
        marginBottom: 10,
    },

    facebook: {
        backgroundColor: '#406CC5',
        padding: 10,
        borderRadius: 8,

        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',

        marginTop: 10,
        marginBottom: 10,
    },

    google: {
        backgroundColor: '#CE7171',
        padding: 10,
        borderRadius: 8,

        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
    },

    textButton: {
        color: '#fff'
    },

    icon: {
        color: '#fff',
        fontSize: 15,
    },


})

export default styles