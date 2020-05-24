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

    product: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 20,
    },

    productsPropertyName:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    productsProperty:{
        marginTop: -14,
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    productsValue: {
        marginTop: 5,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    action: {
        backgroundColor: '#23b3b8',
        borderRadius: 8,
        
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    select: {
        height: 50, 
        width: '100%',
        marginBottom: 10 
    },

    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    }


})