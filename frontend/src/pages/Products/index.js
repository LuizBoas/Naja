import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Products() {
    const [products, setProducts] = useState([]);

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

    async function get(id) {
        try {
            const result = await api.get(`/products/${products.id}`);

            console.log(result);
        } catch (err) {
            alert('Erro ao deletar, tente novamente.')
        }
    }

    return (
        <div>
            <header>
                <Link className="button" to="/products/new">Cadastrar novo produto</Link>
                <button type="button">
                    LogOut (ToDO)
                </button>
            </header>

            <h1>Lista de produtos</h1>

            <ul>
                {products.map(products => (
                    <li key={products.id}>
                        
                        <p><strong>Id:</strong>: {products.id}</p>
                        <p><img src={ products.image } /></p>
                        <p><strong>Name</strong>: {products.name}</p>
                        <p><strong>Tag</strong>: {products.tag}</p>
                        <p><strong>Amount</strong>: {products.amount}</p>
                        <p><strong>Price</strong>: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(products.price)}</p>

                        <button onClick={() => get(products.id)}>EDITAVEL</button>

                        <Link to={`/products/${products.id}`}>Editar produto</Link>

                        <button onClick={() => handleDeleteProduct(products.id)}  type="button">
                            Apagar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}