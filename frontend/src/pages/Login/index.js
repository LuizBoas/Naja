import React, { useState } from "react";
import GoogleLogin from "react-google-login";

import api from '../../services/api';

import './styles.css';

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");

    const responseGoogle = response => {
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
    };

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('users', { email })

            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            console.log(response.data.name);
        } catch {
            alert('Deu erro, tente novamente');
        }
    }

    return (
        <div className="App">
            <h1>Login with Google</h1>
            <h2>Welcome: {name}</h2>
            <h2>Email: {email}</h2>
            <img src={url} alt={name} />
            <GoogleLogin
                clientId="327559392172-5pbfegfr9087bo8cl8n97f1bqk9d161n.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
            />
        </div>
    );
}
