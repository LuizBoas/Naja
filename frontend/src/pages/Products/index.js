import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { confirmAlert } from 'react-confirm-alert';

import api from '../../services/api';

import './styles.css';

export default function Products() {
    const [products, setProducts] = useState([]);

    localStorage.setItem('user', "chicox");

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
        if(state.checkedEL === true){ 
            setProducts(products.filter(products => products.tag === "Eletrodomésticos"));
        }
        if(state.checkedTV === true){ 
            setProducts(products.filter(products => products.tag === "TVs"));
        }
        if(state.checkedTV === true){ 
            setProducts(products.filter(products => products.tag === ""));
        }
        if(state.checkedTV === true){ 
            setProducts(products.filter(products => products.tag === "TVs"));
        }
    };
/*parte em densenvolvimento filter a cima*/

    return (
        <div>
            <header>
                <button onClick={"/products/new"}>Cadastrar novo produto</button>
                <Link to to="/">
                    LogOut (ToDO)
                </Link>
            </header>

            <h1>Lista de produtos</h1>
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
            <ul>
                {products.map(products => (
                    <li key={products.id}>
                        
                        <p><strong>Id:</strong>: {products.id}</p>
                        <p><img src={ products.image } /></p>
                        <p><strong>User</strong>: {products.user}</p>
                        <p><strong>Name</strong>: {products.name}</p>
                        <p><strong>Tag</strong>: {products.tag}</p>
                        <p><strong>Amount</strong>: {products.amount}</p>
                        <p><strong>Price</strong>: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(products.price)}</p>

                        <Link className="back-link" to={`/products/${products.id}`}>Editar produto</Link>
                        

                        <button onClick={() => { if (window.confirm('Você realmente deseja remover este item?')) handleDeleteProduct(products.id) } }  type="button">
                            Apagar
                        </button>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}