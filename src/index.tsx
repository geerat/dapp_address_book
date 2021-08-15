import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind.output.css';
import { ChainId, DAppProvider } from '@usedapp/core';
import { Toolbar } from './components/Toolbar';

const config = {
    supportedChains: [ChainId.Ropsten],
};

ReactDOM.render(
    <React.StrictMode>
        <DAppProvider config={config}>
            <Toolbar>
                <App />
            </Toolbar>
        </DAppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
