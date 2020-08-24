import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 0,
        backgroundColor: '#fff',
        flex: 1,
    },

    header: {
        width: '100%',
        backgroundColor: '#fff',

        borderBottomWidth: 0.5,
        borderColor: '#08080824',

        paddingTop: 30,
    },

    button: {
        alignItems: 'flex-end', 
        justifyContent: 'center',
        
    },

    buttonEdit: {
        fontSize: 20,
        marginTop: -20,
        marginRight: 15,
    },

    iconEdit: {
        fontSize: 15,
        color: '#939393',
    },

    profile: {
        width: '100%',

        marginTop: -40,

        justifyContent: 'center',
        alignItems:'center',
    },

    imageProfile: {
        width: 80,
        height: 80,
        borderRadius: 70,

        alignItems:'center',
    },

    nameProfle: {
        width: '100%',
        textAlign:'center',
        marginVertical: 20,

        color: '#272727',
        fontSize: 12,
        fontWeight: '700',
        textTransform: 'uppercase',
    },


    item: {
        flexDirection: 'row',
        paddingHorizontal: 41,
        paddingVertical:20,

        alignItems:'center',

        borderBottomWidth: 0.5,
        borderColor: '#08080824',        
    },


    iconItem: {
        color: '#939393',
        marginRight: 20,
        fontSize: 30,        
    },

    titleItem: {
        color: '#272727',
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase',
    },

    subTitle: {
        color: '#272727',
        fontSize: 10,
        fontWeight: 'normal',
        textTransform: 'none',
    },

    buttonLogout: {
        backgroundColor: '#B43737',
        marginTop: 30,

        height: 34,

        justifyContent: 'center',
        alignItems:'center',
    },

    textLogout: {
        color: '#fff',
        textTransform: 'uppercase',
    }


})

export default styles