import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import Header from './Components/Header';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

//import pages
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';

const App = () => {
   return (
        <BrowserRouter>
            <Container fluid>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='*' component={PageNotFound}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}
export default App;
