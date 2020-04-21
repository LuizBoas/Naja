import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import api from '../../services/api';

export default function Update() {
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
 
    async function handleAmount(e) {
        e.preventDefault();

        const data = {
            amount,
        };

        try {
            await api.put(`${window.location.pathname}/setAmount`, data);

            alert(`Quantidade atualizada!`);
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
        } catch (err) {
            alert('Erro em atualizar link da imagem, tente novamente');
        }
    }
    
    return (
        <div className="products-list">
            <form onSubmit={ handleAmount }>
                <input
                    placeholder="Quantidade"
                    value={ amount }
                    onChange={ e => setAmount(e.target.value)}
                />

                <button type="submit">Atualizar</button>
            </form>

            <form onSubmit={ handlePrice }>
                <input
                    placeholder="Preço"
                    value={ price }
                    onChange={ e => setPrice(e.target.value)}
                />

                <button type="submit">Atualizar</button>
            </form>

            <form onSubmit={ handleImage }>
                <input
                    placeholder="Link da imagem"
                    value={ image }
                    onChange={ e => setImage(e.target.value)}
                />

                <button type="submit">Atualizar</button>
            </form>


            <Link className="button" to="/products">Voltar para listagem</Link>
        </div>
            
    );
}