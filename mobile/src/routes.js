import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppSatck = createStackNavigator();


import Prodructs from './pages/Products';
import Update from './pages/Update';
import Register from './pages/Register';


export default function Routes() {
    return (
        <NavigationContainer>
            <AppSatck.Navigator screenOptions={{headerShown: false}}>
                
                <AppSatck.Screen name="Prodructs" component={Prodructs}/>
                <AppSatck.Screen name="Update" component={Update}/>
                <AppSatck.Screen name="Register" component={Register}/>
            </AppSatck.Navigator>
        </NavigationContainer>
    );

}