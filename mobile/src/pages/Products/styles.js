import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'

    },

    userNome: {
        fontSize: 15,
        marginLeft: 4,
        marginBottom: 1,
        marginTop: 15,
        color: '#000000',
        
    },

    userEmail: {
        fontSize: 15,
        marginLeft: 4,
        marginBottom: 16,
        color: '#000000',
       
    },

    productsList: {
        marginTop: 32,
    },

    products: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    productsProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    productsValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }, 
});




   