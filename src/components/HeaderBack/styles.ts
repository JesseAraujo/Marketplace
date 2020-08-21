import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#285B7A',

        justifyContent: 'center',
        alignItems: 'center',
    },


    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: '90%'        
    },

    button: {
        marginTop: 20
    },

    iconBak: {
        fontSize: 20,
        color: '#fff',
    },

    titleHeader: {
        color: '#fff',
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: '700',
        
        marginTop: 20,
    },

})

export default styles