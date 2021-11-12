import React from "react";
import Homepage from "./pages/Homepage";
import './App.css';
import {Container} from "react-bootstrap";
import Header from "./Components/Header";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Container fluid>
                <Header/>
                <Route path='/' component={Homepage}/>
            </Container>
        </BrowserRouter>
    );
}
export default App;
