import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 0,
        backgroundColor: '#fff',
        flex: 1,
    },

    groupSearch: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 30,
        
        borderBottomWidth: 0.5,
        borderColor: '#08080824',

        alignItems: 'center',
        justifyContent: 'center',

        flexDirection: 'row',
    },

    inputSearch: {
        width: '80%',
        height: 33,

        borderWidth: 0.5,
        borderColor: '#08080824',

        paddingLeft: 20,

        borderRadius: 8,

        marginRight: 5,
    },

    buttonSearch: {
        width: 50,
        height: 33,
        
        backgroundColor: '#285B7A',

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 8,
    },

    iconSearch: {
        color: '#fff',
        fontSize: 18,
    },




    recentSearchGroup: {
        marginTop: 25,

        paddingBottom: 20,

        borderBottomWidth: 0.5,
        borderColor: '#08080824',
    },

    recentSearchTitle: {
        color: '#3B3B3B',
        fontSize: 15,
        fontWeight: 'bold',

        marginBottom: 14,

        textTransform: 'uppercase',
    },

    recentSearchItemList: {
        marginBottom: 6,
        paddingLeft: 10,

        flexDirection: 'row',
        alignItems: 'center',
    },

    recentSearchItemText: {
        color: '#C3C3C3',
        fontSize: 12,
        fontStyle: 'italic',
    },

    iconRecentSearch: {
        marginRight: 10,
        color: '#C3C3C3',
        fontSize: 15,
    },





    categoryGroup: {
        marginTop: 30,
    },

    groupButton: {
        padding: 10,
    },

    buttonCategory: {
        width: '100%',
        height: 42,

        marginBottom: 10,

        backgroundColor: '#CBD5DA',

        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton: {
        color: '#424242',
        fontSize: 12,

        textTransform: 'uppercase',
    },




})

export default styles