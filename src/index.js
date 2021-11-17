import React from 'react';
import ReactDOM from 'react-dom';
import {Global, theme,} from './styled/Global';
import App from './App';
import {ThemeProvider} from 'styled-components';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Global/>
            <App/>
        </ThemeProvider>

    </React.StrictMode>,
    document.getElementById('root')
);

