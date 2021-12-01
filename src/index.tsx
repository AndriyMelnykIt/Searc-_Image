import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

<<<<<<< HEAD:src/index.js
ReactDOM.render (
=======
import App from './App';

ReactDOM.render(
>>>>>>> TypeScript:src/index.tsx
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
<<<<<<< HEAD:src/index.js
    document.getElementById ('root'),
=======
    document.getElementById('root'),
>>>>>>> TypeScript:src/index.tsx
);
