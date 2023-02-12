import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import * as C from './AppStyled';

import { HomeScreen } from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import { MenuItem } from './components/MenuItem';
import { PrivateRoute } from './components/PrivateRoute';
import { Cart } from './components/Cart';

const App = () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <C.Container>
                <C.Menu>
                    <MenuItem icon="/assets/store.png" link="/" label="Ir para a loja"/>
                    <MenuItem icon="/assets/order.png" link="/orders" label="Ir para ordens"/>
                    <MenuItem icon="/assets/profile.png" link="/profile" label="Ir para o seu perfil"/>
                </C.Menu>

                <C.PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>

                        <PrivateRoute exact path="/orders">
                            <div>Tela de pedidos</div>
                        </PrivateRoute>

                        <PrivateRoute exact path="/profile">
                            <div>Tela de perfil</div>
                        </PrivateRoute>

                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </C.PageBody>
                <Cart />

            </C.Container>
        </BrowserRouter>
    );
}

export default App;