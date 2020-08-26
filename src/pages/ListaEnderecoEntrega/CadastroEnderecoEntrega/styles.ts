import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 30,
        paddingBottom: 0,
        backgroundColor: '#fff',
        flex: 1,
    },

    groupInput: {
        flexDirection: 'row',

        marginTop: 20,

        borderTopWidth: 0.5,
        borderTopColor: '#08080824',

        paddingTop: 30,
    },

    itemLeft: {
        width: '75%',
        marginRight: '5%'
    },

    itemRigth: {
        width: '20%'
    }

})

export default styles