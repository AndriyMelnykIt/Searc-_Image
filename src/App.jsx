import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { StyleText } from './styled/Global';

import { Header, PageNotFound, Homepage } from './Components/Pages';

const App = (props) => (
	<BrowserRouter>
		<Container fluid>
			<Header />
			<StyleText {...props }>
				<Switch>
					<Route path="/" exact component={ Homepage } />
					<Route path="*" component={PageNotFound } />
				</Switch>
			</StyleText>
		</Container>
	</BrowserRouter>
);

export default App;
