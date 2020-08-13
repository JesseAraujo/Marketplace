import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
    },

    sector: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
    },

    labelSector: {
        fontStyle: 'italic',
        color: '#285B7A',
        fontSize: 15,
    },

    viewMoreLabel: {
        fontSize: 10,
        color: '#397EA7',
    }

})


export default styles
