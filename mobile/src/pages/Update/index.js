import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import logoImg from '../../assets/logo/logo.png';
import back from '../../assets/back/back.png';
import phone from '../../assets/phone/phone.png';
import tv from '../../assets/tv/tv.png';
import eletro from '../../assets/eletro/eletro.png';
import videogames from '../../assets/videogames/videogames.png';
import check from '../../assets/check/check.png';

import api from '../../service/api.js';

export default function Update(){
    const navigation = useNavigation();
    const route = useRoute();
    const categoria = useState();

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

            <View style={styles.product}>
                <View style={styles.imageIcone}>
                    <Image 
                        style={styles.imageProducts}
                        source={{
                        uri: product.image,
                        }}
                    />
                    <View>
                        <Text style={styles.productsPropertyCodigo}>
                            Codª <Text style={styles.numCod}>{product.id}</Text>
                        </Text>
                        <Image source={product.tag === "Eletrodomésticos" ? eletro :
                        product.tag === "TVs" ? tv :
                        product.tag === "Celulares" ? phone: 
                        videogames} style={styles.tag}/>
                    </View>
                    
                 </View>

                <Text style={styles.productsProperty}>Nome:</Text>
                <Text style={styles.productsValue}>{product.name}</Text>

                <Text style={styles.productsProperty}>Cadastrado por:</Text>
                <Text style={styles.productsValue}>{product.user}</Text>
                
                <Text style={styles.productsProperty}>Quantidade:</Text>
                <View style={styles.inputAll}>
                    <TextInput
                        style={styles.productsInput}
                        placeholder={product.amount.toString()}
                        onChangeText={(text) => setAmount(text)}
                        value={amount}
                    />
                    <TouchableOpacity style={styles.action}  onPress={() => handleAmount(product.id)}>
                        <Image source= {check}/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.productsProperty} >Preço:</Text>
                    <View style={styles.inputAll}>
                    <TextInput
                        style={styles.productsInput}
                        placeholder={product.price.toString()}
                        onChangeText={(text) => setPrice(text)}
                        value={price}
                    />
                    <TouchableOpacity style={styles.action} onPress={() => handlePrice(product.id)}>
                        <Image source= {check}/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.productsProperty} >Imagem:</Text>
                <View style={styles.inputAll}>
                    <TextInput
                        style={styles.productsInput}
                        placeholder={product.image}
                        onChangeText={(text) => setImage(text)}
                        value={image}
                    />
                    <TouchableOpacity style={styles.action} onPress={() => handleImage(product.id)}>
                        <Image source= {check}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}