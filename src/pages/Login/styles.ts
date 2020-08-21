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

        width: '90%',
        marginTop: -50,

        borderRadius: 8,
    },
 

    esqueceuSenhaCadastro: {
        flexDirection: 'row',
        alignItems:'center',
        marginTop: 5,
    },

    SenhaCadastro: {
        color: '#727272',
        fontSize: 12,
    },

    SenhaCadastroButton: {
        color: '#397EA7',
        marginLeft: 5,
    },

 

    textOu:{
        fontSize: 10,
        color: '#C4C4C4',
        textAlign: 'center',
        marginVertical: 10,
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