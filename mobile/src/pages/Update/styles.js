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

    productsPropertyCodigo:{
        marginLeft: 15,
        marginTop: -5,
        marginBottom: 10,
        fontSize: 15,
        color: '#737380',
    },

    numCod: {
        fontWeight: 'bold'

    },
    tag:{
        marginLeft: 33,
        marginTop: -3
    },

    imageProducts: {
        borderRadius: 5,
        width: 120,
        height: 120,
        marginBottom: 15,
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

    productsInput: {
        marginTop: 1,
        fontSize: 15,
        marginBottom: 24,
        paddingLeft: 5,
        height: 45,
        width: '80%',
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderColor: '#23b3b8',
        borderBottomLeftRadius: 8,
       
    },

    inputAll: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },

    action: {
        marginTop: 1,
        backgroundColor: '#23b3b8',
        borderRadius: 1,
        height: 45,
        width: '25%',
        justifyContent: 'center',
        marginBottom: 24,
        alignItems: 'center'
    },
  
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    imageIcone:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    }
})