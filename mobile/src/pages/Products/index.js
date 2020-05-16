import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import api from '../../service/api.js';
import logoImg from '../../assets/logo.png';


import styles from './styles';

export default function Products(){
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);

    function navigationToUpdate(){
        navigation.navigate('Update');
    }

    async function loadProducts(){
        const response = await api.get('products');

        setProducts(response.data);
    }

    useEffect(() => {
        loadProducts();

    }, []);
    

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={ logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>. 
                </Text>
            </View>
                <Text style= {styles.userNome}>Goku da Silva </Text>
                <Text style= {styles.userEmail}>gokuzinhosdasnovinhas@gmail.com</Text>
            
            <FlatList 
                data={products}
                style={styles.productslist}
                keyExtractor={product => String(product.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: product })=> (
                    <View style={styles.products}>
                        <Image 
                            source={{uri: product.image.url}}
                        />

                        <Text style={styles.productsProperty}>Nome:</Text>
                        <Text style={styles.productsValue}>{product.name}</Text>

                        <Text style={styles.productsProperty}>Cartegoria:</Text>
                        <Text style={styles.productsValue}>{product.tag}</Text>

                        <Text style={styles.productsProperty}>Quantidade:</Text>
                        <Text style={styles.productsValue}>{product.amount}</Text>

                        <Text style={styles.productsProperty}>Preço:</Text>
                        <Text style={styles.productsValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.price)}</Text>
                    
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={navigationToUpdate}
                        >
                            <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>
                        </TouchableOpacity>
                    </View>

                )}
            />
        </View>

    );
}