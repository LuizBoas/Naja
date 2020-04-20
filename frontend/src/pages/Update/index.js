import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import api from '../../services/api';

export default function Update() {
    const [amount, setAmount] = useState('');
 
    async function handleUpdate(e) {
        e.preventDefault();

        const id = localStorage.getItem('id');

        

        const data = {
            amount
        };

        try {
            await api.put(`${window.location.pathname}`, data);

            alert(`Atualizado com sucesso`);
        } catch (err) {
            alert('Erro em atualizar quantidade, tente novamente');
        }
    }
    
    return (
        <div className="products-list">
            <form onSubmit={ handleUpdate }>
                <input
                    placeholder="Quantidade"
                    value={ amount }
                    onChange={ e => setAmount(e.target.value)}
                />

                <button type="submit">Atualizar</button>
        </form>

            <Link className="button" to="/products">Voltar para listagem</Link>
        </div>
    );
}