import React, {useState} from 'react';

// Header

import '../Login/style.css';

function Cadastro() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function adicionaItem(event) {
        event.preventDefault();
        fetch('http://localhost:5000/',{
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .catch(error => console.log(error))
    }

    function atualizarEmail(event) {
        setEmail(event.target.value);
    }
    function atualizarPassword(event) {
        setPassword(event.target.value);
    }

        return(
        <div className="container">
            <section className="secLogin">
                <h2>Cadastro</h2>
                <div className="login">
                    <form >
                        <label htmlFor="">Email</label>
                        <input className="txt" type="text" value={email}
                            onChange={atualizarEmail}/>
                        <label htmlFor="">Sua Senha</label>
                        <input className="txt" type="password" value={password}
                            onChange={atualizarPassword}/>
                        <button onClick={adicionaItem}>Cadastrar</button>
                    </form>
                </div>
            </section>
        </div >
        );
};


export default Cadastro;