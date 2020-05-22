import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f1',
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    products: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 20,
    },

    productsPropertyCodigo:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    imageProducts: {
        borderRadius: 5,
        width: 120,
        height: 120,
    },

    productsProperty:{
        marginTop: -14,
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    productsValue: {
        marginTop: 1,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    }
})