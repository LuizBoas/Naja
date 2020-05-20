import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

import * as Google from "expo-google-app-auth";

const IOS_CLIENT_ID =
  "your-ios-client-id";
const ANDROID_CLIENT_ID =
  "327559392172-3s80ivlojjtiore2v7j41psk2kcffi09.apps.googleusercontent.com";

  export default function Login(){
    const navigation = useNavigation();

    function userData(name, email){
        navigation.navigate('Products', { name, email });
    }
    
    async function signInWithGoogle() {
        try {
            const result = await Google.logInAsync({
            iosClientId: IOS_CLIENT_ID,
            androidClientId: ANDROID_CLIENT_ID,
            scopes: ["profile", "email"]
        });

        if (result.type === "success") {
            userData(result.user.name, result.user.email);
            return result.accessToken;
        } else {
            return { cancelled: true };
        }
        
        } catch (e) {
            console.log('Login.js.js 30 | Error with login', e);
            return { error: true };
        }
    };

    return(
        <View style={styles.container}>
            <Button title="Login with Google" onPress={() => signInWithGoogle()} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});