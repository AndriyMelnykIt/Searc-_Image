import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage, Pages, Photos } from './Components';
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Pages>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/photos" component={Photos}/>
                    </Switch>
                </Pages>
            </Container>
        </BrowserRouter>
    );
};

export default App;
