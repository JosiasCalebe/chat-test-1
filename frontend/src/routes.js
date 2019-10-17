import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Join from './pages/Chat/Join/Join';
import Chat from './pages/Chat/ChatBox/ChatBox';
import Mural from './pages/Mural';
import Videos from './pages/Videos';
import Admin from './pages/Admin';
import Login from './pages/Login'
import Teste from './pages/Testes';
import Cadastro from './pages/Cadastro';
import Items from './pages/Items';

import NotFound from './pages/NotFound';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/join' component={Join} />
                <Route path='/chat' component={Chat} />
                <Route path='/mural' component={Mural} />
                <Route path='/videos' component={Videos} />
                <Route path='/admin' component={Admin} />
                <Route path='/login' component={Login} />
                <Route path='/teste' component={Teste} />
                <Route path='/cadastrar' component={Cadastro} />
                <Route path='/itens' component={Items} />
                <Route path='/' exact component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}