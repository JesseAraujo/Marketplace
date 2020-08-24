import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 0,
        backgroundColor: '#fff',
        flex: 1,
    },

    item: {
        flexDirection: 'row',
        paddingHorizontal: 41,
        paddingVertical:20,

        alignItems:'center',

        borderBottomWidth: 0.5,
        borderColor: '#08080824',        
    },

    titleItem: {
        color: '#272727',
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase',

        width: '100%'
    },

    subTitle: {
        color: '#272727',
        fontSize: 10,
        fontWeight: 'normal',
        textTransform: 'none',
    },


})

export default styles