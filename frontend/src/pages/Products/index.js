import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import logo from '../../assets/logo.png';
import { logout } from '../../services/auth';
import api from '../../services/api';
import './styles.css';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [allproducts, setallProducts] = useState([])
    
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    useEffect(() => {
        api.get('products')
            .then(response => {
                setProducts(response.data);
                setallProducts(response.data);
        })
    }, []);

    async function handleDeleteProduct(id) {
        try {
            await api.delete(`products/${id}`);
            setProducts(products.filter(products => products.id !== id)); 
                
            
        } catch (err) {
            alert('Erro ao deletar, tente novamente.')
        }
        
    }
    
/*parte em densenvolvimento filter a baixo*/
    

    const [state, setState] = React.useState({
        checkedTV: true,
        checkedEL: true,
        checkedVG: true,
        checkedCL: true,
    });
    
    async function handleChangeTV(event) {
        setState({ ...state, [event.target.name]: event.target.checked });
        setProducts(allproducts);
        
        if(event.target.checked !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "TVs"))
            });
            console.log(products);
        }
        if(state.checkedEL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Eletrodomésticos"));
            });
            console.log(products);
        }
        if(state.checkedVG !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Videogames"));
            });
        }
        if(state.checkedCL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Celulares"));
            });
            console.log(products);
        }
    }

    async function handleChangeEL(event) {
        setState({ ...state, [event.target.name]: event.target.checked });
        setProducts(allproducts);
        
        if(event.target.checked !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Eletrodomésticos"))
            });
            console.log(products);
        }
        if(state.checkedTV !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "TVs"));
            });
            console.log(products);
        }
        if(state.checkedVG !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Videogames"));
            });
        }
        if(state.checkedCL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Celulares"));
            });
            console.log(products);
        }
        
    }

    async function handleChangeVG(event) {
        setState({ ...state, [event.target.name]: event.target.checked });
        setProducts(allproducts);
        
        if(event.target.checked !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Videogames"))
            });
            console.log(products);
        }
        if(state.checkedTV !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "TVs"));
            });
            console.log(products);
        }
        if(state.checkedEL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Eletrodomésticos"));
            });
        }
        if(state.checkedCL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Celulares"));
            });
            console.log(products);
        }
        
    }

    async function handleChangeCE(event) {
        setState({ ...state, [event.target.name]: event.target.checked });
        setProducts(allproducts);
        
        if(event.target.checked !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Celulares"))
            });
            console.log(products);
        }
        if(state.checkedTV !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "TVs"));
            });
            console.log(products);
        }
        if(state.checkedVG !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Videogames"));
            });
        }
        if(state.checkedEL !== true){
            setProducts((products) => {
                return (products.filter(products => products.tag !== "Eletrodomésticos"));
            });
            console.log(products);
        }
        
    }

/*parte em densenvolvimento filter a cima*/

    return (
        <div class="container">
            <header class="header">
                <div class="superior-header">
                    <img class="logo" src={ logo } />
                    <div class="profile">
                        <p><strong>Nome: </strong>{ name }</p>
                        <p><strong>Email: </strong>{ email }</p>
                    </div>
                    <div class="new-logout">
                        <Link to="/products/new" style={{ margin: "0 5% 0 0" }} class="button product">+Produto</Link>
                        <Link to="/" class="button logout" onClick={ logout }>Logout</Link>
                    </div>
                </div>

                <div class="sub-header">
                    <h1>Lista de produtos</h1>
                
            
{/*parte em densenvolvimento filter a baixo*/}
            <FormGroup row>
                <FormControlLabel 
                    control={<Switch checked={state.checkedTV} onChange={handleChangeTV} name="checkedTV" />}
                    label="TVs"
                />
                <FormControlLabel
                    control={<Switch checked={state.checkedEL} onChange={handleChangeEL} name="checkedEL"/>}
                    label="Eletrodomésticos"
                />
                <FormControlLabel 
                    control={<Switch checked={state.checkedVG} onChange={handleChangeVG} name="checkedVG"/>} 
                    label="Videogames" 
                />
                <FormControlLabel 
                    control={<Switch checked={state.checkedCL} onChange={handleChangeCE} name="checkedCL"/>} 
                    label="Celulares" 
                />
            </FormGroup>

            </div>
            </header>
{/*parte em densenvolvimento filter a cima^*/}

            <div class="stock">
                <ul>
                    {products.map(products => (
                        <li key={products.id} className={ 
                            products.amount === 0 ? "esgotado" : 
                            products.amount < 10 ? "baixo" : "normal" }>

                            <div class="product-header">
                                <img src={ products.image } />
                                <p><strong>Nome: </strong>{products.name}</p>
                                <p><strong>Categoria: </strong>{products.tag}</p>
                                <p><strong>Quantidade: </strong>{products.amount}</p>
                                <p><strong>Preço: </strong>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(products.price)}</p>
                            </div>

                            <div class="buttons">
                                <Link className="button" to={`/products/${products.id}`}>+ Detalhes</Link>
                                <button class="button" onClick={() => { if (window.confirm('Você realmente deseja remover este item?')) handleDeleteProduct(products.id) } }  type="button">
                                    Apagar
                                </button>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}