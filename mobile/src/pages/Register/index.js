import React, { useState } from 'react';
import { Text, Image, View, TextInput, TouchableOpacity, CheckBox, Picker } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../service/api.js';

import logoImg from '../../assets/logo/logo.png';
import back from '../../assets/back/back.png';

import styles from './styles';

export default function Register(){
    const [name, setName] = useState('');
    const [tag, setTag] = useState('TVs');
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
        setTag("TVs");
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
     
            <View style={styles.product}>
                <Text style={styles.productsPropertyName}>Nome:</Text>
                <TextInput
                    style={styles.productsValue}
                    placeholder="Digite o nome do produto"
                    onChangeText={(text) => setName(text)}
                    value={name}
                /> 

                <Text style={styles.productsProperty}>Categoria:</Text>
                <Picker
                     selectedValue={tag}
                     style={styles.select}
                     onValueChange={(itemValue) => setTag(itemValue)}
                >
                    <Picker.Item label="TVs" value="TVs" />
                    <Picker.Item label="Eletrodomésticos" value="Eletrodomésticos" />
                    <Picker.Item label="Celulares" value="Celulares" />
                    <Picker.Item label="Videogames" value="Videogames" />
                     
                </Picker>
        
                <Text style={styles.productsProperty}>Quantidade:</Text>
                <TextInput
                    style={styles.productsValue}
                    
                    placeholder="Digite a quantidade"
                    onChangeText={(text) => setAmount(text)}
                    value={amount}
                /> 

                <Text style={styles.productsProperty}>Preço:</Text>
                <TextInput
                    style={styles.productsValue}
                    placeholder="Digite o preço do produto"
                    onChangeText={(text) => setPrice(text)}
                    value={price}
                /> 

                <Text style={styles.productsProperty}>Imagem:</Text>
                <TextInput
                    style={styles.productsValue}
                    placeholder="Digite a URL da imagem do produto"
                    onChangeText={(text) => setImage(text)}
                    value={image}
                />
                <TouchableOpacity style={styles.action} onPress={() => handleProducts()}>
                    <Text style={styles.buttonText} >Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}