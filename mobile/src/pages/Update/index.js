import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import logoImg from '../../assets/logo/logo.png';
import back from '../../assets/back/back.png';

import api from '../../service/api.js';

export default function Update(){
    const navigation = useNavigation();
    const route = useRoute();

    const product = route.params.product;

    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const user = "user";

    function navigateBack(){
        navigation.goBack()
    }

    function resetForm() {
        setName("");
        setTag("");
        setAmount("");
        setPrice("");
        setImage("");
    }

    async function handleAmount(id) {
        const data = {
            amount,
        };

        try {
            await api.put(`products/${id}/setAmount`, data);
            alert(`Quantidade atualizada!`);
            resetForm()
        } catch (err) {
            console.log(err);
            alert('Erro em atualizar quantidade, tente novamente');
        }
    }

    async function handlePrice(id) {
        const data = {
            price,
        };

        try {
            await api.put(`products/${id}/setPrice`, data);
            alert(`Preço atualizado!`);
            resetForm()
        } catch (err) {
            console.log(err);
            alert('Erro em atualizar preço, tente novamente');
        }
    }

    async function handleImage(id) {
        const data = {
            image,
        };

        try {
            await api.put(`products/${id}/setImage`, data);
            alert(`Imagem atualizada!`);
            resetForm()
        } catch (err) {
            console.log(err);
            alert('Erro em atualizar imagem, tente novamente');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Image source={back}/>
                </TouchableOpacity>
            </View>

            <Image 
                    style={styles.imageProducts}
                    source={{
                    uri: product.image,
                    }}
                />

            <Text style={styles.productsPropertyCodigo}>Código:</Text>
            <Text style={styles.productsValue}>{product.id}</Text>
                
            <Text style={styles.productsProperty}>Nome:</Text>
            <Text style={styles.productsValue}>{product.name}</Text>

            <Text style={styles.productsProperty}>Cadastrado por:</Text>
            <Text style={styles.productsValue}>{product.user}</Text>

            <Text>Quantidade:</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1 }}
                placeholder={product.amount.toString()}
                onChangeText={(text) => setAmount(text)}
                value={amount}
            />
            <TouchableOpacity style={{ margin: 5, border: 1 }} onPress={() => handleAmount(product.id)}>
                <Text>Atualizar quantidade</Text>
            </TouchableOpacity>

            <Text>Preço:</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1 }}
                placeholder={product.price.toString()}
                onChangeText={(text) => setPrice(text)}
                value={price}
            />
            <TouchableOpacity onPress={() => handlePrice(product.id)}>
                <Text>Atualizar Preço</Text>
            </TouchableOpacity>

            <Text>Imagem:</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1 }}
                placeholder={product.image}
                onChangeText={(text) => setImage(text)}
                value={image}
            />
            <TouchableOpacity onPress={() => handleImage(product.id)}>
                <Text>Atualizar Imagem</Text>
            </TouchableOpacity>
        </View>
    );
}