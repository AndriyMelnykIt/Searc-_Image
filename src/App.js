import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { StyleText } from './styled/Global';

import { Header, PageNotFound, Homepage } from './Components/AllComponents';
import PhotosPage from './Components/PhotosPage';
import HomePage from './Components/HomePage';

const App = (props) => {

	return (
		<BrowserRouter>
			<Container fluid>
				<Switch>
					<Route path="/" exact component={HomePage}/>
					<Route path="/photos" component={PhotosPage}/>
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
