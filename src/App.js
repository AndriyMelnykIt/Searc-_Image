import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PhotosPage, HomePage, Pages } from './Components/AllComponents';

const App = () => {
	return (
		<BrowserRouter>
			<Pages>
				<Switch>
					<Route path="/" exact component={HomePage}/>
					<Route path="/photos" component={PhotosPage}/>
				</Switch>
			</Pages>
		</BrowserRouter>
	);
};

export default App;
