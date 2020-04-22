import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackIcon from '@material-ui/icons/ArrowBack';


import api from '../../services/api';

import './styles.css';

export default function Update() {
    const [products, setProducts] = useState([]);

    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        api.get(`${window.location.pathname}`)
            .then(response => {
                setProducts(response.data);
        })
    }, []);

    
    async function handleAmount(e) {
        e.preventDefault();

        const data = {
            amount,
        };

        try {
            await api.put(`${window.location.pathname}/setAmount`, data);
            
            alert(`Quantidade atualizada!`);
            window.location.reload()
        } catch (err) {
            alert('Erro em atualizar quantidade, tente novamente');
        }
    }

    async function handlePrice(e) {
        e.preventDefault();

        const data = {
            price,
        };

        try {
            await api.put(`${window.location.pathname}/setPrice`, data);

            alert(`Preço atualizado!`);
            window.location.reload()
        } catch (err) {
            alert('Erro em atualizar preço, tente novamente');
        }
    }

    async function handleImage(e) {
        e.preventDefault();

        const data = {
            image
        };

        try {
            await api.put(`${window.location.pathname}/setImage`, data);

            alert(`Link da imagem atualizada!`);
            window.location.reload()
        } catch (err) {
            alert('Erro em atualizar link da imagem, tente novamente');
        }
    }
    
    return (
        <div className= "container">
            <div class="stock">
                <ul>
                    {products.map(products => (
                        <li key={products.id}>

                            <div class="product-header">
                                <img src={ products.image } />
                                <p><strong>Código: </strong>{products.id}</p>
                                <p><strong>Nome: </strong>{products.name}</p>
                                <p><strong>Categoria: </strong>{products.tag}</p>
                                <p><strong>Quantidade: </strong>{products.amount}</p>
                                <p><strong>Preço: </strong>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(products.price)}</p>
                                <p>Criado pelo usuário {products.user}</p>                          
                            </div>

                            

                        </li>
                    ))}
                </ul>
            </div>
            <h1>Editar dados:</h1>
            <div className="atualizar">
                
                <form onSubmit={ handleAmount }>
                    <input
                        placeholder="Quantidade"
                        value={ amount }
                        onChange={ e => setAmount(e.target.value)}
                    />

                    <button type="submit" className="button">Atualizar</button>
                </form>

                <form onSubmit={ handlePrice }>
                    <input
                        placeholder="Preço"
                        value={ price }
                        onChange={ e => setPrice(e.target.value)}
                    />

                    <button type="submit" className="button">Atualizar</button>
                </form>

                <form onSubmit={ handleImage }>
                    <input
                        placeholder="Link da imagem"
                        value={ image }
                        onChange={ e => setImage(e.target.value)}
                    />

                    <button type="submit" className="button" >Atualizar</button>
                </form>


                <Link className="back-link" to="/products">
                        <BackIcon size={16} color="#E02041"/>
                        Volta pra listagem
                </Link> 
            </div>
        </div>
    );      
}