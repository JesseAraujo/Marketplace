import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
    },

    filterGroup: {
        marginTop: 20,
    },

    filterGroupTitle: {
        fontSize: 17,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#3B3B3B',
    },

    filterGroupSubTitle: {
        fontSize: 13,
    },

    SubTitleTextColor: {
        color: '#275671',
    },

    filter: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',


        borderTopWidth: 0.5,
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