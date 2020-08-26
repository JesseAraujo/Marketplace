import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 0,
        backgroundColor: '#fff',
        flex: 1,
    },

    adressContent: {
        borderWidth: 1,
        borderColor: '#EFEFEF',
        margin: 5,
        padding: 15,

        flexDirection: 'row',
        alignItems: 'center'
    },

    adressText: {
        width: '80%',
        marginLeft: 20
    },

    adress: {
        color: '#2C2C2C',
        fontSize: 15,
    },

    adressComplements: {
        color: '#707070',
        fontSize: 10,
    },

})

export default styles