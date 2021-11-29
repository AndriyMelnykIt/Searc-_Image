import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import {  HomePage, Photos, Header } from './Components';

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Header/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/photos" component={Photos}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;
