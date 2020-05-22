import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Alert, StyleSheet, Switch } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../service/api.js';
import logoImg from '../../assets/logo/logo.png';
import phone from '../../assets/phone/phone.png';
import tv from '../../assets/tv/tv.png';
import eletro from '../../assets/eletro/eletro.png';
import videogames from '../../assets/videogames/videogames.png';
import delet from '../../assets/delete/delete.png';
import arrowLeft from '../../assets/arrowLeft/arrowLeft.png'
import logout from '../../assets/logout/logout.png';

import styles from './styles';

export default function Products(){
    const route = useRoute(); 
    const navigation = useNavigation();

    const [products, setProducts] = useState([]);
    const [allproducts, setallProducts] = useState([])
    const [total, setTotal] = useState(0);
    
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

    function navigationToDetail(product){
        navigation.navigate('Detail', { product });
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
        setTotal((products.filter(products => products.id !== id)).length); 
    }
    
    async function loadProducts(){
        const response = await api.get('products');

        setProducts(response.data);
        setallProducts(response.data);
        setTotal(response.headers['count-first']);
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
                
                <TouchableOpacity onPress={() => logOut()}>
                        <Image styler={styles.buttonLogout}source={logout}/>
                    </TouchableOpacity>
            </View>
            <View style={styles.subHeader}>
                <Text style={styles.subHeaderText}>
                    Total de <Text style={styles.subHeaderTextBold}>{total} casos.</Text> 
                </Text>
                <View>
                    <Text style= {styles.userNome}>{ "name" }</Text>
                    <Text style= {styles.userEmail}>{ "email" }</Text>
                </View>
            </View>    
            <View style={styles.listSwitch}>
                <Image source={tv}></Image>
                <Switch 
                    trackColor={{ false: "#95a5a6", true: "#44d9e6" }}
                    thumbColor={!checkedTV ? "#7f8c8d" : "#23b3b8"}
                    onValueChange={handleChangeTV}
                    value={checkedTV}
                    style= {styles.switch}
                />
                <Image source={eletro}></Image>
                <Switch 
                    trackColor={{ false: "#95a5a6", true: "#44d9e6" }}
                    thumbColor={!checkedEL ? "#7f8c8d" : "#23b3b8"}
                    onValueChange={handleChangeEL}
                    value={checkedEL}
                    style= {styles.switch}
                />
                <Image source={phone}></Image>
                <Switch 
                    trackColor={{ false: "#95a5a6", true: "#44d9e6" }}
                    thumbColor={!checkedCL ? "#7f8c8d" : "#23b3b8"}
                    onValueChange={handleChangeCL}
                    value={checkedCL}
                    style= {styles.switch}
                />
                <Image source={videogames}></Image>
                <Switch 
                    trackColor={{ false: "#95a5a6", true: "#44d9e6" }}
                    thumbColor={!checkedVG ? "#7f8c8d" : "#23b3b8"}
                    onValueChange={handleChangeVG}
                    value={checkedVG}
                    style= {styles.switch}
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
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigationToDetail(product)}
                        >
                            <Image style={styles.buttonArrow} source={arrowLeft}/>
                            <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => confirmDelete(product.id)}
                        >
                            <Image style={styles.buttonDelete} source={delet}/>
                    
                        </TouchableOpacity>
                    </View>
                </View>
                )}
            />
        </View>
    );
}