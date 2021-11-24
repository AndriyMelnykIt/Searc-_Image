import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import { Global, theme } from './styled/Global';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store} theme={theme}>
			<Global/>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
