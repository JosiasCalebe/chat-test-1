import React, {useState} from 'react';

// Header

import '../Login/style.css';

function Items() {

    const [descricao, setDescricao] = useState('');
    const [cor, setCor] = useState('');

    function adicionaItem(event) {
        event.preventDefault();
        fetch('http://localhost:5000/itens/',{
            method: "POST",
            body: JSON.stringify({ descricao: descricao, cor: cor }),
            headers: {
                "x-access-token":localStorage.getItem("usuario-token"),
                "Content-Type": "application/json"
            }
        })
        .then(console.log(localStorage.getItem("usuario-token")))
        .catch(error => console.log(error))
    }

    function atualizarDescricao(event) {
        setDescricao(event.target.value);
    }
    function atualizarCor(event) {
        setCor(event.target.value);
    }

        return(
        <div className="container">
            <section className="secLogin">
                <h2>Add Item</h2>
                <div className="login">
                    <form >
                        <label htmlFor="">Descricao</label>
                        <input className="txt" type="text" value={descricao}
                            onChange={atualizarDescricao}/>
                        <label htmlFor="">Cor</label>
                        <input className="txt" type="text" value={cor}
                            onChange={atualizarCor}/>
                        <button onClick={adicionaItem}>Adicionar</button>
                    </form>
                </div>
            </section>
        </div >
        );
};


export default Items;