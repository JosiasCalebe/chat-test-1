import React, { useState } from 'react';

// Header
import Header from '../../components/Header/index';

import './style.css';

export default function App() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(event) {
        event.preventDefault();
        fetch('http://localhost:5000/login',{
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: {
                //"x-access-token": event.token,
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json().then(function(result){localStorage.setItem("usuario-token",result.token);localStorage.setItem("id-user",result.id)}))
        .catch(error => console.log(error))
    }

    function atualizarEmail(event) {
        setEmail(event.target.value);
    }
    function atualizarPassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div className="container">
            <section className="secLogin">
                <h2>Login</h2>
                <div className="login">
                    <form >
                        <label htmlFor="">Seu RM (Registro de Matrícula)</label>
                        <input className="txt" type="text" value={email}
                            onChange={atualizarEmail}/>
                        <label htmlFor="">Sua Senha</label>
                        <input className="txt" type="password" value={password}
                            onChange={atualizarPassword}/>
                        <button onClick={login} redirect="/itens">Logar</button>
                        <div className="utils">
                            <a href="#">Esqueceu a Senha?</a>
                        </div>
                    </form>
                </div>
            </section>
        </div >
    );
}