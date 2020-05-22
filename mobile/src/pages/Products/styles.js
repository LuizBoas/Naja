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
        alignItems: 'center',
        
    },

    subHeader: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },

    subHeaderText: {
        marginLeft: 150,
        marginTop: 4,
        fontSize: 15,
        color: '#737380',
    },

   subHeaderTextBold: {
        fontWeight: 'bold'

    },

    userNome: {
        fontSize: 15,
        marginLeft: 4,
        marginBottom: 1,
        marginTop: 25,
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
        fontWeight: 'bold',
        marginLeft: -5,
    },
    
    listSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop : 10,
    },

    switch: {
        marginLeft: -8,
        marginRight: 8,
    },

    buttons:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: -8,
        marginTop : -10,

    },

    buttonDelete: {
       marginRight: -9, 
    },

    buttonArrow: {
        marginLeft: -2,
        marginRight: 4,
        alignItems: 'center',
    }
});




   