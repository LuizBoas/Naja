import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Alert, StyleSheet, Switch, Button } from 'react-native';
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
import edit from '../../assets/editar/editar.png';

import styles from './styles';

export default function Products(){
    const route = useRoute(); 
    const navigation = useNavigation();

    const [products, setProducts] = useState([]);
    const [allproducts, setallProducts] = useState([])
    const [total, setTotal] = useState(0);
    
    const name = route.params.name;
    const email = route.params.email;

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

    function register() {
        navigation.navigate('Register', {email});
    }

    function update() {
        loadProducts();
    }

    useEffect(() => {
        loadProducts();

    }, []);
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={ logoImg}/>

                <Text style={styles.subHeaderText}>
                    Total de <Text style={styles.subHeaderTextBold}>{total} casos.</Text> 
                </Text>
                
                <TouchableOpacity onPress={() => logOut()}>
                        <Image styler={styles.buttonLogout}source={logout}/>
                </TouchableOpacity>
            </View>
            <View style={styles.subHeader}>
                
                <View style={styles.userHeader}>
                    <Text style= {styles.userNome}>{ name }</Text>
                    <Text style= {styles.userEmail}>{ email }</Text>
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
                showsVerticalScrollIndicator={true}
                renderItem={({ item: product })=> (
                <View style={styles.products} style={ product.amount === 0 ? styles.esgotado : 
                product.amount < 10 ? styles.baixo : styles.normal}>
                    <View style={styles.imageIcone}>
                        <Image 
                             style={styles.imageProducts}
                            source={{
                                uri: product.image,
                              }}
                        />
                        <TouchableOpacity
                            onPress={() => navigationToUpdate(product)}
                        >
                            <Image style={styles.edit}source={edit}/>
                    
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.productsPropertyName}>Nome:</Text>
                    <Text style={styles.productsValue}>{product.name}</Text>

                    <Text style={styles.productsProperty}>Categoria:</Text>
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
            <View style={styles.cadastrar}>
                <Button title="Cadastrar novo item" color='#23b3b8' onPress={() =>  register()} />
            </View>

            <View style={styles.cadastrar}>
                <Button title="Atualizar lista de produtos" color='#23b3b8' onPress={() =>  update()} />
            </View>
        </View>
    );
}