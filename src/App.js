import React from "react";
import Homepage from "./pages/Homepage";
import './App.css';
import Picture from "./Components/Picture";
import {BrowserRouter} from "react-router-dom";
import {Container} from "react-bootstrap";

const App = () => {
    return (

            <BrowserRouter>
                <Container fluid>
                    <Homepage/>
                </Container>
            </BrowserRouter>

    );
}
export default App;
