import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './contexts/ContextProvider';

import './index.css';

import App from './App'

ReactDOM.render(
    <StrictMode>
     <ContextProvider>
        <App />
      </ContextProvider>
    </StrictMode>
     ,
    document.getElementById('root'),
);