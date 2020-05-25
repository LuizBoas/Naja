import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppSatck = createStackNavigator();

import Login from './pages/Login';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Update from './pages/Update';
import Register from './pages/Register';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppSatck.Navigator screenOptions={{headerShown: false}}>
                <AppSatck.Screen name="Login" component={Login}/>
                <AppSatck.Screen name="Products" component={Products}/>
                <AppSatck.Screen name="Update" component={Update}/>
                <AppSatck.Screen name="Detail" component={Detail}/>
                <AppSatck.Screen name="Register" component={Register}/>
            </AppSatck.Navigator>
        </NavigationContainer>
    );

}