import React from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import pages
import Homepage from './Components/Homepage';
import PageNotFound from './Components/PageNotFound';

const App = () => {
   return (
        <BrowserRouter>
            <Container fluid>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='*' component={PageNotFound}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}
export default App;
