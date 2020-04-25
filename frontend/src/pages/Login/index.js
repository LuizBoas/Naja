import React, { useState } from "react";
import GoogleLogin from "react-google-login";

import './styles.css';

import logo from '../../assets/logo.png';
import { useHistory } from "react-router-dom";

export default function Login() {
    const history = useHistory();

    const handleLogin = e => {
        try {
          localStorage.setItem('name', e.profileObj.name);
          localStorage.setItem('email', e.profileObj.email);
          history.push('/products')
        } catch {
          alert("Problema na autenticação, tente novamente.");
        }
      };

    return (
        <div className="App">
            <img src={ logo } />
            <div class="login">
            <h1>Login with Google</h1>
            <GoogleLogin
                clientId="327559392172-46j603ku4hrkq8frd15pq1e6rpol47mh.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={"single_host_origin"}
            />
            </div>
        </div>
    );
}
