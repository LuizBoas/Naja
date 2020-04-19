import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    // e prever o comportamento do componente
    async function handleProducts(e) {
        e.preventDefault();

        const data = {
            name,
            tag,
            amount,
            price,
            image,
        };

        try {
            const response = await api.post('products', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }

    }

    return (
        <div className="products-list">
            <form onSubmit={ handleProducts }>
                <input
                    placeholder="Nome do produto"
                    value={ name }
                    onChange={ e => setName(e.target.value)}
                />

                <input
                    placeholder="Tag"
                    value={ tag }
                    onChange={ e => setTag(e.target.value)}
                />

                <input
                    placeholder="Quantidade"
                    value={ amount }
                    onChange={ e => setAmount(e.target.value)}
                />

                <input
                    placeholder="Preço"
                    value={ price }
                    onChange={ e => setPrice(e.target.value)}
                />

                <input
                    placeholder="Link Imagem"
                    value={ image }
                    onChange={ e => setImage(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>

            <Link className="button" to="/products">Voltar para listagem</Link>
        </div>
    );
}