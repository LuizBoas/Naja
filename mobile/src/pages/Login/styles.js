import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',  
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#44d9e6',
        marginLeft: "45%",
        marginBottom: 100,
        
        
        paddingHorizontal: 22,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: '#f1f1f1'
    },

    icone: {
        marginBottom: 0,
    },

    text:{
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#03989e'
    }
});