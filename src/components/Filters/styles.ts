import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
    },

    filterGroup: {
        marginTop: 30,
    },

    filterGroupTitle: {
        fontSize: 17,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#3B3B3B',
    },

    filter: {
        flexDirection: 'row',
        marginTop: 2,
        justifyContent: 'space-between',
        alignItems: 'center',

        borderBottomWidth: 0.5,
        borderColor: '#08080824'
    },

    filterButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
        width: 100,
        height: 50,
        marginLeft: 4,
        backgroundColor: '#F9F8F8',
    },

    textButtonFilter: {
        marginLeft: 8,
    },

    pickerSelect: {
        width: '70%',
        height: 45,
        fontSize: 13,
    },


})

export default styles