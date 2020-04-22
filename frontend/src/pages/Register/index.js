import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import BackIcon from '@material-ui/icons/ArrowBack';


import logo from '../../assets/logo.png'; 
import api from '../../services/api';
import './styles.css';


export default function Register() {
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    // e prever o comportamento do componente
    async function handleProducts(e) {
        e.preventDefault();

        const user = localStorage.getItem('email');

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
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }

    }

    return (
        <div className="new-products">
            <div className = "content">
                <section>
                    <h1>Cadastro novo produto</h1>
                    <img src={logo} alt="Naja"/>
                    <Link className="back-link" to="/products">
                        <BackIcon size={16} color="#E02041"/>
                        Volta pra listagem
                    </Link>           
                </section>
                <form onSubmit={ handleProducts }>
                    <input
                        placeholder="Nome do produto"
                        value={ name }
                        onChange={ e => setName(e.target.value)}
                    />


                    <FormControl className="select" component="fieldset">
                        <FormLabel component="legend">Categorias</FormLabel>
                        <RadioGroup value={tag} onChange={ e => setTag(e.target.value)}>
                            <FormControlLabel value="TVs" control={<Radio />} label="TVs" />
                            <FormControlLabel value="Eletrodomésticos" control={<Radio />} label="Eletrodomésticos" />
                            <FormControlLabel value="Videogames" control={<Radio />} label="Videogames" />
                            <FormControlLabel value="Celulares" control={<Radio />} label="Celulares" />
                        </RadioGroup>
                    </FormControl>



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
                    <button className="button" type="submit">Cadastrar</button>
                </form>

               
            </div>
        </div>
    );
}