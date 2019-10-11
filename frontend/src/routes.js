import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Chat from './pages/Chat';
import Mural from './pages/Mural';
import Videos from './pages/Videos';
import Admin from './pages/Admin';
import Login from './pages/Login'
import Teste from './pages/Testes';
import Cadastro from './pages/Cadastro';
import NotFound from './pages/NotFound';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/chat' component={Chat} />
                <Route path='/mural' component={Mural} />
                <Route path='/videos' component={Videos} />
                <Route path='/admin' component={Admin} />
                <Route path='/login' component={Login} />
                <Route path='/teste' component={Teste} />
                <Route path='/cadastrar' component={Cadastro} />
                <Route path='/' exact component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}