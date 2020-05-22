import React from 'react';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import logoImg from '../../assets/logo/logo.png';
import back from '../../assets/back/back.png';


export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const product = route.params.product;

    function navigateBack(){
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Image source={back}/>
                </TouchableOpacity>
            </View>

            <View style={styles.products}>
                <Image 
                    source={{uri: product.image.url}} //nao ta pegando ainda
                />

                <Text style={styles.productsProperty}>Código:</Text>
                <Text style={styles.productsValue}>{product.id}</Text>
                
                <Text style={styles.productsProperty}>Nome:</Text>
                <Text style={styles.productsValue}>{product.name}</Text>

                <Text style={styles.productsProperty}>Cartegoria:</Text>
                <Text style={styles.productsValue}>{product.tag}</Text>

                <Text style={styles.productsProperty}>Quantidade:</Text>
                <Text style={styles.productsValue}>{product.amount}</Text>

                <Text style={styles.productsProperty}>Preço:</Text>
                <Text style={styles.productsValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.price)}</Text>

                <Text style={styles.productsProperty}>Cadastrado por:</Text>
                <Text style={styles.productsValue}>{product.user}</Text>
            </View>
        </View>
    );
}