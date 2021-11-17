import React from 'react';
import { Container } from 'react-bootstrap';
import { StyleText } from './styled/Global';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Components/Homepage';
import PageNotFound from './Components/PageNotFound';

const App = (props) => (

    <BrowserRouter>
            <Container fluid>
                <StyleText{ ...props }>
                    <Switch>
                        <Route exact path='/' component={ Homepage }/>
                        <Route path='*' component={ PageNotFound }/>
                    </Switch>
                </StyleText>
            </Container>
    </BrowserRouter>
);

export default App;
