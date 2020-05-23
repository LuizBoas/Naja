import React, { useState } from 'react';
import { Text, Image, View, TextInput, TouchableOpacity, CheckBox } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../service/api.js';

import logoImg from '../../assets/logo/logo.png';
import back from '../../assets/back/back.png';

import styles from './styles';

export default function Register(){
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const user = "user";

    function navigateBack(){
        navigation.goBack()
    }

    const navigation = useNavigation();

    function resetForm() {
        setName("");
        setTag("");
        setAmount("");
        setPrice("");
        setImage("");
    }

    async function handleProducts() {
        const data = {
            name,
            tag,
            amount,
            price,
            image
        };

        try {
            const response = await api.post('products', data, {
                headers: {
                    Authorization: user,
                }
            });
            alert(`Produto cadastrado com sucesso!`);
            resetForm();
        } catch (err) {
            alert('Erro no cadastro, tente novamente');            
        }

    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Image source={back}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.productsPropertyName}>Nome:</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1 }}
                placeholder="Digite o nome do produto"
                onChangeText={(text) => setName(text)}
                value={name}
            />

            <Text style={styles.productsProperty}>Tag:</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1 }}
                placeholder="Digite a categoria do produto"
                onChangeText={(text) => setTag(text)}
                value={tag}
            />

            <Text style={styles.productsProperty}>Quantidade:</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1 }}
                placeholder="Digite a quantidade"
                onChangeText={(text) => setAmount(text)}
                value={amount}
            />

            <Text style={styles.productsProperty}>Preço:</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1 }}
                placeholder="Digite o preço do produto"
                onChangeText={(text) => setPrice(text)}
                value={price}
            />

            <Text style={styles.productsProperty}>Imagem:</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1 }}
                placeholder="Digite a URL da imagem do produto"
                onChangeText={(text) => setImage(text)}
                value={image}
            />
            <TouchableOpacity onPress={() => handleProducts()}>
                <Text>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}