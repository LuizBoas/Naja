import React, { useState } from "react";
import GoogleLogin from "react-google-login";

import api from '../../services/api';
import { login } from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.png';

export default function Login() {
    const handleLogin = e => {
        try {
          localStorage.setItem('url', e.profileObj.url);
          localStorage.setItem('name', e.profileObj.name);
          localStorage.setItem('email', e.profileObj.email);
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
                clientId="327559392172-qdc1q6hojs17quj74aivqklaajv1dmpj.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={"single_host_origin"}
            />
            </div>
        </div>
    );
}
