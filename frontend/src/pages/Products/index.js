import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { login, logout } from '../../services/auth';
import api from '../../services/api';
import './styles.css';

export default function Products() {
    const [products, setProducts] = useState([]);
    
    const avatar = localStorage.getItem('avatar');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    useEffect(() => {
        api.get('products')
            .then(response => {
                setProducts(response.data);
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
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        console.log(event.target.name);
        if(state.checkedTV === true){ 
            setProducts(products.filter(products => products.tag === "TVs"));
        }
        if(state.checkedEL === true){ 
            setProducts(products.filter(products => products.tag === "Eletrodomésticos"));
        }
        if(state.checkedVG === true){ 
            setProducts(products.filter(products => products.tag === "Videogames"));
        }
        if(state.checkedCL === true){ 
            setProducts(products.filter(products => products.tag === "Celulares"));
        }
    };

/*parte em densenvolvimento filter a cima*/
    return (
        <div class="container">
            <header class="header">
                <div class="profile">
                    <img src={ avatar } />
                    <p><strong>Nome: </strong>{ name }</p>
                    <p><strong>Email: </strong>{ email }</p>
                </div>
                <div class="new-logout">
                    <Link to="/" class="button" onClick={ logout }>Logout</Link>
                    <Link to="/products/new" class="button">+Produto</Link>
                    <button onClick={ login }>Login</button>
                </div>
                <div class="sub-header">
                    <h1>Lista de produtos</h1>
                </div>
            </header>

            
{/*parte em densenvolvimento filter a baixo*/}
            <FormGroup row>
                <FormControlLabel 
                    control={<Switch checked={state.checkedTV} onChange={handleChange} name="checkedTV" />}
                    label="TVs"
                />
                <FormControlLabel
                    control={<Switch checked={state.checkedEL} onChange={handleChange} name="checkedEL"/>}
                    label="Eletrodomésticos"
                />
                <FormControlLabel 
                    control={<Switch checked={state.checkedVG} onChange={handleChange} name="checkedVG"/>} 
                    label="Videogames" 
                />
                <FormControlLabel 
                    control={<Switch checked={state.checkedCL} onChange={handleChange} name="checkedCL"/>} 
                    label="Celulares" 
                />
            </FormGroup>
{/*parte em densenvolvimento filter a cima^*/}

            <div class="stock">
                <ul>
                    {products.map(products => (
                        <li key={products.id}>

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