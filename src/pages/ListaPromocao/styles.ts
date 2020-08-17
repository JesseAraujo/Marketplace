import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 0,
        backgroundColor: '#fff',
        flex: 1,
    },

    sector: {
        marginTop: 30,
    },

    sectorLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
