import React from "react";
import Homepage from "./pages/Homepage";
import './App.css';
import {Container} from "react-bootstrap";
import Header from "./Components/Header";

const App = () => {
    return (
        <Container fluid>
           <Header/>
           <Homepage/>
        </Container>
    );
}
export default App;
