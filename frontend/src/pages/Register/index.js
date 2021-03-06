import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import BackIcon from '@material-ui/icons/ArrowBack';

import logo from '../../assets/logo2.png'; 
import api from '../../services/api';
import './styles.css';

export default function Register() {
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const user = localStorage.getItem('name');

    function resetForm() {
        setName("");
        setTag("");
        setAmount("");
        setPrice("");
        setImage("");
    }

    // e prever o comportamento do componente
    async function handleProducts(e) {
        e.preventDefault();

        const user = localStorage.getItem('name');

        const data = {
            name,
            tag,
            amount,
            price,
            image,
        };

        try {
            const response = await api.post('products', data, {
                headers: {
                    Authorization: user,
                }
            });
            alert(`Produto cadastrado com sucesso!`);
            resetForm()
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }

    }

    return (
        <div className="new-products">
            <div className = "content">
                <section>
                    <img src={logo} alt="Naja"/>
                    <h1>Cadastro:</h1>
                    <p>Adcione um item ao seu estoque!</p>
                    <Link className="back-link" to="/products">
                        <BackIcon/>
                        Volta pra listagem
                    </Link>           
                </section>
                <form onSubmit={ handleProducts }>
                    <h2>Nome:</h2>
                    <input
                        placeholder="Nome do produto"
                        value={ name }
                        onChange={ e => setName(e.target.value)}
                    />

                    <h2>Categoria:</h2>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup value={tag} onChange={ e => setTag(e.target.value)}>
                            <FormControlLabel className="select-primary" value="TVs" control={<Radio color="primary" />} label="TVs" />
                            <FormControlLabel value="Eletrodomésticos" control={<Radio color="primary" />} label="Eletrodomésticos" />
                            <FormControlLabel value="Videogames" control={<Radio color="primary" />} label="Videogames" />
                            <FormControlLabel className="select-last" value="Celulares" control={<Radio color="primary" />} label="Celulares" />
                        </RadioGroup>
                    </FormControl>

                    <h2>Quantidade:</h2>
                    <input
                        placeholder="Quantidade"
                        value={ amount }
                        onChange={ e => setAmount(e.target.value)}
                    />

                    <h2>Preço:</h2>
                    <input
                        placeholder="Preço"
                        value={ price }
                        onChange={ e => setPrice(e.target.value)}
                    />

                    <h2>Imagem:</h2>
                    <input
                        placeholder="Link da imagem"
                        value={ image }
                        onChange={ e => setImage(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}