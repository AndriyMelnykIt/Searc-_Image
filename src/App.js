import React from 'react';
import { Container } from 'react-bootstrap';
import { StyleText } from './styled/Global';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Homepage from './Components/Homepage';
import PageNotFound from './Components/PageNotFound';
import Header from './Components/Header';


const App = (props) => (

    <BrowserRouter>

            <Container fluid>
                <Header/>
                <StyleText{ ...props }>
                    <Switch>
                        <Route path='/' exact component={ Homepage }/>
                        <Route path='*' component={ PageNotFound }/>
                    </Switch>
                </StyleText>
            </Container>
    </BrowserRouter>
);

export default App;
