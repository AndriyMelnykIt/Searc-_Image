import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PhotosPage, HomePage, Pages } from './Components';
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/photos" component={PhotosPage}/>
                    </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;
