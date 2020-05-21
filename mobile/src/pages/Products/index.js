import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Alert, StyleSheet, Switch } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../service/api.js';
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Products(){
    const route = useRoute(); 
    const navigation = useNavigation();

    const [products, setProducts] = useState([]);
    const [allproducts, setallProducts] = useState([])
    
    //const name = route.params.name;
    //const email = route.params.email;

    const [checkedTV, setcheckedTV] = useState(true);
    const [checkedEL, setcheckedEL] = useState(true);
    const [checkedVG, setcheckedVG] = useState(true);
    const [checkedCL, setcheckedCL] = useState(true);

    const handleChangeTV = () => {
        setcheckedTV(previousState => !previousState);
        setProducts(allproducts);
        
        if(!checkedTV !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "TVs"))
            });
        }
        if(checkedEL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Eletrodomésticos"));
            });
        }
        if(checkedVG !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Videogames"));
            });
        }
        if(checkedCL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Celulares"));
            });
        }
    }

    const handleChangeEL = () => {
        setcheckedEL(previousState => !previousState);
        setProducts(allproducts);
        
        if(!checkedEL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Eletrodomésticos"))
            });
        }
        if(checkedTV !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "TVs"));
            });
        }
        if(checkedVG !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Videogames"));
            });
        }
        if(checkedCL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Celulares"));
            });
        }
    }

    const handleChangeCL = () => {
        setcheckedCL(previousState => !previousState);
        setProducts(allproducts);
        
        if(!checkedCL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Celulares"))
            });
        }
        if(checkedTV !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "TVs"));
            });
        }
        if(checkedVG !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Videogames"));
            });
        }
        if(checkedEL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Eletrodomésticos"));
            });
        }
    }

    const handleChangeVG = () => {
        setcheckedVG(previousState => !previousState);
        setProducts(allproducts);
        
        if(!checkedVG !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Videogames"))
            });
        }
        if(checkedTV !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "TVs"));
            });
        }
        if(checkedEL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Eletrodomésticos"));
            });
        }
        if(checkedCL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Celulares"));
            });
        }
    }

    function navigationToUpdate(product){
        navigation.navigate('Update', { product });
    }

    async function confirmDelete(id) {
        Alert.alert(
            "Excluir:",
            "Você realmente deseja remover este item?",
            [
                { text: "Sim", onPress: () => (handleDeleteProduct(id)) },
                { text: "Cancelar", onPress: () => console.log("Cancel Pressed")}
              
            ],
            { cancelable: false }
          );
        
    }

    async function handleDeleteProduct(id) {
        await api.delete(`products/${id}`);
        setProducts(products.filter(products => products.id !== id)); 

    }
    
    async function loadProducts(){
        const response = await api.get('products');

        setProducts(response.data);
        setallProducts(response.data);
    }

    function logOut() {
        navigation.navigate('Login');
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
                <Text style= {styles.userNome}>{ "name" }</Text>
                <Text style= {styles.userEmail}>{ "email" }</Text>
                <TouchableOpacity onPress={() => logOut()}>
                    <Text>LogOut</Text>
                </TouchableOpacity>
            <View style={styles.switch}>
                <Text>Tv</Text>
                <Switch 
                    trackColor={{ false: "#95a5a6", true: "#2c3e50" }}
                    thumbColor={!checkedTV ? "#7f8c8d" : "#f1c40f"}
                    onValueChange={handleChangeTV}
                    value={checkedTV}
                />
                <Text>Eletrodomesticos</Text>
                <Switch 
                    trackColor={{ false: "#95a5a6", true: "#2c3e50" }}
                    thumbColor={!checkedEL ? "#7f8c8d" : "#f1c40f"}
                    onValueChange={handleChangeEL}
                    value={checkedEL}
                />
                <Text>Celulares</Text>
                <Switch 
                    trackColor={{ false: "#95a5a6", true: "#2c3e50" }}
                    thumbColor={!checkedCL ? "#7f8c8d" : "#f1c40f"}
                    onValueChange={handleChangeCL}
                    value={checkedCL}
                />
                <Text>VideoGames</Text>
                <Switch 
                    trackColor={{ false: "#95a5a6", true: "#2c3e50" }}
                    thumbColor={!checkedVG ? "#7f8c8d" : "#f1c40f"}
                    onValueChange={handleChangeVG}
                    value={checkedVG}
                />          
            </View>
            
            <FlatList 
                data={products}
                style={styles.productslist}
                keyExtractor={product => String(product.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: product })=> (
                <View style={styles.products}>
                    <Image 
                        source={{uri: product.image.url}} //nao ta pegando ainda
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
                        onPress={() => navigationToUpdate(product)}
                    >
                        <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => confirmDelete(product.id)}
                    >
                        <Text style={styles.detailsButtonText}> Deletar</Text>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    );
}